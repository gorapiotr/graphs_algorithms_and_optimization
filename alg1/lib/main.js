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
////////////////////////////////////
let points5 = [
    new Point_1.Point(1, -4, 5),
    new Point_1.Point(2, -1, 1),
    new Point_1.Point(3, -5, -4),
    new Point_1.Point(4, -4, -5),
    new Point_1.Point(5, -6, -8),
    new Point_1.Point(6, -1, -5),
    new Point_1.Point(7, -3, -3),
    new Point_1.Point(8, 1, 1),
];
points5 = points5.map((x) => {
    x.x = x.x + 10;
    x.y = x.y + 10;
    return x;
});
let points6 = [
    new Point_1.Point(1, -6, 6),
    new Point_1.Point(2, -4, -4),
    new Point_1.Point(3, 1, 1),
    new Point_1.Point(4, 2, -3),
    new Point_1.Point(5, 2, 4),
];
points6 = points6.map((x) => {
    x.x = x.x + 100;
    x.y = x.y + 100;
    return x;
});
let points7 = [
    new Point_1.Point(1, -7, 5),
    new Point_1.Point(2, -6, -5),
    new Point_1.Point(3, -2, 1),
    new Point_1.Point(4, -1, -4),
    new Point_1.Point(5, 1, 2),
    new Point_1.Point(6, 3, -5),
    new Point_1.Point(7, 3, 6),
    new Point_1.Point(8, 2, 6),
    new Point_1.Point(9, 2, 1),
    new Point_1.Point(10, -4, 5),
];
points7 = points7.map((x) => {
    x.x = x.x + 100;
    x.y = x.y + 100;
    return x;
});
let points8 = [
    new Point_1.Point(1, -3, 3),
    new Point_1.Point(2, -6, 3),
    new Point_1.Point(3, -7, -2),
    new Point_1.Point(4, -3, -2),
    new Point_1.Point(5, 0, 2),
    new Point_1.Point(6, -1, -2),
    new Point_1.Point(7, 2, -2),
    new Point_1.Point(8, 2, 2),
    new Point_1.Point(9, 4, 2),
    new Point_1.Point(10, 4, -1),
    new Point_1.Point(11, 9, -1),
    new Point_1.Point(12, 9, 3),
    new Point_1.Point(13, 8, 3),
    new Point_1.Point(14, 8, 8),
    new Point_1.Point(15, 4, 8),
    new Point_1.Point(16, 2, 7),
    new Point_1.Point(17, 0, 8),
    new Point_1.Point(18, -1, 7),
    new Point_1.Point(19, -3, 7),
    new Point_1.Point(20, -6, 8),
    new Point_1.Point(21, -7, 7),
    new Point_1.Point(22, -4, 6),
    new Point_1.Point(23, -4, 5),
    new Point_1.Point(24, -6, 4),
];
points8 = points8.map((x) => {
    x.x = x.x + 100;
    x.y = x.y + 100;
    return x;
});
//polygon
let polygon = new Polygon_1.Polygon(points6);
// console.log(polygon.getMinTopSpike());
// console.log(polygon.getMaxBottomSpike());
console.log('Kernel exist: ' + polygon.kernelExist());
if (polygon.kernelExist()) {
    //console.log(polygon.points);
    console.log('Kernel circuit: ' + polygon.findKernelCircuit());
    //console.log(polygon.points);
    console.log('Kernel area: ' + polygon.computeArea());
}
