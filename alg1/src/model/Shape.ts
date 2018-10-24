import {Point} from "./Point";
import {Spike, Direction} from "./Spike";
import {Line} from "./Line";
import {Polygon} from "./Polygon";
import tryConvertScriptKindName = ts.server.tryConvertScriptKindName;

export class Shape {

    public points: Point[];
    public spikes: Spike[] = Array<Spike>();
    public test: Point[];

    constructor(points: Point[]) {
        this.points = points;
        this.getPointsOrientation();
        this.getSpikes();
        this.test = points;

    }

    // get orientation
    public getPointsOrientation() {
        this.points.map((point: Point, index: number) => {
            const pointDet = this.prepareDet(point, index);
            point.orientation = Math.sign(this.det(pointDet));
        });
    }

    protected prepareDet(point: Point, index: number) {
        let pointDet = [
            [0, 0, 1],
            [0, 0, 1],
            [0, 0, 1],
        ];

        //set previous point
        if (index > 0) {
            pointDet[0][0] = this.points[index - 1].x;
            pointDet[0][1] = this.points[index - 1].y;
        } else {
            pointDet[0][0] = this.points[this.points.length - 1].x;
            pointDet[0][1] = this.points[this.points.length - 1].y;
        }
        //set actual point
        pointDet[1][0] = this.points[index].x;
        pointDet[1][1] = this.points[index].y;
        //set next point
        if (index < this.points.length - 1) {
            pointDet[2][0] = this.points[index + 1].x;
            pointDet[2][1] = this.points[index + 1].y;
        } else {
            pointDet[2][0] = this.points[0].x;
            pointDet[2][1] = this.points[0].y;
        }

        return pointDet;
    }

    protected det(M: any) {
        if (M.length == 2) {
            return (M[0][0] * M[1][1]) - (M[0][1] * M[1][0]);
        }
        let answer = 0;
        for (let i = 0; i < M.length; i++) {
            answer += Math.pow(-1, i) * M[0][i] * this.det(this.deleteRowAndColumn(M, i));
        }
        return answer;
    }

    protected deleteRowAndColumn(M: any, index: any) {
        let temp = [];
        // copy the array first
        for (let i = 0; i < M.length; i++) {
            temp.push(M[i].slice(0));
        }
        // delete the first row
        temp.splice(0, 1);
        // delete the column at the index specified
        for (let i = 0; i < temp.length; i++) {
            temp[i].splice(index, 1);
        }
        return temp;
    }

    //get spikes
    public getSpikes() {
        this.points.forEach((point: Point, index: number) => {
            const pointDet = this.prepareDet(point, index);
            this.isSpike(pointDet, point);
        });
    }

    public isSpike(M: any, point: Point) {

        //bottom
        if (
            M[0][1] > M[1][1] &&
            M[2][1] > M[1][1] &&
            point.orientation == 1
        ) {
            this.spikes.push(new Spike(point, Direction.bottom));
        }
        //bottom
        if (
            M[0][1] < M[1][1] &&
            M[2][1] < M[1][1] &&
            point.orientation == -1
        ) {
            this.spikes.push(new Spike(point, Direction.bottom));
        }
        //top
        if (
            M[0][1] > M[1][1] &&
            M[2][1] > M[1][1] &&
            point.orientation == -1
        ) {
            this.spikes.push(new Spike(point, Direction.top));
        }
        //top
        if (
            M[0][1] < M[1][1] &&
            M[2][1] < M[1][1] &&
            point.orientation == 1
        ) {
            this.spikes.push(new Spike(point, Direction.top));
        }

    }

    //max bottom spike
    public getMaxBottomSpike() {
        const bottomSpike = this.spikes.filter((spike) => {
            return spike.position == Direction.bottom;
        });

        if (bottomSpike.length > 0) {
            return bottomSpike.reduce(function (prev, current) {
                return (prev.point.y > current.point.y) ? prev : current
            });
        } else {
            let points: Point[] = Object.create(this.points);
            points.sort((a, b) => a.y - b.y);
            return new Spike(points[0], Direction.bottom);
        }
    }

    //min top spike
    public getMinTopSpike() {
        const bottomSpike = this.spikes.filter((spike) => {
            return spike.position == Direction.top;
        });

        if (bottomSpike.length > 0) {
            return bottomSpike.reduce(function (prev, current) {
                return (prev.point.y < current.point.y) ? prev : current
            });
        } else {
            let points: Point[] = Object.create(this.points);
            points.sort((a, b) => b.y - a.y);
            return new Spike(points[0], Direction.top);
        }
    }

