"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TravellingSalesman = /** @class */ (function () {
    function TravellingSalesman(x, weights) {
        this.pd = [[]];
        this.x = x;
        this.weights = weights;
        this.n = weights.length;
    }
    TravellingSalesman.prototype.main = function () {
        for (var i = 0; i < (1 << this.n); i++) {
            var arr = [];
            for (var i_1 = 0; i_1 < this.n; i_1++) {
                arr.push(-1);
            }
            this.pd[i] = arr;
        }
        return this.travellingSalesmanProblem(1, 0);
    };
    TravellingSalesman.prototype.travellingSalesmanProblem = function (mask, v) {
        if (mask == (1 << this.n) - 1) {
            return this.weights[v][0];
        }
        if (this.pd[mask][v] != -1) {
            return this.pd[mask][v];
        }
        var result = this.x;
        for (var i = 0; i < this.n; i++) {
            if (!(mask & (1 << i))) {
                var newRes = this.weights[v][i] + this.travellingSalesmanProblem(mask | (1 << i), i);
                result = Math.min(result, newRes);
                this.pd[mask][v] = result;
            }
        }
        return result;
    };
    return TravellingSalesman;
}());
exports.TravellingSalesman = TravellingSalesman;
