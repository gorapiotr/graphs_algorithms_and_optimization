import { Point } from "./Point";
import {Shape} from "./Shape";

export class Polygon extends Shape{

    constructor(points: Point[]) {
        super(points);
    }
}