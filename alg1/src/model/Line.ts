import {Point} from "./Point";

export class Line {

    public a: number | null;
    public b: number | null;

    constructor() {
        this.a = null;
        this.b = null
    }

    //line form points
    public computeLine(startPoint: Point, endPoint: Point) {
        if(endPoint.x != startPoint.x) {
            this.a = (endPoint.y - startPoint.y) / (endPoint.x - startPoint.x);
            this.b = startPoint.y - this.a*startPoint.x;
        } else {
            this.a = 0;
            this.b = startPoint.x;
        }
    }

    public crossPoint(y: number) {

        let x;
        if(this.a != 0) {
            x = (y - this.b) / (this.a);
        } else {
            x = this.b;
        }

        return new Point(null,x,y);
    }

}