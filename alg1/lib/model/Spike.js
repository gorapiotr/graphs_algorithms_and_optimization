"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction["top"] = "top";
    Direction["bottom"] = "bottom";
})(Direction = exports.Direction || (exports.Direction = {}));
class Spike {
    constructor(point, position) {
        this.point = point;
        this.position = position;
    }
}
exports.Spike = Spike;
