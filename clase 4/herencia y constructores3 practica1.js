var Colores;
(function (Colores) {
    Colores[Colores["red"] = 0] = "red";
    Colores[Colores["white"] = 1] = "white";
    Colores[Colores["yellow"] = 2] = "yellow";
    Colores[Colores["orange"] = 3] = "orange";
    Colores[Colores["blue"] = 4] = "blue";
    Colores[Colores["gray"] = 5] = "gray";
    Colores[Colores["green"] = 6] = "green";
})(Colores || (Colores = {}));
class Figura {
    constructor(context, x, y) {
        if (x == undefined)
            this._x = Math.random() * 250 + 20;
        else
            this._x = x;
        //es como decir si y es undefined hacer math.ran sino se le asignara el valor recibido(y)
        this._y = (y == undefined) ? Math.random() * 250 : y;
        this._context = context;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    static get color() {
        return Figura._color;
    }
    set color(nuevocolor) {
        Figura._color = nuevocolor;
    }
    set x(nuevax) {
        this._x = nuevax;
    }
    set y(nuevay) {
        this._x = nuevay;
    }
}
Figura._color = Colores.orange;
class triangulo extends Figura {
    //Colores[] es para acceder a los valores string del ennumerado
    dibujar() {
        this._context.beginPath();
        this._context.moveTo(this.x, +this.y);
        this._context.lineTo(this.x, +this.y + this._tamLados);
        this._context.lineTo(this.x + this._tamLados, this.y + this._tamLados);
        this._context.fillStyle = Colores[Figura.color];
        this._context.fill();
        this._context.closePath();
        this._context.stroke();
    }
    constructor(contexto, tamLados) {
        super(contexto);
        this._tamLados = tamLados;
    }
}
class triangulito extends triangulo {
    constructor(contexto, nombre) {
        super(contexto, 300);
        this.nombre = nombre;
    }
    dibujar() {
        this._context.fillText(this.nombre, this.x, this.y);
    }
}
var canvas2 = document.getElementById("canvas");
if (canvas2 != undefined && canvas2.getContext) {
    var contexto2 = canvas2.getContext("2d");
    var tpeque = new triangulito(canvas2.getContext("2d"), "anderson");
    tpeque.dibujar();
    var t1 = new triangulo(contexto2, 40);
    t1.dibujar();
    Figura._color = Colores.green;
    for (let i = 1; i <= 10; i++) {
        new triangulo(canvas2.getContext("2d"), 50).dibujar();
        //los primeros 2 son los parametros de su constructor
        new triangulito(canvas2.getContext("2d"), i.toString()).dibujar();
    }
}
