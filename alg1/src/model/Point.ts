export class Point {
    public id: number;
    public x: number;
    public y: number;
    public orientation: number | undefined;

    constructor(id:number, x:number, y:number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.orientation = undefined;
    }
}