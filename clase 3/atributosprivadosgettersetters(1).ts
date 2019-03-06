class Circulo{
    private radio:number;
    private _color:string;
    readonly nombre:string="circulazo";
    private contexto:CanvasRenderingContext2D;
    private _x:number;
    private _y:number;



    constructor(contexto:CanvasRenderingContext2D){
        this.radio=Math.random()*50;
        this._color="yellow";
        this.contexto=contexto;
        this._x=Math.random()*100+10;
        this._y=Math.random()*100+10;
    }

    public pintar(contexto){
        contexto.fillStyle=this._color;
        contexto.arc(this._x,this._y,this.radio,0,Math.PI*2);
        contexto.stroke();
    }

    public setRadio(radio:number){ //Hecho de forma tradicional
        this.radio=radio;
    }
    public getRadio(){
        return this.radio;
    }

    public get color(){ //De esta forma es mas facil llamar a estos metodos, ver_ en la definicion
        //del atributo puede usarse la tradicional y esta. recomendante esta.
        return this._color;
    }

    public set color(color:string){
        this._color=color;
    }

    /*public setNombre(n:string){
        this.nombre=n; tambien es un error porque no puede tener un metodo setter al ser una constante
    }*/
}
//para usar la nueva forma la version de target de ecmascript debe ser 5 o superior(ES5)
//por defecto viene en 3 ES3
//el comando es tsc nombrearchivo -t y ES5,ES2016 depende de lo que se quiera
//entre mas alto sea el compilado de ES mas incompatibilidad hay entre los navegadores

var canvas:any=document.getElementById("canvas");
if (canvas.getContext)
{
var c:Circulo=new Circulo(canvas.getContext("2d"));
var contexto = canvas.getContext("2d")
c.pintar(contexto);
c.color="red"; //la nueva forma que da  js, recomendado usar esta

c.setRadio(20);//esta es a la antigua, tal como se vio en POO

//c.nombre="judaz" esto no se puede hacer ya que es de solo lectura



console.log(c.color);//getter implicito
console.log("El radio es: ",c.getRadio());//getter explicito

}
else
alert("No se consiguio el canvas");