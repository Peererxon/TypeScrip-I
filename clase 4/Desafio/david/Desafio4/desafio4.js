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
var colores;
(function (colores) {
    colores[colores["red"] = 0] = "red";
    colores[colores["white"] = 1] = "white";
    colores[colores["yellow"] = 2] = "yellow";
    colores[colores["orange"] = 3] = "orange";
    colores[colores["blue"] = 4] = "blue";
    colores[colores["gray"] = 5] = "gray";
    colores[colores["black"] = 6] = "black";
    colores[colores["green"] = 7] = "green";
})(colores || (colores = {}));
var Figura = /** @class */ (function () {
    function Figura(contexto, x, y, color) {
        if (x == undefined)
            this._x = 100;
        else
            this._x = x;
        if (y == undefined)
            this._y = 100;
        else
            this._y = y;
        if (color == undefined)
            this._color = colores.black;
        else
            this._color = color;
        this._contexto = contexto;
    }
    Object.defineProperty(Figura.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Figura;
}());
function TrueoFalse() {
    var numero = Math.ceil(Math.random() * 2);
    if (numero == 1) {
        return true;
    }
    else {
        return false;
    }
}
var Ventana = /** @class */ (function (_super) {
    __extends(Ventana, _super);
    function Ventana(contexto, tamano, x, y, conMarco, luzEncendida) {
        var _this = _super.call(this, contexto, x, y) || this;
        _this.tamano = tamano;
        if (conMarco == undefined) {
            _this.conMarco = TrueoFalse();
        }
        else {
            _this.conMarco = conMarco;
        }
        if (luzEncendida == undefined) {
            _this.luzEncendida = TrueoFalse();
        }
        else {
            _this.luzEncendida = luzEncendida;
        }
        return _this;
    }
    Ventana.prototype.Dibujar = function () {
        if (this.conMarco) {
            this._contexto.fillStyle = colores[this.color = colores.white];
            this._contexto.fillRect(this.x + 10, this.y, this.tamano - 25, Piso.alto / 2);
        }
        if (this.luzEncendida) {
            this._contexto.fillStyle = colores[this.color = colores.yellow];
        }
        else
            this._contexto.fillStyle = colores[this.color = colores.black];
        this._contexto.fillRect(this.x + 15, this.y + 5, this.tamano - 35, Piso.alto / 2.8);
    };
    return Ventana;
}(Figura));
var Piso = /** @class */ (function (_super) {
    __extends(Piso, _super);
    function Piso(contexto, ancho, color, x, y) {
        var _this = this;
        var numero = Math.ceil(Math.random() * 5);
        _this = _super.call(this, contexto, x, y, color) || this;
        _this.ancho = ancho;
        _this.color = color;
        _this.nroVentanas = numero;
        return _this;
    }
    Piso.prototype.Dibujar = function () {
        var x = 0;
        var ventana;
        var tamVentana = this.ancho / this.nroVentanas;
        this._contexto.fillStyle = colores[this.color];
        this._contexto.fillRect(this.x, this.y, this.ancho, Piso.alto);
        for (var i = 1; i <= this.nroVentanas; i++) {
            ventana = new Ventana(this._contexto, tamVentana, this.x + x, this.y + 10);
            ventana.Dibujar();
            x = tamVentana * i;
        }
    };
    Piso.alto = 80;
    return Piso;
}(Figura));
var Edificio = /** @class */ (function (_super) {
    __extends(Edificio, _super);
    function Edificio(contexto, nombre, nroPisos, x, y) {
        var _this = _super.call(this, contexto, x, y) || this;
        _this.nombre = nombre;
        _this.nroPisos = nroPisos;
        _this.ancho = Math.ceil(Math.random() * 100 + 400);
        _this.color = Math.ceil(Math.random() * 7);
        return _this;
    }
    Edificio.prototype.Dibujar = function () {
        var piso;
        var tejado = 1;
        for (var i = 1; i <= this.nroPisos; i++) {
            piso = new Piso(this._contexto, this.ancho, this.color, this.x - 20, this.y - Piso.alto * i);
            piso.Dibujar();
            tejado++;
        }
        this._contexto.fillStyle = colores[this.color = colores.white];
        this._contexto.fillRect(this.x - 20, this.y - Piso.alto * tejado, this.ancho, Piso.alto);
        this._contexto.fillStyle = colores[this.color = colores.black];
        this._contexto.fillText(this.nombre, this.x + 160, this.y - Piso.alto * tejado + 50);
    };
    return Edificio;
}(Figura));
var c = document.getElementById("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
function onClick() {
    var nombre = prompt("Digite el nombre del edificio");
    if (c.getContext) {
        var e = new Edificio(c.getContext("2d"), nombre, Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 800), window.innerHeight);
        e.Dibujar();
    }
}
var edificio = document.getElementById("edificio");
edificio.onclick = onClick;
