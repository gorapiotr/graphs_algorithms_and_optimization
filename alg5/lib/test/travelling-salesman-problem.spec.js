"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var main_1 = require("../src/main");
var chai_1 = require("chai");
describe('Travelling salesman problem', function () {
    it('Test 1: return 11', function () {
        var result = 11;
        var x = 99999;
        var weights = [
            [0, 2, x, 3, x],
            [x, 0, x, 1, 2],
            [3, 4, 0, x, x],
            [x, x, 1, 0, 3],
            [2, x, 2, x, 0]
        ];
        var data = new main_1.TravellingSalesman(x, weights);
        chai_1.expect(data.main()).to.equal(result);
    });
    it('Test 2: return 99999', function () {
        var result = 99999;
        var x = 99999;
        var weights = [
            [0, x, 2, 3, x],
            [x, 0, x, 1, 3],
            [3, x, 0, 4, x],
            [1, x, 1, 0, 3],
            [x, 2, 2, x, 0]
        ];
        var data = new main_1.TravellingSalesman(x, weights);
        chai_1.expect(data.main()).to.equal(result);
    });
    // it('Test 3: return 18', () => {
    //
    //     const result = 18;
    //
    //     let x = 99999;
    //     let weights = [
    //         [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    //         [1, 0, 1, 2, 3, 4, 5, 6, 7, 8],
    //         [2, 1, 0, 1, 2, 3, 4, 5, 6, 7],
    //         [3, 2, 1, 0, 1, 2, 3, 4, 5, 6],
    //         [4, 3, 2, 1, 0, 1, 2, 3, 4, 5],
    //         [5, 4, 3, 2, 1, 0, 1, 2, 3, 4],
    //         [6, 5, 4, 3, 2, 1, 0, 1, 2, 3],
    //         [7, 6, 5, 4, 3, 2, 1, 0, 1, 2],
    //         [8, 7, 6, 5, 4, 3, 2, 1, 0, 1],
    //         [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    //     ];
    //
    //     let data = new TravellingSalesman(x, weights);
    //
    //     expect(data.main()).to.equal(result);
    // });
});
