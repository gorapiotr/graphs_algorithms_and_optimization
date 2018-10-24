"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = require("./model/Point");
const Polygon_1 = require("./model/Polygon");
console.log("START PROGRAM");
//start program
let points1 = [
    new Point_1.Point(1, 8, 2),
    new Point_1.Point(2, 10, 4),
    new Point_1.Point(3, 10, 9),
    new Point_1.Point(4, 8, 7),
    new Point_1.Point(5, 5, 9),
    new Point_1.Point(6, 5, 6),
    new Point_1.Point(7, 5, 4),
];
let points2 = [
    new Point_1.Point(1, 3, 2),
    new Point_1.Point(2, 5, 1),
    new Point_1.Point(3, 5, 6),
    new Point_1.Point(4, 3, 5),
    new Point_1.Point(5, 1, 6),
    new Point_1.Point(6, 1, 1),
];
let points3 = [
    new Point_1.Point(1, 1, 2),
    new Point_1.Point(2, 2, 4),
    new Point_1.Point(3, 3, 1),
    new Point_1.Point(4, 6, 5),
    new Point_1.Point(5, 3, 3),
    new Point_1.Point(6, 1, 6),
];
let points4 = [
    new Point_1.Point(1, 5, 2),
    new Point_1.Point(2, 4, 4),
    new Point_1.Point(3, 5, 6),
    new Point_1.Point(4, 1, 6),
    new Point_1.Point(5, 2, 4),
    new Point_1.Point(6, 1, 2),
];
//polygon
let polygon = new Polygon_1.Polygon(points4);
// console.log(polygon.getMinTopSpike());
// console.log(polygon.getMaxBottomSpike());
console.log('Kernel exist: ' + polygon.kernelExist());
if (polygon.kernelExist()) {
    //console.log(polygon.points);
    console.log('Kernel circuit: ' + polygon.findKernelCircuit());
    //console.log(polygon.points);
    console.log('Kernel area: ' + polygon.computeArea());
}
