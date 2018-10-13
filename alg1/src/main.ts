import { Point } from "./Point";
import { Polygon } from "./Polygon";

//start program
let points: Point[] = [
    new Point(1,1),
    new Point(1,2)
];

let polygon = new Polygon(points);

console.log(polygon.points);
