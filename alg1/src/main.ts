import { Point } from "./model/Point";
import { Polygon } from "./model/Polygon";
import {Line} from "./model/Line";

console.log("START PROGRAM");

//start program
let points1: Point[] = [
    new Point(1,8,2),
    new Point(2,10,4),
    new Point(3,10,9),
    new Point(4,8,7),
    new Point(5,5,9),
    new Point(6,5,6),
    new Point(7,5,4),
];

let points2: Point[] = [
    new Point(1,1,2),
    new Point(2,3,4),
    new Point(3,5,2),
    new Point(4,7,4),
    new Point(5,9,3),
    new Point(6,9,9),
    new Point(7,7,8),
    new Point(8,3,9),
    new Point(9,1,8),
    new Point(10,2,6)
];

let points3: Point[] = [
    new Point(1,1,2),
    new Point(2,2,4),
    new Point(3,3,1),
    new Point(4,6,5),
    new Point(5,3,3),
    new Point(6,1,6),
];

let points4: Point[] = [
    new Point(1,3,2),
    new Point(2,5,1),
    new Point(3,5,6),
    new Point(4,3,5),
    new Point(5,1,6),
    new Point(6,1,1),
]
]


//polygon
let polygon = new Polygon(points4);

console.log(polygon.getMinTopSpike());
console.log(polygon.getMaxBottomSpike());
console.log(polygon.kernelExist());

//line
let topLine = new Line();
    topLine.a = 0;
    topLine.b = polygon.getMinTopSpike().point.y;

let bottomLine = new Line();
    topLine.a = 0;
    topLine.b = polygon.getMaxBottomSpike().point.y;

polygon.findKernelCircuit();
// line.computeLine(new Point(1,10,4), new Point(2,10,9));
// console.log(line);
// console.log(line.crossPoint(7));
//console.log(polygon.points);