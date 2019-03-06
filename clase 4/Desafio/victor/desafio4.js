var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Colores;
(function (Colores) {
    Colores[Colores["Red"] = 0] = "Red";
    Colores[Colores["Brown"] = 1] = "Brown";
    Colores[Colores["Orange"] = 2] = "Orange";
    Colores[Colores["Purple"] = 3] = "Purple";
    Colores[Colores["Blue"] = 4] = "Blue";
    Colores[Colores["Green"] = 5] = "Green";
    Colores[Colores["Coral"] = 6] = "Coral";
    Colores[Colores["Pink"] = 7] = "Pink";
    Colores[Colores["White"] = 8] = "White";
    Colores[Colores["Grey"] = 9] = "Grey";
    Colores[Colores["Yellow"] = 10] = "Yellow";
    Colores[Colores["Black"] = 11] = "Black";
})(Colores || (Colores = {}));
var Figura = /** @class */ (function () {
    function Figura(context, x, y) {
        if (x == undefined)
            this._x = Math.random() * 250 + 20;
        else
            this._x = x;
        this._y = (y == undefined) ? Math.random() * 250 : y;
        this._context = context;
    }
    Object.defineProperty(Figura.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Figura._color = Colores.Orange;
    return Figura;
}());
var Ventana = /** @class */ (function (_super) {
    __extends(Ventana, _super);
    function Ventana(contexto, tamaño, x, y, luzEncendida, conMarco) {
        var _this = _super.call(this, contexto, x, y) || this;
        _this._context = contexto;
        _this._tamaño = tamaño;
        _this._luzEncendida = luzEncendida;
        _this._conMarco = conMarco;
        //booleanos aleatorios
        var random_marco;
        var random_luz;
        if (random_marco = Math.random() >= 0.5)
            _this._conMarco = true;
        else
            _this._conMarco = false;
        if (random_luz = Math.random() >= 0.5)
            _this._luzEncendida = true;
        else
            _this._luzEncendida = false;
        return _this;
    }
    Ventana.prototype.dibujar = function () {
        if (this._conMarco == true) {
            this._context.fillStyle = Colores[Colores.White];
            this._context.fillRect(this.x - 5, this.y - 5, this._tamaño + 10, this._tamaño / 2 + 10);
        }
        if (this._luzEncendida == true) {
            this._context.fillStyle = Colores[Colores.Yellow];
        }
        else {
            this._context.fillStyle = Colores[Colores.Black];
        }
        this._context.fillRect(this.x, this.y, this._tamaño, this._tamaño / 2);
    };
    return Ventana;
}(Figura));
var Piso = /** @class */ (function (_super) {
    __extends(Piso, _super);
    function Piso(contexto, ancho, color, posX, posY) {
        var _this = _super.call(this, contexto, posX, posY) || this;
        _this._ancho = ancho;
        _this.x = posX;
        _this.y = posY;
        Figura.color = color;
        _this._nroVentanas = 3 + Math.round((Math.random() * 3));
        return _this;
    }
    Object.defineProperty(Piso.prototype, "ancho", {
        get: function () {
            return this._ancho;
        },
        set: function (ancho) {
            this._ancho = ancho;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piso.prototype, "nroVentanas", {
        get: function () {
            return this._nroVentanas;
        },
        set: function (nroVentanas) {
            this._nroVentanas = nroVentanas;
        },
        enumerable: true,
        configurable: true
    });
    Piso.prototype.dibujar = function () {
        this._context.fillStyle = Colores[Figura.color];
        this._context.strokeRect(this.x, this.y, this.ancho, Piso.alto);
        this._context.fillRect(this.x, this.y, this.ancho, Piso.alto);
        var pos = 10;
        var tamaño = (this.ancho / this.nroVentanas) - 20;
        for (var i = 1; i <= this.nroVentanas; i++) {
            var ventanas = new Ventana(this._context, tamaño, this.x + pos, this.y + ((Piso.alto - (tamaño / 2)) / 2));
            ventanas.dibujar();
            pos += tamaño + 20;
        }
    };
    Piso.alto = 100;
    return Piso;
}(Figura));
var Edificio = /** @class */ (function (_super) {
    __extends(Edificio, _super);
    function Edificio(contexto, nombre, nroPisos, x, y) {
        var _this = _super.call(this, contexto, x, y) || this;
        _this.nombre = nombre;
        _this.nroPisos = nroPisos;
        _this.x = x;
        _this.y = y;
        var color_aleatorio = Math.round(Math.random() * 7);
        Figura.color = color_aleatorio;
        _this.ancho = 200 + Math.random() * 400;
        return _this;
    }
    Edificio.prototype.dibujar = function () {
        for (var i = 1; i <= this.nroPisos; i++) {
            var p = new Piso(canvas.getContext("2d"), this.ancho, Figura.color, this.x, this.y - (Piso.alto * i));
            p.dibujar();
        }
        this._context.font = "40px San serif";
        this._context.fillStyle = Colores[Math.round(Math.random() * 6)];
        this._context.fillText(this.nombre, this.x + 150, this.y - (Piso.alto * (i - 1)));
    };
    return Edificio;
}(Figura));
document.getElementById("boton").onclick = ejecutar;
function ejecutar() {
    do {
        var nombre = prompt("Ingrese el nombre del edificio:");
        if (nombre == "" || nombre == null) {
            alert("El nombre no debe estar vacio");
        }
    } while (nombre == "" || nombre == null);
    var nroPisos = 1 + Math.round(Math.random() * 5);
    var posX = 50 + Math.round(Math.random() * 500);
    if (canvas.getContext) {
        canvas.width = screen.availWidth - 30;
        canvas.height = screen.availHeight - 110;
        var ctx = canvas.getContext("2d");
        var edificio = new Edificio(ctx, nombre, nroPisos, posX, canvas.height);
        edificio.dibujar();
    }
}
var canvas = document.getElementById("canvas");
