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
    Colores[Colores["white"] = 1] = "white";
    Colores[Colores["Purple"] = 2] = "Purple";
    Colores[Colores["Orange"] = 3] = "Orange";
    Colores[Colores["Blue"] = 4] = "Blue";
    Colores[Colores["Green"] = 5] = "Green";
    Colores[Colores["Grey"] = 6] = "Grey";
    Colores[Colores["yellow"] = 7] = "yellow";
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
    function Ventana(context, x, y, marco, luz) {
        var _this = _super.call(this, context, x, y) || this;
        if (marco == undefined) {
            var num = Math.round(Math.random() * 1);
            if (num == 0) {
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
            var num = Math.round(Math.random() * 1);
            if (num == 0) {
                _this.luzEncendida = true;
            }
            else {
                _this.luzEncendida = false;
            }
        }
        else {
            _this.luzEncendida = luz;
        }
        return _this;
    }
    Ventana.prototype.dibujar = function () {
        if (this.conMarco) {
            this._context.fillStyle = "white";
            this._context.fillRect(this.x - 5, this.y - 5, this.tamaño + 10, this.tamaño / 2 + 10);
            this._context.clearRect(this.x, this.y, this.tamaño, this.tamaño / 2);
        }
        if (this.luzEncendida) {
            this._context.fillStyle = "yellow";
        }
        else {
            this._context.fillStyle = "black";
        }
        this._context.fillRect(this.x, this.y, this.tamaño, this.tamaño / 2);
    };
    Ventana.prototype.mover = function () {
    };
    ;
    return Ventana;
}(Figura));
var Piso = /** @class */ (function (_super) {
    __extends(Piso, _super);
    function Piso(context, p_x, p_y, n_ancho, n_color) {
        var _this = _super.call(this, context) || this;
        _this.ancho = n_ancho;
        Figura.color = n_color;
        _this.x = p_x;
        _this.y = p_y;
        _this.nroVentanas = Math.round(Math.random() * 5) + 3;
        return _this;
    }
    Piso.prototype.dibujar = function () {
        this._context.fillStyle = Colores[Figura.color];
        this._context.fillRect(this.x, this.y, this.ancho, Piso.alto);
        this._context.strokeRect(this.x, this.y, this.ancho, Piso.alto);
        var espacio = 0;
        for (var i = 0; i < this.nroVentanas; i++) {
            var ventana = new Ventana(this._context, this.x + espacio + 10, this.y + 30);
            ventana.tamaño = (this.ancho - 140) / this.nroVentanas;
            espacio = espacio + this.ancho / this.nroVentanas;
            ventana.dibujar();
        }
    };
    Piso.prototype.mover = function () {
    };
    Piso.alto = 100;
    return Piso;
}(Figura));
var Edificio = /** @class */ (function (_super) {
    __extends(Edificio, _super);
    function Edificio(context, p_x, p_y, n_nombre, nro_pisos) {
        var _this = _super.call(this, context) || this;
        _this.nombre = n_nombre;
        _this.nroPisos = nro_pisos;
        _this.x = p_x;
        _this.y = p_y;
        var color_aleatorio = Math.round(Math.random() * 6);
        Figura.color = color_aleatorio;
        _this.ancho = Math.round(Math.random() * 100) + 300;
        return _this;
    }
    Edificio.prototype.dibujar = function () {
        for (var i = 0; i < this.nroPisos; i++) {
            var piso = new Piso(this._context, this.x, this.y - Piso.alto * i, this.ancho, Figura.color);
            piso.dibujar();
        }
        var mitad_y = this.y - (this.nroPisos * Piso.alto) + (Piso.alto / 2);
        var mitad_x = this.ancho / 2 + this.x;
        this._context.fillStyle = Colores[1];
        this._context.fillRect(this.x, this.y - Piso.alto * this.nroPisos, this.ancho, Piso.alto);
        this._context.strokeRect(this.x, this.y - Piso.alto * this.nroPisos, this.ancho, Piso.alto);
        this._context.font = "30px Cambria";
        this._context.strokeText(this.nombre, mitad_x - 40, mitad_y);
        this._context.fillStyle = Colores[Piso.color];
        this._context.fillText(this.nombre, mitad_x - 40, mitad_y);
        //hice a medias el sol me imagino que no era requerido hacerlo
        this._context.beginPath();
        this._context.fillStyle = "yellow";
        this._context.arc(1200, 100, 80, 0, Math.PI * 2);
        this._context.fill();
    };
    Edificio.prototype.mover = function () {
    };
    return Edificio;
}(Figura));
function ejecutar() {
    var nombre = prompt("Hola Por Favor Ingrese Su Nombre:");
    if (nombre == "") {
        alert("el nombre no puede estar vacio");
    }
    else {
        var canvas = document.getElementById("lienzo");
        if (canvas.getContext) {
            canvas.style.display = "block";
            canvas.width = screen.availWidth;
            canvas.height = screen.availHeight;
            var contexto = canvas.getContext("2d");
            var edificio = new Edificio(contexto, Math.round(Math.random() * 600), canvas.height - Piso.alto, nombre, Math.round(Math.random() * 3) + 2);
            edificio.dibujar();
        }
    }
}
document.getElementById("boton").onclick = ejecutar;
//Ojo lo subi pero aun le sigo haciendo correcciones!
//  Realizar las siguientes actividades utilizando la clase abstracta Figura (con el método abstracto dibujar) y el enumerado Colores utilizados 
// en clase (ATENCIÓN: SE VE MUY LARGO PERO ES PORQUE LA EXPLICACIÖN ESTA MUY DETALLADA. VAYAN HACIENDO CADA OBJETIVO UNO POR UNO. NO  TRATEN DE 
// HACER EL SIGUIENTE OBJETIVO SI EL ANTERIOR NO ESTA RESUELTO )
// 1.- Crear una clase con el nombre Ventana que herede de la clase Figura, que tenga los atributos: tamaño (number), conMarco (boolean), 
// luzEncendida (boolean). Sobre escribir el método "dibujar", que debe pintar la ventana en la posición X,Y que tenga. El ancho y el alto se 
// debe conseguir usando el atributo tamaño. El color de fondo dependerá de si la luz esta encendida (amarillo) o no (negro). Si el atributo 
// conMarco es true, la ventana debe tener un marco, de lo contrario no. En el constructor los valores de los atributos "conMarco" y "luzEncendida" 
// son opcionales y deben asignarse aleatoriamente si no se reciben
// 2.- Crear una clase con el nombre Piso que herede de la clase Figura, que tenga el atributo nroVentanas (number), ancho (number) y alto (number). 
// El alto debe ser un atributo Static y constante. En el constructor se debe recibir por parámetro el ancho, el color, la posición X,Y, pero el 
// atributo nroVentanas debe ser un número aleatorio. Sobre escribir el método "dibujar", que debe pintar un rectangulo usando la posición X,Y, 
// del color que tenga el atributo color. Luego debe instanciar tantas ventanas como tenga el atributo nroVentanas y llamar el método "dibujar" de 
// cada una. El tamaño de las ventanas debe calcularse en base al ancho del piso, de modo tal que todas quepan (todas las ventanas deben tener el 
// mismo tamaño y debe haber una pequeña separación entre estas).
// 3.- Crear la clase Edificio que herede de la clase Figura, que tenga los atributos nroPisos (number), ancho (number) y nombre (string). El constructor 
// debe recibir por parámetros: el nombre del edificio, el número de pisos, la posición X y la posición Y. El color y el ancho se determinan de forma 
// aleatoria.
// 4.- Sobre escribir el método dibujar de la clase Edificio, que debe instanciar y dibujar tantos objetos de la clase Piso como número de pisos tenga 
// el edificio, enviando por parámetro al constructor de Piso: el color, el ancho y la posición X del edificio. El primer piso debe estar en la 
// posición Y del edificio menos el alto de un piso, el sengundo piso debe estar en la posición Y menos el alto de 2 pisos (this.Y - Piso.alto*i) y 
// asi sucesivamente. Luego de pintar todos los pisos, se debe mostrar el nombre del edificio (arriba del último piso)
// 5.- Crear un archivo HTML con un canvas que ocupe toda la página. Agregar un botón y programar el evento click del botón para que ejecute una 
// función que pida al usuario un nombre (usando prompt) y luego instancie un objeto de la clase Edificio, pasando por parámetro al constructor el 
// nombre del edificio (el que el usuario escribió), un número de pisos aleatorio, una posición X aleatoria, la posición Y debe ser el borde inferior
// del canvas. Luego de instanciar el edificio debe ejecutar el método dibujar (utilice la imagen adjunta como ejemplo)
