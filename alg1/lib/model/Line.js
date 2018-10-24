"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = require("./Point");
class Line {
    constructor() {
        this.a = null;
        this.b = null;
    }
    //line form points
    computeLine(startPoint, endPoint) {
        if (endPoint.x != startPoint.x) {
            this.a = (endPoint.y - startPoint.y) / (endPoint.x - startPoint.x);
            this.b = startPoint.y - this.a * startPoint.x;
        }
        else {
            this.a = 0;
            this.b = startPoint.x;
        }
    }
    crossPoint(y) {
        let x;
        if (this.a != 0) {
            x = (y - this.b) / (this.a);
        }
        else {
            x = this.b;
        }
        return new Point_1.Point(null, x, y);
    }
}
exports.Line = Line;
