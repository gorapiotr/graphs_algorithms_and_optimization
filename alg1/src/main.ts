import { Point } from "./model/Point";
import { Polygon } from "./model/Polygon";

console.log("START PROGRAM");

//start program
let points: Point[] = [
    new Point(1,8,2),
    new Point(2,10,4),
    new Point(3,10,9),
    new Point(4,8,7),
    new Point(5,5,9),
    new Point(5,5,6),
    new Point(7,5,4),
];

let polygon = new Polygon(points);

polygon.getPointsOrientation();

console.log(polygon);
