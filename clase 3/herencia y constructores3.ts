class Figura{
    private _x:number
    private _y:number
    protected _color:string
    protected _context:CanvasRenderingContext2D

    constructor(context:CanvasRenderingContext2D,x?:number,y?:number){
        if (x==undefined)
        this._x=Math.random()*250+20;
        else
            this._x=x;
        //es como decir si y es undefined hacer math.ran sino se le asignara el valor recibido(y)
        this._y=(y==undefined)?Math.random()*250: y;
        this._context=context;
    }
    public get x(){
        return this._x;
        }
    public get y(){
        return this._y;
        }
}

class triangulo extends Figura{
    private _tamLados:number;

    public dibujar(){
        this._context.beginPath();
        this._context.moveTo(this.x,+this.y);
        this._context.lineTo(this.x,+this.y+ this._tamLados);
        this._context.lineTo(this.x+this._tamLados,this.y+this._tamLados)
        this._context.fill()
        this._context.closePath()
        this._context.stroke();
    }

    constructor(contexto:CanvasRenderingContext2D, tamLados:number){
        super(contexto)
        this._tamLados=tamLados
    }
}

var canvas2:any=document.getElementById("canvas");

if (canvas2!=undefined && canvas2.getContext){
    var contexto2=canvas2.getContext("2d");
        //el segundo parametro que se le esta pasando es el tamano de los lados que tendra
        //el triangulo
    var t1:triangulo=new triangulo(contexto2,30)
        t1.dibujar();
}
