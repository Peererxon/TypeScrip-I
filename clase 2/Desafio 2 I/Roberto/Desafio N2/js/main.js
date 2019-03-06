var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var canvas = document.getElementById("lienzo");
var Figura = /** @class */ (function () {
    function Figura() {
    }
    Figura.prototype.pintar = function () {
        this.contexto.closePath();
        this.contexto.fillStyle = this.color;
        this.contexto.fill();
        this.contexto.stroke();
    };
    Figura.prototype.crear = function () {
        this.dibujar();
        this.pintar();
    };
    return Figura;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(p1, radio, color) {
        var _this = _super.call(this) || this;
        _this.contexto = canvas.getContext("2d");
        _this.puntos = [{ x: p1.x, y: p1.y }];
        _this.radio = radio;
        _this.color = color;
        return _this;
    }
    Circulo.prototype.dibujar = function () {
        this.contexto.beginPath();
        this.contexto.arc(this.puntos[0].x, this.puntos[0].y, this.radio, 0, Math.PI * 2);
    };
    return Circulo;
}(Figura));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(p1, longitudLado, color) {
        var _this = _super.call(this) || this;
        _this.contexto = canvas.getContext("2d");
        _this.color = color;
        _this.puntos = [{ x: p1.x, y: p1.y },
            { x: p1.x, y: p1.y + longitudLado },
            { x: p1.x + longitudLado, y: p1.y + longitudLado }];
        return _this;
    }
    Triangulo.prototype.dibujar = function () {
        this.contexto.beginPath();
        this.contexto.moveTo(this.puntos[0].x, this.puntos[0].y);
        this.contexto.lineTo(this.puntos[1].x, this.puntos[1].y);
        this.contexto.lineTo(this.puntos[2].x, this.puntos[2].y);
    };
    return Triangulo;
}(Figura));
var Cuadrilatero = /** @class */ (function (_super) {
    __extends(Cuadrilatero, _super);
    function Cuadrilatero(p1, color, longitudLado, longitudLado2) {
        var _this = _super.call(this) || this;
        _this.contexto = canvas.getContext("2d");
        _this.color = color;
        if (longitudLado2) {
            _this.puntos = [{ x: p1.x, y: p1.y },
                { x: p1.x + longitudLado, y: p1.y + longitudLado2 }];
        }
        else {
            _this.puntos = [{ x: p1.x, y: p1.y },
                { x: p1.x + longitudLado, y: p1.y + longitudLado }];
        }
        return _this;
    }
    Cuadrilatero.prototype.dibujar = function () {
        this.contexto.beginPath();
        this.contexto.moveTo(this.puntos[0].x, this.puntos[0].y);
        this.contexto.lineTo(this.puntos[0].x, this.puntos[1].y);
        this.contexto.lineTo(this.puntos[1].x, this.puntos[1].y);
        this.contexto.lineTo(this.puntos[1].x, this.puntos[0].y);
    };
    return Cuadrilatero;
}(Figura));
var Pentagono = /** @class */ (function (_super) {
    __extends(Pentagono, _super);
    function Pentagono(p1, longitudLado, color) {
        var _this = _super.call(this) || this;
        _this.contexto = canvas.getContext("2d");
        _this.color = color;
        _this.puntos = [{ x: p1.x, y: p1.y },
            { x: p1.x + longitudLado, y: p1.y - longitudLado },
            { x: p1.x + (longitudLado * 1.25), y: p1.y - (longitudLado * 1.5) },
            { x: p1.x + (longitudLado * 0.5), y: p1.y },
            { x: p1.x - (longitudLado * 0.25), y: p1.y }];
        return _this;
    }
    Pentagono.prototype.dibujar = function () {
        this.contexto.beginPath();
        this.contexto.moveTo(this.puntos[0].x, this.puntos[0].y);
        this.contexto.lineTo(this.puntos[1].x, this.puntos[0].y);
        this.contexto.lineTo(this.puntos[2].x, this.puntos[1].y);
        this.contexto.lineTo(this.puntos[3].x, this.puntos[2].y);
        this.contexto.lineTo(this.puntos[4].x, this.puntos[1].y);
    };
    return Pentagono;
}(Figura));
var Exagono = /** @class */ (function (_super) {
    __extends(Exagono, _super);
    function Exagono(p1, longitudLado, color) {
        var _this = _super.call(this) || this;
        _this.contexto = canvas.getContext("2d");
        _this.color = color;
        _this.puntos = [{ x: p1.x, y: p1.y },
            { x: p1.x + longitudLado, y: p1.y - longitudLado },
            { x: p1.x + (longitudLado * 1.5), y: p1.y - (longitudLado * 2) },
            { x: p1.x - (longitudLado * 0.5), y: p1.y }];
        return _this;
    }
    Exagono.prototype.dibujar = function () {
        this.contexto.beginPath();
        this.contexto.moveTo(this.puntos[0].x, this.puntos[0].y);
        this.contexto.lineTo(this.puntos[1].x, this.puntos[0].y);
        this.contexto.lineTo(this.puntos[2].x, this.puntos[1].y);
        this.contexto.lineTo(this.puntos[1].x, this.puntos[2].y);
        this.contexto.lineTo(this.puntos[0].x, this.puntos[2].y);
        this.contexto.lineTo(this.puntos[3].x, this.puntos[1].y);
    };
    return Exagono;
}(Figura));
var Octagono = /** @class */ (function (_super) {
    __extends(Octagono, _super);
    function Octagono(p1, longitudLado, color) {
        var _this = _super.call(this) || this;
        _this.contexto = canvas.getContext("2d");
        _this.color = color;
        _this.puntos = [{ x: p1.x, y: p1.y },
            { x: p1.x + (longitudLado * 1.5), y: p1.y - longitudLado },
            { x: p1.x + (longitudLado * 2.5), y: p1.y - (longitudLado * 2.5) },
            { x: p1.x - longitudLado, y: p1.y - (longitudLado * 3.5) }];
        return _this;
    }
    Octagono.prototype.dibujar = function () {
        this.contexto.beginPath();
        this.contexto.moveTo(this.puntos[0].x, this.puntos[0].y);
        this.contexto.lineTo(this.puntos[1].x, this.puntos[0].y);
        this.contexto.lineTo(this.puntos[2].x, this.puntos[1].y);
        this.contexto.lineTo(this.puntos[2].x, this.puntos[2].y);
        this.contexto.lineTo(this.puntos[1].x, this.puntos[3].y);
        this.contexto.lineTo(this.puntos[0].x, this.puntos[3].y);
        this.contexto.lineTo(this.puntos[3].x, this.puntos[2].y);
        this.contexto.lineTo(this.puntos[3].x, this.puntos[1].y);
    };
    return Octagono;
}(Figura));
var Via = /** @class */ (function (_super) {
    __extends(Via, _super);
    function Via(p1, color) {
        var _this = _super.call(this) || this;
        _this.contexto = canvas.getContext("2d");
        _this.color = color;
        _this.puntos = [{ x: p1.x, y: p1.y },
            { x: p1.x - 20, y: p1.y + 10 },
            { x: p1.x + 15, y: p1.y + 20 }];
        return _this;
    }
    Via.prototype.dibujar = function () {
        this.contexto.beginPath();
        this.contexto.moveTo(this.puntos[0].x, this.puntos[0].y);
        this.contexto.lineTo(this.puntos[1].x, this.puntos[1].y);
        this.contexto.lineTo(this.puntos[1].x + 6, this.puntos[2].y);
        this.contexto.lineTo(this.puntos[2].x, this.puntos[0].y);
    };
    return Via;
}(Figura));
var Tren = /** @class */ (function () {
    function Tren() {
    }
    Tren.prototype.pintar = function () {
        this.cuadrilateros = [new Cuadrilatero({ x: 0, y: 300 }, "gold", 900, 20),
            new Cuadrilatero({ x: 0, y: 290 }, "black", 900, 10),
            new Cuadrilatero({ x: 30, y: 220 }, "greenyellow", 500, 20),
            new Cuadrilatero({ x: 45, y: 145 }, "blue", 100),
            new Cuadrilatero({ x: 195, y: 145 }, "yellow", 100),
            new Cuadrilatero({ x: 345, y: 145 }, "red", 100),
            new Cuadrilatero({ x: 495, y: 45 }, "darkred", 150, 200),
            new Cuadrilatero({ x: 530, y: 85 }, "white", 80),
            new Cuadrilatero({ x: 475, y: 10 }, "orange", 190, 45),
            new Cuadrilatero({ x: 645, y: 115 }, "blue", 130),
            new Cuadrilatero({ x: 700, y: 65 }, "yellow", 50),
            new Cuadrilatero({ x: 680, y: 15 }, "orange", 90, 50),];
        for (var i = 0; i < this.cuadrilateros.length; i++) {
            this.cuadrilateros[i].crear();
        }
        for (var i = 60; i < 920; i += 80) {
            this.vias = [new Via({ x: i, y: 295 }, "black"),
                new Circulo({ x: i - 18, y: 311 }, 6, "black")];
            this.vias[0].crear();
            this.vias[1].crear();
        }
        this.circulos = [new Circulo({ x: 95, y: 260 }, 30, "yellow"),
            new Circulo({ x: 245, y: 260 }, 30, "red"),
            new Circulo({ x: 395, y: 260 }, 30, "blue"),
            new Circulo({ x: 570, y: 240 }, 50, "greenyellow"),
            new Circulo({ x: 680, y: 265 }, 25, "darkviolet"),
            new Circulo({ x: 745, y: 265 }, 25, "fuchsia")];
        for (var i = 0; i < this.circulos.length; i++) {
            this.circulos[i].crear();
        }
        this.figuras = [new Triangulo({ x: 775, y: 145 }, 100, "orange"),
            new Exagono({ x: 70, y: 145 }, 50, "fuchsia"),
            new Pentagono({ x: 210, y: 145 }, 70, "turquoise"),
            new Octagono({ x: 370, y: 145 }, 30, "gold")];
        for (var i = 0; i < this.figuras.length; i++) {
            this.figuras[i].crear();
        }
    };
    return Tren;
}());
var tren1 = new Tren();
tren1.nombre = "LOLA";
tren1.contexto = canvas.getContext("2d");
tren1.contexto.strokeText("Nombre: " + tren1.nombre, 10, 20);
tren1.pintar();
