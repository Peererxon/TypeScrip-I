class Circulo {
    constructor(contexto) {
        this.nombre = "circulazo";
        this.radio = Math.random() * 50;
        this._color = "yellow";
        this.contexto = contexto;
        this._x = Math.random() * 100 + 10;
        this._y = Math.random() * 100 + 10;
    }
    pintar(contexto) {
        contexto.fillStyle = this._color;
        contexto.arc(this._x, this._y, this.radio, 0, Math.PI * 2);
        contexto.stroke();
    }
    setRadio(radio) {
        this.radio = radio;
    }
    getRadio() {
        return this.radio;
    }
    get color() {
        //del atributo puede usarse la tradicional y esta. recomendante esta.
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
}
//para usar la nueva forma la version de target de ecmascript debe ser 5 o superior(ES5)
//por defecto viene en 3 ES3
//el comando es tsc nombrearchivo -t y ES5,ES2016 depende de lo que se quiera
//entre mas alto sea el compilado de ES mas incompatibilidad hay entre los navegadores
var canvas = document.getElementById("canvas");
if (canvas.getContext) {
    var c = new Circulo(canvas.getContext("2d"));
    var contexto = canvas.getContext("2d");
    c.pintar(contexto);
    c.color = "red"; //la nueva forma que da  js, recomendado usar esta
    c.setRadio(20); //esta es a la antigua, tal como se vio en POO
    //c.nombre="judaz" esto no se puede hacer ya que es de solo lectura
    console.log(c.color); //getter implicito
    console.log("El radio es: ", c.getRadio()); //getter explicito
}
else
    alert("No se consiguio el canvas");
