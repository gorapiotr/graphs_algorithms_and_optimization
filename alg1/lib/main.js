"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = require("./Point");
const Polygon_1 = require("./Polygon");
//start program
let points = [
    new Point_1.Point(1, 1),
    new Point_1.Point(1, 2)
];
let polygon = new Polygon_1.Polygon(points);
console.log(polygon.points);
