"use strict";
var Main = /** @class */ (function () {
    function Main() {
        //no path between points
        this.x = 99999;
        this.weights = [[0, 2, this.x, 3, this.x],
            [this.x, 0, this.x, 1, 2],
            [3, 4, 0, this.x, this.x],
            [this.x, this.x, 1, 0, 3],
            [2, this.x, 2, this.x, 0]];
        this.n = this.weights.length;
        this.pd = [[]];
    }
    Main.prototype.main = function () {
        for (var i = 0; i < (1 << this.n); i++) {
            var arr = [];
            for (var i_1 = 0; i_1 < this.n; i_1++) {
                arr.push(-1);
            }
            this.pd[i] = arr;
        }
        console.log(this.travellingSalesmanProblem(1, 0));
    };
    Main.prototype.travellingSalesmanProblem = function (mask, v) {
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
    return Main;
}());
var main = new Main();
main.main();
