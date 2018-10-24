export class Point {
    public id: number | null;
    public x: number;
    public y: number;
    public orientation: number | undefined;
    public angle: number | undefined;

    constructor(id:number|null, x:number, y:number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.orientation = undefined;
        this.angle = undefined;
    }
}