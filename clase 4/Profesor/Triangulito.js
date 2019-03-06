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
var Triangulo_1 = require("./Triangulo");
var Triangulito = /** @class */ (function (_super) {
    __extends(Triangulito, _super);
    function Triangulito(contexto, nombre) {
        var _this = _super.call(this, contexto, 75) || this;
        _this.nombre = nombre;
        return _this;
    }
    // se sobre escribe el metodo de la super clase Triangulo
    Triangulito.prototype.dibujar = function () {
        _super.prototype.dibujar.call(this);
        this._context.fillStyle = "black";
        this._context.font = "25px arial";
        this._context.fillText(this.nombre, this.x + this.tamLados / 8, this.y + this.tamLados * 0.8);
    };
    return Triangulito;
}(Triangulo_1.Triangulo));
exports.Triangulito = Triangulito;
