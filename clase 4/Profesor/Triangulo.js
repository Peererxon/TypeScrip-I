"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Figura_1 = require("./Figura");
var Figura_2 = require("./Figura");
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(contexto, tamLados) {
        var _this = _super.call(this, contexto) || this;
        if (tamLados == undefined)
            _this._tamLados = Math.random() * 500;
        else
            _this._tamLados = tamLados;
        return _this;
    }
    Object.defineProperty(Triangulo.prototype, "tamLados", {
        get: function () {
            return this._tamLados;
        },
        enumerable: true,
        configurable: true
    });
    Triangulo.prototype.mover = function () {
        this.x++;
        this.y++;
    };
    Triangulo.prototype.dibujar = function () {
        // Colores[] es para acceder a los valores String del enumerado
        this._context.fillStyle = Figura_2.Colores[Figura_1.Figura.color];
        this._context.beginPath();
        this._context.moveTo(this.x, this.y);
        this._context.lineTo(this.x, this.y + this._tamLados);
        this._context.lineTo(this.x + this._tamLados, this.y + this._tamLados);
        this._context.closePath();
        this._context.fill();
        this._context.stroke();
    };
    return Triangulo;
}(Figura_1.Figura));
exports.Triangulo = Triangulo;
