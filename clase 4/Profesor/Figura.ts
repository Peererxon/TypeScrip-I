export enum Colores{
    Red,
    White,
    Yellow,
    Orange,
    Blue,
    Green
}

export abstract class Figura{
    private _x:number
    private _y:number
    protected static  _color:Colores = Colores.Orange;
    protected _context :CanvasRenderingContext2D

    public get x(){
        return this._x;
    }
    public get y(){
        return this._y;
    }
    public set x(x:number){
        this._x=x;
    }
    public set y(y:number){
        this._y=y;
    }
    public static set color(color:Colores){
        this._color=color;
    }
    public static get color():Colores{
        return this._color;
    }
    constructor(context:CanvasRenderingContext2D, 
                x?:number,y?:number){
        if (x==undefined )
            this._x = Math.random()*250+20;
        else
            this._x = x;
        this._y = (y==undefined)?Math.random()*250 : y;
        this._context = context;
    }
    public abstract dibujar();
    public abstract mover();
}