"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Spike_1 = require("./Spike");
const Line_1 = require("./Line");
class Shape {
    constructor(points) {
        this.spikes = Array();
        this.points = points;
        this.getPointsOrientation();
        this.getSpikes();
        this.test = points;
    }
    // get orientation
    getPointsOrientation() {
        this.points.map((point, index) => {
            const pointDet = this.prepareDet(point, index);
            point.orientation = Math.sign(this.det(pointDet));
        });
    }
    prepareDet(point, index) {
        let pointDet = [
            [0, 0, 1],
            [0, 0, 1],
            [0, 0, 1],
        ];
        //set previous point
        if (index > 0) {
            pointDet[0][0] = this.points[index - 1].x;
            pointDet[0][1] = this.points[index - 1].y;
        }
        else {
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
        }
        else {
            pointDet[2][0] = this.points[0].x;
            pointDet[2][1] = this.points[0].y;
        }
        return pointDet;
    }
    det(M) {
        if (M.length == 2) {
            return (M[0][0] * M[1][1]) - (M[0][1] * M[1][0]);
        }
        let answer = 0;
        for (let i = 0; i < M.length; i++) {
            answer += Math.pow(-1, i) * M[0][i] * this.det(this.deleteRowAndColumn(M, i));
        }
        return answer;
    }
    deleteRowAndColumn(M, index) {
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
    getSpikes() {
        this.points.forEach((point, index) => {
            const pointDet = this.prepareDet(point, index);
            this.isSpike(pointDet, point);
        });
    }
    isSpike(M, point) {
        //bottom
        if (M[0][1] > M[1][1] &&
            M[2][1] > M[1][1] &&
            point.orientation == 1) {
            this.spikes.push(new Spike_1.Spike(point, Spike_1.Direction.bottom));
        }
        //bottom
        if (M[0][1] < M[1][1] &&
            M[2][1] < M[1][1] &&
            point.orientation == -1) {
            this.spikes.push(new Spike_1.Spike(point, Spike_1.Direction.bottom));
        }
        //top
        if (M[0][1] > M[1][1] &&
            M[2][1] > M[1][1] &&
            point.orientation == -1) {
            this.spikes.push(new Spike_1.Spike(point, Spike_1.Direction.top));
        }
        //top
        if (M[0][1] < M[1][1] &&
            M[2][1] < M[1][1] &&
            point.orientation == 1) {
            this.spikes.push(new Spike_1.Spike(point, Spike_1.Direction.top));
        }
    }
    //max bottom spike
    getMaxBottomSpike() {
        const bottomSpike = this.spikes.filter((spike) => {
            return spike.position == Spike_1.Direction.bottom;
        });
        return bottomSpike.reduce(function (prev, current) {
            return (prev.point.y > current.point.y) ? prev : current;
        });
    }
    //min top spike
    getMinTopSpike() {
        const bottomSpike = this.spikes.filter((spike) => {
            return spike.position == Spike_1.Direction.top;
        });
        return bottomSpike.reduce(function (prev, current) {
            return (prev.point.y < current.point.y) ? prev : current;
        });
    }
    //check kernel exist
    kernelExist() {
        if (this.getMinTopSpike() && this.getMaxBottomSpike()) {
            return this.compareSpike();
        }
        return true;
    }
    compareSpike() {
        return this.getMinTopSpike().point.y >= this.getMaxBottomSpike().point.y ? true : false;
    }
    //find kernel circuit
    findKernelCircuit() {
        if (this.compareSpike()) {
            this.points.forEach((point, index) => {
                let newPoint = this.checkPoint(point, index);
                if (newPoint != null) {
                    console.log(newPoint);
                }
            });
        }
    }
    checkPoint(point, index) {
        let topSpike = this.getMinTopSpike();
        let bottomSpike = this.getMaxBottomSpike();
        if (index != 0) {
            if (point.y < bottomSpike.point.y &&
                this.points[index - 1].y > bottomSpike.point.y) {
                return this.newPoint(bottomSpike, point, index);
            }
            if (point.y > bottomSpike.point.y &&
                this.points[index - 1].y < bottomSpike.point.y) {
                return this.newPoint(bottomSpike, point, index);
            }
            if (point.y > topSpike.point.y &&
                this.points[index - 1].y < topSpike.point.y) {
                return this.newPoint(topSpike, point, index);
            }
            if (point.y < topSpike.point.y &&
                this.points[index - 1].y > topSpike.point.y) {
                return this.newPoint(topSpike, point, index);
            }
            return null;
        }
    }
    newPoint(spike, point, index) {
        let line = new Line_1.Line();
        line.computeLine(point, this.points[index - 1]);
        return line.crossPoint(spike.point.y);
    }
}
exports.Shape = Shape;
