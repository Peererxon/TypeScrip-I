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
var colors;
(function (colors) {
    colors["marron"] = "brown";
    colors["amarillo"] = "yellow";
    colors["negro"] = "black";
    colors["gris"] = "gray";
    colors["rojo"] = "red";
    colors["naranja"] = "orange";
    colors["azul"] = "blue";
    colors["verde"] = "green";
})(colors || (colors = {}));
var Figura = /** @class */ (function () {
    function Figura(ctx, posicionX, posicionY) {
        this.context = ctx;
        this.posX = posicionX;
        this.posY = posicionY;
    }
    Object.defineProperty(Figura.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (new_color) {
            this._color = new_color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "posX", {
        get: function () {
            return this._posicionX;
        },
        set: function (new_x) {
            this._posicionX = new_x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "posY", {
        get: function () {
            return this._posicionY;
        },
        set: function (new_y) {
            this._posicionY = new_y;
        },
        enumerable: true,
        configurable: true
    });
    return Figura;
}());
var Ventana = /** @class */ (function (_super) {
    __extends(Ventana, _super);
    function Ventana(ctx, tam, posicionX, posicionY, marco, luz) {
        var _this = _super.call(this, ctx, posicionX, posicionY) || this;
        _this.tamaño = tam;
        if (marco == undefined) {
            var n = Math.round(Math.random());
            if (n == 0) {
                _this.conMarco = true;
            }
            else {
                _this.conMarco = false;
            }
        }
        else {
            _this.conMarco = marco;
        }
        if (luz == undefined) {
            var m = Math.round(Math.random());
            if (m == 0) {
                _this.luzEncendida = true;
            }
            else {
                _this.luzEncendida = false;
            }
        }
        else {
            _this.luzEncendida = luz;
        }
        if (_this.luzEncendida == true) {
            _this.color = colors.amarillo;
        }
        else {
            _this.color = colors.negro;
        }
        return _this;
    }
    Object.defineProperty(Ventana.prototype, "tama\u00F1o", {
        get: function () {
            return this._tamaño;
        },
        set: function (new_tamaño) {
            this._tamaño = new_tamaño;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ventana.prototype, "conMarco", {
        get: function () {
            return this._conMarco;
        },
        set: function (new_marco) {
            this._conMarco = new_marco;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ventana.prototype, "luzEncendida", {
        get: function () {
            return this._luzEncendida;
        },
        set: function (new_luz) {
            this._luzEncendida = new_luz;
        },
        enumerable: true,
        configurable: true
    });
    Ventana.prototype.dibujar = function () {
        var ctx = this.context;
        var alto = this.tamaño / 2;
        var ancho = this.tamaño;
        if (this.conMarco == true) {
            ctx.fillStyle = colors.marron;
            ctx.fillRect(this.posX - 5, this.posY - 5, ancho + 10, alto + 10);
        }
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, ancho, alto);
    };
    return Ventana;
}(Figura));
var Piso = /** @class */ (function (_super) {
    __extends(Piso, _super);
    function Piso(ctx, pisoAncho, posicionX, posicionY, colorPiso) {
        var _this = _super.call(this, ctx, posicionX, posicionY) || this;
        _this.ancho = pisoAncho;
        _this.nroVen = Math.ceil((Math.random() * 5) + 3);
        _this.color = colorPiso;
        return _this;
    }
    Object.defineProperty(Piso.prototype, "nroVen", {
        get: function () {
            return this._nroVentanas;
        },
        set: function (new_nroVen) {
            this._nroVentanas = new_nroVen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piso.prototype, "ancho", {
        get: function () {
            return this._ancho;
        },
        set: function (new_ancho) {
            this._ancho = new_ancho;
        },
        enumerable: true,
        configurable: true
    });
    Piso.prototype.dibujar = function () {
        var ctx = this.context;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.posX, this.posY);
        ctx.lineTo(this.posX, this.posY + Piso.alto);
        ctx.lineTo(this.posX + this.ancho, this.posY + Piso.alto);
        ctx.lineTo(this.posX + this.ancho, this.posY);
        ctx.lineTo(this.posX, this.posY);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        var posVen = 10;
        var tamVen = (this.ancho / this.nroVen) - 20;
        for (var i = 0; i < this.nroVen; i++) {
            var ventanas = new Ventana(ctx, tamVen, this.posX + posVen, this.posY + ((Piso.alto - (tamVen / 2)) / 2));
            ventanas.dibujar();
            posVen = posVen + tamVen + 20;
        }
    };
    return Piso;
}(Figura));
var Edificio = /** @class */ (function (_super) {
    __extends(Edificio, _super);
    function Edificio(ctx, nuevoNombre, cantidadPisos, posicionX, posicionY) {
        var _this = _super.call(this, ctx, posicionX, posicionY) || this;
        _this.nombre = nuevoNombre;
        _this.nroPisos = cantidadPisos;
        _this.ancho = Math.round(Math.random() * canvas.width / 4) + canvas.width / 4;
        var n = Math.ceil(Math.random() * 5) + 3;
        if (n == 4) {
            _this.color = colors.gris;
        }
        else {
            if (n == 5) {
                _this.color = colors.rojo;
            }
            else {
                if (n == 6) {
                    _this.color = colors.naranja;
                }
                else {
                    if (n == 7) {
                        _this.color = colors.azul;
                    }
                    else {
                        _this.color = colors.verde;
                    }
                }
            }
        }
        return _this;
    }
    Object.defineProperty(Edificio.prototype, "nroPisos", {
        get: function () {
            return this._nroPisos;
        },
        set: function (new_nro) {
            this._nroPisos = new_nro;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edificio.prototype, "ancho", {
        get: function () {
            return this._ancho;
        },
        set: function (new_ancho) {
            this._ancho = new_ancho;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edificio.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (new_nombre) {
            this._nombre = new_nombre;
        },
        enumerable: true,
        configurable: true
    });
    Edificio.prototype.dibujar = function () {
        var ctx = this.context;
        var alt = this.posY;
        for (var i = 0; i < this.nroPisos; i++) {
            alt = alt - Piso.alto;
            var pisos = new Piso(this.context, this.ancho, this.posX, alt, this.color);
            pisos.dibujar();
        }
        ctx.fillStyle = this.color;
        alt = alt - Piso.alto / 2;
        ctx.fillText(this.nombre, this.posX + this.ancho * 0.4, alt);
    };
    return Edificio;
}(Figura));
function construir() {
    var titulo;
    do {
        titulo = prompt("Cual es el Nombre del Edificio?");
        if (titulo == "" || titulo == null) {
            alert("Alerta! Debe Ingresar un Nombre");
        }
    } while (titulo == "" || titulo == null);
    if (canvas != undefined && canvas.getContext) {
        var ctx = canvas.getContext("2d");
        Piso.alto = canvas.height / 6;
        var edificaion = new Edificio(ctx, titulo, Math.ceil(Math.random() * 4) + 1, Math.random() * canvas.width / 2, canvas.height);
        edificaion.dibujar();
    }
}
var canvas = document.getElementById("ciudad");
canvas.width = screen.availWidth - 17;
canvas.height = screen.availHeight;
document.getElementById("generar").onclick = construir;
