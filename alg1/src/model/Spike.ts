import {Point} from "./Point";

export enum Direction {
    top = "top",
    bottom = "bottom",
}

export class Spike {

    public point: Point;
    public position: Direction;

    constructor(point: Point, position: Direction) {
        this.point = point;
        this.position = position;
    }
}