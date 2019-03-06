var Colores;
(function (Colores) {
    Colores[Colores["Red"] = 0] = "Red";
    Colores[Colores["White"] = 1] = "White";
    Colores[Colores["Yellow"] = 2] = "Yellow";
    Colores[Colores["Orange"] = 3] = "Orange";
    Colores[Colores["Blue"] = 4] = "Blue";
    Colores[Colores["Green"] = 5] = "Green";
    Colores[Colores["lightblue"] = 6] = "lightblue";
    Colores[Colores["gray"] = 7] = "gray";
})(Colores || (Colores = {}));
class Figura {
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(x) {
        this._x = x;
    }
    set y(y) {
        this._y = y;
    }
    static set color(color) {
        this._color = color;
    }
    static get color() {
        return this._color;
    }
    constructor(context, x, y) {
        if (x == undefined)
            this._x = Math.random() * 100;
        else
            this._x = x;
        this._y = (y == undefined) ? Math.random() * 100 : y;
        this._context = context;
    }
}
class Ventana extends Figura {
    constructor(context, tamañoventana, x, y, marco, luz) {
        super(context, x, y);
        if (marco == undefined) {
            let aleatorio = Math.random();
            if (aleatorio >= 0.5) {
                this.conMarco = true;
            }
            else {
                this.conMarco = false;
            }
        }
        else
            this.conMarco = marco;
        if (luz == undefined) {
            let aleatorio = Math.round(Math.random() * 1);
            if (aleatorio == 0) {
                this.luzEncendida = true;
            }
            else {
                this.luzEncendida = false;
            }
        }
        else {
            this.luzEncendida = luz;
        }
        this.tamaño = tamañoventana;
    }
    dibujar() {
        if (this.conMarco) {
            this._context.fillStyle = Colores[1];
            this._context.fillRect(this.x - 5, this.y - 5, this.tamaño + 10, this.tamaño / 2 + 10);
            this._context.clearRect(this.x, this.y, this.tamaño, this.tamaño / 2);
            /*             this._context.fillRect(25,25,100,100);
                        this._context.clearRect(45,45,60,60);
                        this._context.strokeRect(50,50,50,50); */
        }
        if (this.luzEncendida) {
            this._context.fillStyle = Colores[2];
        }
        else {
            this._context.fillStyle = "black";
        }
        this._context.fillRect(this.x, this.y, this.tamaño, this.tamaño / 2);
    }
}
class Piso extends Figura {
    constructor(context, nuevoancho, color, nuevax, nuevay) {
        super(context);
        this.nroVentanas = 1 + Math.random() * 4;
        this.x = nuevax;
        this.y = nuevay;
        this.ancho = nuevoancho;
        Figura._color = color;
    }
    dibujar() {
        let color_random = Colores[Math.ceil(Math.random() * 4) + 3];
        this._context.fillStyle = color_random;
        this._context.fillRect(this.x, this.y, this.ancho, Piso.alto);
        this._context.strokeRect(this.x, this.y, this.ancho, Piso.alto);
        let tamVentana = (this.ancho / this.nroVentanas);
        let separacion = 20;
        for (let i = 1; i <= this.nroVentanas; i++) {
            var ventanas = new Ventana(this._context, tamVentana, this.x + separacion, this.y + ((Piso.alto - (tamVentana / 2)) / 2));
            ventanas.dibujar();
            separacion += tamVentana + 10;
        }
    }
}
Piso.alto = 120;
class Edificio extends Figura {
    constructor(contexto, nombre, nroPisos, x, y) {
        super(contexto, x, y);
        this.nombre = nombre;
        this.nroPisos = nroPisos;
        this.x = x;
        this.y = y;
        this.ancho = 300 + Math.random() * 100;
        let color_random = Colores[Math.ceil(Math.random() * 7)];
        Figura._color = Colores[color_random];
    }
    dibujar() {
        for (var i = 1; i < this.nroPisos; i++) {
            let pisos = new Piso(canvas.getContext("2d"), this.ancho, Figura.color, this.x, this.y - (Piso.alto * i));
            pisos.dibujar();
        }
        this._context.font = "40px Cambria";
        this._context.fillStyle = Colores[Math.round(Math.random() * 6)];
        this._context.fillText(this.nombre, this.x + 80, this.y - (Piso.alto * (i - 1)) - 80);
    }
}
function inicio() {
    do {
        var nombre = prompt("Ingrese el nombre del edificio:");
        if (nombre == "" || nombre == null) {
            alert("Debe ingresar un nombre para continuar");
        }
    } while (nombre == "" || nombre == null);
    var nroPisos = 2 + Math.round(Math.random() * 5);
    var posX = 50 + Math.round(Math.random() * 500);
    if (canvas.getContext) {
        var contexto = canvas.getContext("2d");
        var edificio = new Edificio(contexto, nombre, nroPisos, posX, canvas.height);
        edificio.dibujar();
    }
    else
        alert("No se ha conseguido un canvas");
}
var canvas = document.getElementById("canvas");
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
document.getElementById("ejecutar").onclick = inicio;
