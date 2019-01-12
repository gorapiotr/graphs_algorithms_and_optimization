import 'mocha';
import {TravellingSalesman} from "../src/main";
import {expect} from 'chai';


describe('Travelling salesman problem', () => {

    it('Test 1: return 11', () => {

        const result = 11;

        let x = 99999;
        let weights = [
            [0, 2, x, 3, x],
            [x, 0, x, 1, 2],
            [3, 4, 0, x, x],
            [x, x, 1, 0, 3],
            [2, x, 2, x, 0]];

        let data = new TravellingSalesman(x, weights);

        expect(data.main()).to.equal(result);
    });

    it('Test 2: return 99999', () => {

        const result = 99999;

        let x = 99999;
        let weights = [
            [0, x, 2, 3, x],
            [x, 0, x, 1, 3],
            [3, x, 0, 4, x],
            [1, x, 1, 0, 3],
            [x, 2, 2, x, 0]];

        let data = new TravellingSalesman(x, weights);

        expect(data.main()).to.equal(result);
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