    //check kernel exist
    public kernelExist() {
        if (this.getMinTopSpike() && this.getMaxBottomSpike()) {
            return this.compareSpike();
        }
        return true;
    }

    public compareSpike() {
        return this.getMinTopSpike().point.y >= this.getMaxBottomSpike().point.y ? true : false;
    }

    //find kernel circuit
    public findKernelCircuit() {

        if (this.compareSpike()) {
            this.points.forEach((point: Point, index: number) => {
                this.checkPoint(point, index);
            });
        }
        this.sortClockWeise();
        this.removeNotCircuitPoints();
        return this.computeCircuit();
    }

    public checkPoint(point: Point, index: number) {
        let topSpike = this.getMinTopSpike();
        let bottomSpike = this.getMaxBottomSpike();

        if (index != 0) {
            if (point.y < bottomSpike.point.y &&
                this.points[index - 1].y > bottomSpike.point.y
            ) {
                this.newPoint(bottomSpike, point, index);
            }

            if (point.y > bottomSpike.point.y &&
                this.points[index - 1].y < bottomSpike.point.y
            ) {
                this.newPoint(bottomSpike, point, index);
            }

            if (point.y > topSpike.point.y &&
                this.points[index - 1].y < topSpike.point.y
            ) {
                this.newPoint(topSpike, point, index);
            }

            if (point.y < topSpike.point.y &&
                this.points[index - 1].y > topSpike.point.y
            ) {
                this.newPoint(topSpike, point, index);
            }
            ;
        }
    }

    public newPoint(spike: Spike, point: Point, index: number) {
        let line = new Line();
        line.computeLine(point, this.points[index - 1]);
        let newPoint = line.crossPoint(spike.point.y);
        this.points.push(newPoint);
    }

    public sortClockWeise() {
        // Find min max to get center
        // Sort from top to bottom
        this.points.sort((a, b) => a.y - b.y);

        // Get center y
        const cy = (this.points[0].y + this.points[this.points.length - 1].y) / 2;

        // Sort from right to left
        this.points.sort((a, b) => b.x - a.x);

        // Get center x
        const cx = (this.points[0].x + this.points[this.points.length - 1].x) / 2;

        // Center point
        const center = {x: cx, y: cy};
        let startAng: any;

        this.points.forEach(point => {
            let ang = Math.atan2(point.y - center.y, point.x - center.x);
            if (!startAng) {
                startAng = ang
            }
            else {
                if (ang < startAng) {  // ensure that all points are clockwise of the start point
                    ang += Math.PI * 2;
                }
            }
            point.angle = ang; // add the angle to the point
        });
        this.points.sort((a, b) => a.angle - b.angle);
    }


    public removeNotCircuitPoints() {

        if (this.getMaxBottomSpike()) {
            this.points = this.points.filter((point) => {
                return point.y >= this.getMaxBottomSpike().point.y;
            });
        }

        if (this.getMinTopSpike()) {
            this.points = this.points.filter((point) => {
                return point.y <= this.getMinTopSpike().point.y;
            });
        }

    }

    public computeCircuit() {
        let circuit = 0;
        this.points.forEach((point, index) => {
            if (index != 0) {
                circuit = circuit + Math.sqrt(Math.pow((point.x - this.points[index - 1].x), 2) + Math.pow((point.y - this.points[index - 1].y), 2));
            }
            if (index == this.points.length - 1) {
                circuit = circuit + Math.sqrt(Math.pow((point.x - this.points[0].x), 2) + Math.pow((point.y - this.points[0].y), 2));
            }
        });
        return circuit;
    }

    public computeArea() {
        let areaPoints: Point[] = [];
        let area = 0;
        this.points.forEach((p, index) => {
            if (index == 0) {
                let x = this.points[index + 1].x - this.points[this.points.length - 1].x;
                let point = new Point(0, x, p.y);
                areaPoints.push(point);
            }
            if (index !== 0 && index !== this.points.length - 1) {
                let x = this.points[index + 1].x - this.points[index - 1].x;
                let point = new Point(0, x, p.y);
                areaPoints.push(point);
            }
            if (index == this.points.length - 1) {
                let x = this.points[0].x - this.points[index - 1].x;
                let point = new Point(0, x, p.y);
                areaPoints.push(point);
            }
        });

        areaPoints.forEach((p) => {
            area = area + p.x * p.y;
        });

        return area = Math.abs(area / 2);
    }

}