enum Colores{
    Red,
    White,
    Yellow,
    Orange,
    Blue,
    Green,
    lightblue,
    gray
}

abstract class Figura{
    private _x:number
    private _y:number
    protected  static _color:Colores;
    protected _context :CanvasRenderingContext2D
    protected altura:number;


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
            this._x = Math.random()*100;
        else
            this._x = x;
        this._y = (y==undefined)?Math.random()*100 : y;
        this._context = context;
    }
    public abstract dibujar();
}

class Ventana extends Figura {
    public tamaño:number;
    public conMarco:boolean;
    public luzEncendida:boolean;
    constructor(context:CanvasRenderingContext2D,tamañoventana:number,x:number,y:number,marco?:boolean,luz?:boolean){
        super(context,x,y);

        if (marco==undefined) {
            let aleatorio:number=Math.random();
            if (aleatorio>=0.5) {
                this.conMarco=true;
            }else{
                this.conMarco=false;
            }
        }else
            this.conMarco=marco;

        if (luz==undefined) {
            let aleatorio:number= Math.round(Math.random()*1)
            if (aleatorio==0) {
                this.luzEncendida= true
            } else {
                this.luzEncendida= false
            }            
        } else {
            this.luzEncendida=luz;
        }
        this.tamaño=tamañoventana;
    }

    public dibujar() {
        if (this.conMarco) {
            this._context.fillStyle=Colores[1];
            this._context.fillRect(this.x-5,this.y-5,this.tamaño+10,this.tamaño/2+10)
            this._context.clearRect(this.x,this.y,this.tamaño,this.tamaño/2)
/*             this._context.fillRect(25,25,100,100);
            this._context.clearRect(45,45,60,60);
            this._context.strokeRect(50,50,50,50); */
        }
        if (this.luzEncendida) {
            this._context.fillStyle=Colores[2];
        } else {
            this._context.fillStyle= "black"
        }
        this._context.fillRect(this.x,this.y,this.tamaño,this.tamaño/2)
    }
}

class Piso extends Figura{

    private nroVentanas:number=1+Math.random()*4;
    private ancho:number;
    public static alto:number=120;

    constructor(context:CanvasRenderingContext2D,nuevoancho:number,color:Colores,nuevax:number,nuevay){
        super(context)
        this.x=nuevax;
        this.y=nuevay;
        this.ancho=nuevoancho;
        Figura._color=color;
    }
    public dibujar(){
        let color_random=Colores[Math.ceil(Math.random()*4)+3]
        this._context.fillStyle=color_random;
        this._context.fillRect(this.x,this.y,this.ancho,Piso.alto)
        this._context.strokeRect(this.x,this.y,this.ancho,Piso.alto)
        let tamVentana = (this.ancho/this.nroVentanas); 
        let separacion=20;
            for (let i=1; i<=this.nroVentanas;i++){
                var ventanas:Ventana = new Ventana(this._context, tamVentana, this.x + separacion, this.y + ((Piso.alto - (tamVentana / 2)) / 2))
                ventanas.dibujar()
                separacion+=tamVentana +10
        }

    }
}
    class Edificio extends Figura{
       private nroPisos:number;
       public ancho:number;
       public nombre:string;

        constructor(contexto:CanvasRenderingContext2D,nombre:string,nroPisos:number,x:number,y:number){
            super(contexto,x,y)
        this.nombre = nombre;
        this.nroPisos = nroPisos;
        this.x=x;
        this.y=y;
        this.ancho=300+Math.random()*100        
        let color_random=Colores[Math.ceil(Math.random()*7)]
        Figura._color=Colores[color_random];
        }

        public dibujar(){
            for (var i= 1; i< this.nroPisos; i++) {
                let pisos:Piso=new Piso(canvas.getContext("2d"),this.ancho,Figura.color,this.x,this.y-(Piso.alto*i))
                pisos.dibujar()
                
            }
            this._context.font="40px Cambria"
            this._context.fillStyle=Colores[Math.round(Math.random()*6)]
            this._context.fillText(this.nombre,this.x+80,this.y-(Piso.alto*(i-1))-80)
        }
    }

    function inicio() {
        do {
            var nombre:string= prompt("Ingrese el nombre del edificio:")
            if (nombre=="" || nombre==null) {
                alert("Debe ingresar un nombre para continuar")
            }
        } while (nombre=="" || nombre==null);
    
        var nroPisos=2+Math.round(Math.random()*5)
        var posX=50+Math.round(Math.random()*500)
    
        if (canvas.getContext) {
            var contexto:CanvasRenderingContext2D=canvas.getContext("2d");
            var edificio:Edificio=new Edificio(contexto,nombre,nroPisos,posX,canvas.height)
            edificio.dibujar()
        }else
            alert("No se ha conseguido un canvas")
    }
    var canvas:any=document.getElementById("canvas")
    canvas.width= screen.availWidth
    canvas.height= screen.availHeight
    document.getElementById("ejecutar").onclick= inicio;