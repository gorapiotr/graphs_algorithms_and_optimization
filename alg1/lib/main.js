"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = require("./model/Point");
const Polygon_1 = require("./model/Polygon");
console.log("START PROGRAM");
//start program
let points = [
    new Point_1.Point(1, 8, 2),
    new Point_1.Point(2, 10, 4),
    new Point_1.Point(3, 10, 9),
    new Point_1.Point(4, 8, 7),
    new Point_1.Point(5, 5, 9),
    new Point_1.Point(5, 5, 6),
    new Point_1.Point(7, 5, 4),
];
let polygon = new Polygon_1.Polygon(points);
polygon.getPointsOrientation();
console.log(polygon);
