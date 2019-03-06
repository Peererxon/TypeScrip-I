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
}
class triangulo extends Figura {
    dibujar() {
        this._context.beginPath();
        this._context.moveTo(this.x, +this.y);
        this._context.lineTo(this.x, +this.y + this._tamLados);
        this._context.lineTo(this.x + this._tamLados, this.y + this._tamLados);
        this._context.fill();
        this._context.closePath();
        this._context.stroke();
    }
    constructor(contexto, tamLados) {
        super(contexto);
        this._tamLados = tamLados;
    }
}
var canvas2 = document.getElementById("canvas");
if (canvas2 != undefined && canvas2.getContext) {
    var contexto2 = canvas2.getContext("2d");
    var t1 = new triangulo(contexto2, 30);
    t1.dibujar();
}
