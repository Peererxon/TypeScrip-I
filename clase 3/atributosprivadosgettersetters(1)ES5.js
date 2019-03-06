var Circulo = /** @class */ (function () {
    function Circulo() {
    }
    Circulo.prototype.setRadio = function (radio) {
        this.radio = radio;
    };
    Circulo.prototype.getRadio = function () {
        return this.radio;
    };
    Object.defineProperty(Circulo.prototype, "color", {
        get: function () {
            //del atributo puede usarse la tradicional y esta. recomendante esta.
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    return Circulo;
}());
//para usar la nueva forma la version de target de ecmascript debe ser 5 o superior(ES5)
//por defecto viene en 3 ES3
//el comando es tsc nombrearchivo -t y ES5,ES2016 depende de lo que se quiera
//entre mas alto sea el compilado de ES mas incompatibilidad hay entre los navegadores
var c = new Circulo();
c.color = "red"; //la nueva forma que da  js, recomendado usar esta
c.setRadio(20); //esta es a la antigua, tal como se vio en POO
console.log(c.color);
