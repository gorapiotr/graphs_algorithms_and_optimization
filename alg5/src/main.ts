export class TravellingSalesman {

    public x: number;
    public weights: any;
    public n: any;
    public pd: number[][] = [[]];

    constructor(x: number, weights: any) {
        this.x = x;
        this.weights = weights;
        this.n = weights.length;
    }


    public main() {


        for (let i = 0; i < (1 << this.n); i++) {
            let arr = [];
            for (let i = 0; i < this.n; i++) {
                arr.push(-1)
            }
            this.pd[i] = arr;
        }

        return this.travellingSalesmanProblem(1, 0);

    }

    public travellingSalesmanProblem(mask: any, v: any) {


        if (mask == (1 << this.n) - 1) {
            return this.weights[v][0];
        }
        if (this.pd[mask][v] != -1) {
            return this.pd[mask][v];
        }
        let result = this.x;

        for (let i = 0; i < this.n; i++) {
            if (!(mask & (1 << i))) {
                let newRes = this.weights[v][i] + this.travellingSalesmanProblem(mask | (1 << i), i);
                result = Math.min(result, newRes);
                this.pd[mask][v] = result as number;
            }
        }
        return result;

    }
}