
enum Colores{
    Red,
    White,
    Yellow,
    Orange,
    Blue,
    Green
}

abstract class Figura{
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

class Triangulo extends Figura{
    private _tamLados : number

    public get tamLados():number{
        return this._tamLados;
    }
    public mover(){
        this.x++;
        this.y++
    }
    public dibujar(){
        // Colores[] es para acceder a los valores String del enumerado
        this._context.fillStyle=Colores[Figura.color];
        this._context.beginPath();
        this._context.moveTo(this.x,this.y);
        this._context.lineTo(this.x,this.y+this._tamLados);
        this._context.lineTo(this.x+this._tamLados,this.y+this._tamLados);
        this._context.closePath();
        this._context.fill();
        this._context.stroke();
    }
    constructor(contexto:CanvasRenderingContext2D ,
                tamLados?:number){
        super(contexto);
        if (tamLados==undefined)
            this._tamLados=Math.random()*500;
        else
                this._tamLados = tamLados
    }
}

class Triangulito extends Triangulo{
    private nombre:string

    constructor(contexto:CanvasRenderingContext2D,nombre:string){
        super(contexto,75)
        this.nombre=nombre
    }
    // se sobre escribe el metodo de la super clase Triangulo
    public dibujar(){
        super.dibujar();
        this._context.fillStyle="black"
        this._context.font="25px arial"
        this._context.fillText(this.nombre,this.x+this.tamLados/8,
                                this.y+this.tamLados*0.8)
        
    }
}

var canvas:any=document.getElementById("canvas");
if (canvas.getContext){

    var t1:Triangulito = new Triangulito(canvas.getContext("2d"),"jose")
    t1.dibujar();

    var t:Triangulo =new Triangulo(canvas.getContext("2d"),Math.random()*500)  
    t.dibujar();
    
    Figura.color = Colores.Yellow; // se usa el setter implicito
    for (let i=1;i<=5;i++)
        new Triangulito(canvas.getContext("2d"),i.toString()).dibujar();

}