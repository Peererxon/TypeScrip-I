"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Colores;
(function (Colores) {
    Colores[Colores["Red"] = 0] = "Red";
    Colores[Colores["White"] = 1] = "White";
    Colores[Colores["Yellow"] = 2] = "Yellow";
    Colores[Colores["Orange"] = 3] = "Orange";
    Colores[Colores["Blue"] = 4] = "Blue";
    Colores[Colores["Green"] = 5] = "Green";
})(Colores = exports.Colores || (exports.Colores = {}));
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
exports.Figura = Figura;
