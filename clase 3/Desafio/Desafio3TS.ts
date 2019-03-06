

class Elemento{
    private _color:string;
    private _contexto:CanvasRenderingContext2D;

    //setters
    
    public set color(color:string){
        this._color=color;
        
    }

    public set contexto(contexto:CanvasRenderingContext2D){
        this._contexto=contexto;
    }

    //getters

    public get color(){
        return this._color;
    }

    public get contexto(){
        return this._contexto
    }


    constructor(contexto:CanvasRenderingContext2D,_color?:string){
        //si el color no es definido sera aleatorio para eso la sig instruccion
       if (_color==""||_color==null)
       this._color="rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")"
       else
        this._color=_color;

        this._contexto=contexto
    }
}

class Estrella extends Elemento{
    protected _x:number;
    protected _y:number;

    //setters

    public set x(x:number){
        this._x=x;
    }

    public set y(y:number){
        this._y=y;
    }

    //Getters

    public get x(){
        return this._x;
    }

    public get y(){
        return this._y;
    }

    constructor(contexto:CanvasRenderingContext2D,color?){
        super(contexto,color)
        //Para asignar los valores donde apareceran las estrellas
        this._x=50+Math.random()*screen.availWidth-80;
        this._y=20+Math.random()*120;
    }

}

class EstrellaPunteada extends Estrella{
    constructor(contexto:CanvasRenderingContext2D,color?){
        super(contexto,color)
    }
    pintar(){
        this.contexto.beginPath();
        this.contexto.moveTo(this.x,this.y);
        this.contexto.lineTo(this.x+15,this.y+65);
        this.contexto.lineTo(this.x+75,this.y+65);
        this.contexto.lineTo(this.x+25,this.y+100);
        this.contexto.lineTo(this.x+45,this.y+170);
        this.contexto.lineTo(this.x,this.y+120);
        this.contexto.lineTo(this.x-45,this.y+170);
        this.contexto.lineTo(this.x-25,this.y+100);
        this.contexto.lineTo(this.x-75,this.y+65);
        this.contexto.lineTo(this.x-15,this.y+65);
        this.contexto.fillStyle=this.color;
        this.contexto.fill();
        this.contexto.closePath();
        //this.contexto.stroke();
    }
}

/*respaldo
        this.contexto.lineTo(this.x+20,this.y+70);
        this.contexto.lineTo(this.x+80,this.y+70);
        this.contexto.lineTo(this.x+30,this.y+110);
        this.contexto.lineTo(this.x+50,this.y+180);
        this.contexto.lineTo(this.x,this.y+120);
        this.contexto.lineTo(this.x-50,this.y+180);
        this.contexto.lineTo(this.x-30,this.y+110);
        this.contexto.lineTo(this.x-80,this.y+70);
        this.contexto.lineTo(this.x-20,this.y+70);*/


class EstrellaRedonda extends Estrella{
    constructor(contexto:CanvasRenderingContext2D,color?){
        super(contexto,color)
    }
    pintar(){

        // rombo horizontal
        let R=50; let K=35;
        this.contexto.beginPath();
        this.contexto.moveTo(this.x,this.y+R/2);     // pto1
        this.contexto.lineTo(this.x+R+K,this.y);   // pto2
        this.contexto.lineTo(this.x,this.y-R/2);     // pto3
        this.contexto.lineTo(this.x-R-K,this.y);   // pto4
        
        //this.contexto.fill()
        this.contexto.fillStyle=this.color;
        this.contexto.fill();
        this.contexto.closePath()
        //this.contexto.stroke();

        // rombo vertical
        this.contexto.beginPath();
        this.contexto.moveTo(this.x,this.y+R+K);     // pto5
        this.contexto.lineTo(this.x+R/2,this.y);      // pto6
        this.contexto.lineTo(this.x,this.y-R-K);    // pto7
        this.contexto.lineTo(this.x-R/2,this.y);      // pto8
        
         //this.contexto.fill()
        this.contexto.fill();
        this.contexto.closePath()
        //this.contexto.stroke();

        // circulo concentrico
        this.contexto.beginPath();
        this.contexto.arc(this.x,this.y,R,0,Math.PI*2);

        //this.contexto.fill()
        this.contexto.fill();
        this.contexto.closePath();
        //this.contexto.stroke();


    }
}

class cielo extends Elemento{

    constructor(contexto:CanvasRenderingContext2D,color?){
        super(contexto,color)
    }

    pintarCielo(){
        let x:number=Math.random()*22
        //Cielo
        let color ="skyblue"
			contexto.fillStyle =color;
			contexto.fillRect(0,0,screen.availWidth,250); contexto.fill(); contexto.stroke();

            let colorredonda=prompt("introduzca el color de la estrella redonda \n  Silver o Gold")
            for (let i = 0; i <x; i++) {
                var punteada:EstrellaPunteada=new EstrellaPunteada(contexto,"yellow");
                var Redonda:EstrellaRedonda=new EstrellaRedonda (contexto,colorredonda);
                punteada.pintar();
                Redonda.pintar();
             }
    }
}

//obtencion del canvas
var canvas:any=document.getElementById("canvas")
var ancho=screen.availWidth;
var largo=screen.availHeight;
canvas.width=ancho;
canvas.height=largo;

var contexto=canvas.getContext("2d");
//validacion de que se encuentre un canvas o no
if (canvas!=undefined &&canvas.getContext){
 console.log("El canvas fue encontrado");
 var cielo1:cielo=new cielo(contexto);
 cielo1.pintarCielo()



}else
    console.log("No se encontro el canvas");