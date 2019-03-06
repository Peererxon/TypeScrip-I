enum Colores{
	Red,
	Brown,
	Orange,
	Purple,
	Blue,
	Green,
	Coral,
    Pink,
    White,
    Grey,
	Yellow,
	Black
}

abstract class Figura{
	private _x:number
	private _y:number
	protected static _color:Colores = Colores.Orange;
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
}

class Ventana extends Figura{
	public _tamaño:number
	public _conMarco:boolean
	public _luzEncendida:boolean

	constructor(contexto:CanvasRenderingContext2D,tamaño:number,
		x?:number,y?:number,
		luzEncendida?:boolean,
		conMarco?:boolean) {

		super(contexto,x,y);
		this._context = contexto;
		this._tamaño = tamaño;
		this._luzEncendida = luzEncendida;
		this._conMarco = conMarco;

		//booleanos aleatorios
		let random_marco
		let random_luz
		if (random_marco = Math.random() >= 0.5)
			this._conMarco = true
		else
			this._conMarco = false

		if (random_luz = Math.random() >= 0.5)
			this._luzEncendida = true
		else
			this._luzEncendida = false
	}

	public dibujar() {
		if (this._conMarco==true) {
			this._context.fillStyle=Colores[Colores.White]
			this._context.fillRect(this.x-5,this.y-5,this._tamaño+10,this._tamaño/2+10)
		}	

		if (this._luzEncendida==true) {
			this._context.fillStyle = Colores[Colores.Yellow];
		}else{
			this._context.fillStyle=Colores[Colores.Black]
		}

		this._context.fillRect(this.x,this.y,this._tamaño,this._tamaño/2);
	}
}

class Piso extends Figura {
	private _nroVentanas:number
	private _ancho:number
	static alto:number = 100;

	public get ancho():number{
		return this._ancho;
	}

	public get nroVentanas():number{
		return this._nroVentanas
	}

	public set ancho(ancho: number) {
		this._ancho = ancho;
	}

	public set nroVentanas(nroVentanas :number) {
		this._nroVentanas = nroVentanas;
	}

	constructor(contexto:CanvasRenderingContext2D,
				ancho:number,color:Colores,
				posX:number,posY:number) {
		super(contexto,posX,posY)
		this._ancho=ancho;
		this.x=posX;
		this.y=posY;
		Figura.color=color;
		this._nroVentanas=3+Math.round((Math.random()*3))
	}

	public dibujar() {

		this._context.fillStyle=Colores[Figura.color]
		this._context.strokeRect(this.x,this.y,this.ancho,Piso.alto)
		this._context.fillRect(this.x,this.y,this.ancho,Piso.alto)

      	let pos:number = 10
        let tamaño:number = (this.ancho / this.nroVentanas) - 20
        for (let i=1; i<=this.nroVentanas;i++){
            var ventanas:Ventana = new Ventana(this._context, tamaño, this.x + pos, this.y + ((Piso.alto - (tamaño / 2)) / 2))
            ventanas.dibujar()
            pos+=tamaño + 20
        }
	}
}

class Edificio extends Figura {
	public nroPisos:number
	public ancho:number
	public nombre:string

	constructor(contexto:CanvasRenderingContext2D,nombre:string,nroPisos:number,x:number,y:number) {
		super(contexto,x,y)

        this.nombre=nombre
        this.nroPisos=nroPisos
        this.x=x
        this.y=y
        let color_aleatorio:Colores=Math.round(Math.random()*7)
        Figura.color=color_aleatorio
        this.ancho=200+Math.random()*400
	}

	public dibujar(){
		for (var i = 1; i <= this.nroPisos; i++) {
			var p:Piso=new Piso(canvas.getContext("2d"),this.ancho,Figura.color,this.x,this.y-(Piso.alto*i))
            p.dibujar()
		}
		this._context.font="40px San serif"
        this._context.fillStyle=Colores[Math.round(Math.random()*6)]
        this._context.fillText(this.nombre,this.x+150,this.y-(Piso.alto*(i-1)))
	}
}

document.getElementById("boton").onclick= ejecutar;

function ejecutar() {
	do {
		var nombre:string= prompt("Ingrese el nombre del edificio:")
		if (nombre=="" || nombre==null) {
        	alert("El nombre no debe estar vacio")
        }
	} while (nombre=="" || nombre==null);

	var nroPisos=1+Math.round(Math.random()*5)
	var posX=50+Math.round(Math.random()*500)

    if (canvas.getContext) {
        canvas.width= screen.availWidth -30
        canvas.height= screen.availHeight -110
        var ctx:CanvasRenderingContext2D = canvas.getContext("2d")
        var edificio:Edificio=new Edificio(ctx,nombre,nroPisos,posX,canvas.height)
        edificio.dibujar()
    }
}

var canvas:any=document.getElementById("canvas")