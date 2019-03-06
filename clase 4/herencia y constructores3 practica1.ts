 
 enum Colores{
     red,
     white,
     yellow,
     orange,
     blue,
     gray,
     green
 }

 abstract class Figura{
    private _x:number
    private _y:number
    static _color:Colores =Colores.orange;
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

    public static get color(){
        return Figura._color;
    }

    public set color(nuevocolor){
        Figura._color=nuevocolor;
    }

    public set x(nuevax){
        this._x=nuevax;
    }

    public set y(nuevay){
        this._x=nuevay;
    }

        public abstract dibujar();
       // public abstract pintar(); generaria un error porque las otras clases
       //no implementan este metodo.


}

class triangulo extends Figura{
    private _tamLados:number;
    //Colores[] es para acceder a los valores string del ennumerado
    public dibujar(){
        this._context.beginPath();
        this._context.moveTo(this.x,+this.y);
        this._context.lineTo(this.x,+this.y+ this._tamLados);
        this._context.lineTo(this.x+this._tamLados,this.y+this._tamLados)
        this._context.fillStyle=Colores[Figura.color]
        this._context.fill()
        this._context.closePath()
        this._context.stroke();
    }

    constructor(contexto:CanvasRenderingContext2D, tamLados:number){
        super(contexto)
        this._tamLados=tamLados
    }
}

class triangulito extends triangulo{
    private nombre:string;

    constructor(contexto:CanvasRenderingContext2D,nombre:string){
        super(contexto,300)
        this.nombre=nombre
    }

    public dibujar(){
        this._context.fillText(this.nombre,this.x,this.y)
    }

}
var canvas2:any=document.getElementById("canvas");

if (canvas2!=undefined && canvas2.getContext){
    var contexto2=canvas2.getContext("2d");
    
    var tpeque:triangulito=new triangulito(canvas2.getContext("2d"),"anderson")
        tpeque.dibujar(); 

    var t1:triangulo=new triangulo(contexto2,40)
        t1.dibujar();

        Figura._color=Colores.green;
        for (let i=1;i<=10;i++){
            new triangulo(canvas2.getContext("2d"),50).dibujar();
            //los primeros 2 son los parametros de su constructor
            new triangulito(canvas2.getContext("2d"),i.toString()).dibujar();
        }
}

