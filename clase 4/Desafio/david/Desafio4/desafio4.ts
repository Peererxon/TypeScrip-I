enum colores{
    red,
    white,
    yellow,
    orange,
    blue,
    gray,
    black,
    green
}
abstract class Figura{
    private _x: number;
    private _y: number;
    private _color:colores;
    protected _contexto:CanvasRenderingContext2D; 

    public get color(): colores {
        return this._color;
    }
    public set color(value: colores) {
        this._color = value;
    }
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }
    constructor(contexto:CanvasRenderingContext2D,
        x?:number,y?:number,color?:colores){
        if(x==undefined)
            this._x=100;
        else
            this._x = x;
        if(y==undefined)
            this._y=100;
        else
            this._y = y;
        if(color==undefined)
            this._color = colores.black;
        else
            this._color = color;
        this._contexto = contexto;
    }
    public abstract Dibujar();
}
function TrueoFalse(){
    let numero:number = Math.ceil(Math.random()*2);
    if(numero == 1){
        return true;
    }
    else{
        return false;
    }
}
class Ventana extends Figura{
    private tamano:number;
    private conMarco:boolean;
    private luzEncendida:boolean;
    
    constructor(contexto:CanvasRenderingContext2D,
        tamano:number,x:number,y:number,conMarco?:boolean,
        luzEncendida?:boolean){
        super(contexto,x,y);
        this.tamano = tamano;
        if(conMarco==undefined){
            this.conMarco = TrueoFalse();
        }
        else{
            this.conMarco = conMarco;
        }
        if(luzEncendida==undefined){
            this.luzEncendida = TrueoFalse();
        }
        else{
            this.luzEncendida = luzEncendida;
        }
    }
    Dibujar(){
        if(this.conMarco){
            this._contexto.fillStyle = colores[this.color = colores.white];
            this._contexto.fillRect(this.x+10,this.y,this.tamano-25,Piso.alto/2);
        }
        if(this.luzEncendida){
            this._contexto.fillStyle = colores[this.color = colores.yellow];
        }
        else
            this._contexto.fillStyle = colores[this.color = colores.black];
        this._contexto.fillRect(this.x+15,this.y+5,this.tamano-35,Piso.alto/2.8);
    }
}
class Piso extends Figura{
    private nroVentanas:number;
    private ancho:number;
    static readonly alto:number = 80;
    constructor(contexto:CanvasRenderingContext2D,
        ancho:number,color:number,x:number,y:number){
        let numero= Math.ceil(Math.random()*5)
        super(contexto,x,y,color);
        this.ancho = ancho;
        this.color = color;
        this.nroVentanas = numero;
    }
    Dibujar(){
        let x:number=0;
        let ventana:Ventana;
        let tamVentana = this.ancho/this.nroVentanas; 
        this._contexto.fillStyle = colores[this.color];
        this._contexto.fillRect(this.x,this.y,this.ancho,Piso.alto);
        for(let i=1;i<=this.nroVentanas;i++){
            ventana = new Ventana(this._contexto,tamVentana,this.x+x,this.y+10);
            ventana.Dibujar();
            x = tamVentana*i;
        }
    }
}
class Edificio extends Figura{
    private nroPisos:number;
    private ancho:number;
    private nombre:string;

    constructor(contexto:CanvasRenderingContext2D,nombre:string,nroPisos:number
        ,x:number,y:number){
        super(contexto,x,y)
        this.nombre = nombre;
        this.nroPisos = nroPisos;
        this.ancho = Math.ceil(Math.random()*100+400);
        this.color = Math.ceil(Math.random()*7);
    }
    Dibujar(){
        let piso:Piso;
        let tejado:number = 1;
        for(let i=1;i<=this.nroPisos;i++){
            piso= new Piso(this._contexto,this.ancho,
            this.color,this.x-20,this.y-Piso.alto*i);
            piso.Dibujar();
            tejado++;
        }
        this._contexto.fillStyle = colores[this.color = colores.white];
        this._contexto.fillRect(this.x-20,this.y-Piso.alto*tejado,this.ancho,Piso.alto);
        this._contexto.fillStyle = colores[this.color = colores.black];
        this._contexto.fillText(this.nombre,this.x+160,this.y-Piso.alto*tejado+50);
    }
}

var c:any = document.getElementById("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;

function onClick(){
    let nombre = prompt("Digite el nombre del edificio");


    if(c.getContext){
        let e:Edificio = new Edificio(c.getContext("2d"),nombre,
        Math.ceil(Math.random()*5),Math.ceil(Math.random()*800),window.innerHeight);
        e.Dibujar();
    }
}
let edificio = document.getElementById("edificio");
edificio.onclick = onClick;