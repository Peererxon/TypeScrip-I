var Tren = /** @class */ (function () {
    function Tren() {
    }
    Tren.prototype.rieles = function () {
        contexto.beginPath();
        contexto.fillStyle = ' #775414';
        contexto.fillRect(0, 540, canvas.width, 60); //suelo piso
        contexto.closePath();
        contexto.beginPath();
        contexto.fillStyle = '#303537';
        contexto.lineWidth = 10;
        contexto.fillRect(0, 540, canvas.width, 20); //riel
        contexto.closePath();
        // Para los rieles
        var riel = 100;
        for (var j = 0; j < 10; j++) {
            contexto.moveTo(riel, 580);
            contexto.lineTo(riel + 60, 550);
            contexto.strokeStyle = '#303537';
            contexto.stroke();
            riel = riel + 120;
            contexto.closePath();
        }
    };
    Tren.prototype.pintar = function (contexto, X, Y, figura, L, R) {
        var color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
        contexto.fillStyle = color;
        if (figura == 1) {
            color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
            contexto.fillStyle = color;
            contexto.strokeStyle = "black";
            //poligono
            if (L == 5) {
                var rad = (2 * Math.PI) / L;
                contexto.beginPath();
                for (var i = 0; i < L; i++) {
                    var x = X + R * Math.cos(rad * i);
                    var y = Y + R * Math.sin(rad * i);
                    contexto.lineTo(x, y);
                }
                contexto.closePath();
                contexto.fill();
                contexto.stroke();
            }
            //hexagono
            else if (L == 6) {
                var rad = (2 * Math.PI) / L;
                contexto.beginPath();
                for (var i = 0; i < L; i++) {
                    var x = X + R * Math.cos(rad * i);
                    var y = Y + R * Math.sin(rad * i);
                    contexto.lineTo(x, y);
                }
                contexto.closePath();
                contexto.fill();
                contexto.stroke();
            }
            else if (L == 8) //octagono
             {
                var rad = (2 * Math.PI) / L;
                contexto.beginPath();
                for (var i = 0; i < L; i++) {
                    var x = X + R * Math.cos(rad * i);
                    var y = Y + R * Math.sin(rad * i);
                    contexto.lineTo(x, y);
                }
                contexto.closePath();
                contexto.fill();
                contexto.stroke();
            }
        }
        else if (figura == 2) { // Circulo
            contexto.beginPath();
            contexto.arc(X + 98, Y + 70, R - 15, 0, Math.PI * 2);
            contexto.fill();
            contexto.stroke();
            contexto.closePath();
        }
        else if (figura == 3) { // Cuadros 
            color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
            contexto.fillStyle = color;
            contexto.fillRect(31, 420, 750, 30);
            contexto.fill();
            contexto.stroke(); // Union de vagones
            var vagoni = 51; // pto Inicial (vagones)
            for (var i = 0; i < 3; i++) {
                color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
                contexto.fillStyle = color;
                contexto.fillRect(vagoni, 280, 180, 200);
                contexto.stroke();
                contexto.fill();
                vagoni += 230; //Distancia entre vagones
            }
            color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
            contexto.fillStyle = color;
            contexto.fillRect(780, 130, 250, 350);
            contexto.fill();
            contexto.stroke(); // Tren carro
            contexto.fillStyle = "orange";
            contexto.fillRect(730, 60, 350, 70);
            contexto.fill();
            contexto.stroke(); // Tren carro techo
            color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
            contexto.fillStyle = color;
            contexto.fillRect(830, 190, 150, 150);
            contexto.fill();
            contexto.stroke(); // Tren Ventana
            color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
            contexto.fillStyle = color;
            contexto.fillRect(1030, 280, 200, 200);
            contexto.fill();
            contexto.stroke(); // Tren motor
            color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
            contexto.fillStyle = color;
            contexto.fillRect(1140, 205, 58, 75);
            contexto.fill();
            contexto.stroke(); // Tren motor chimenea
            color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
            contexto.fillStyle = color;
            contexto.fillRect(1105, 125, 125, 80);
            contexto.fill();
            contexto.stroke(); // fumarola
        }
        else if (figura == 4) {
            //triangulo
            contexto.beginPath();
            contexto.moveTo(1230, 320);
            contexto.lineTo(1230, 480);
            contexto.lineTo(1420, 480);
            contexto.lineTo(1230,320);
            contexto.fillStyle = "orange";
            contexto.fill();
            contexto.strokeStyle = "black";
            contexto.stroke();
            contexto.closePath();
        }
    };
    return Tren;
}());
var canvas = document.getElementById("Tren");
if (canvas != undefined && canvas.getContext) {
    var contexto = canvas.getContext("2d");
    var tren = new Tren();
    tren.nombre = "Tomas";
    tren.autor = "Anderson Gil";
    contexto.font = "25px bold";
    contexto.fillText("Nombre: " + tren.nombre + ". hecho por: " + tren.autor, 600, 50);
    tren.pintar(contexto, 140, 210, 1, 6, 80); //hexagono
    tren.pintar(contexto, 370, 210, 1, 5, 80); //pentagono
    tren.pintar(contexto, 600, 210, 1, 8, 80); //octagono
    tren.pintar(contexto, 700, 490, 3, 0, 22); //vagones
    tren.pintar(contexto, 40, 422, 2, 0, 30 + 35); //rueditas
    tren.pintar(contexto, 270, 422, 2, 0, 30 + 35); //rueditas
    tren.pintar(contexto, 500, 422, 2, 0, 30 + 35); //rueditas
    tren.pintar(contexto, 807, 387, 2, 0, 30 + 70); //circulo grande
    tren.pintar(contexto, 990, 430, 2, 0, 30 + 25); //rueditas frontales
    tren.pintar(contexto, 1090, 430, 2, 0, 30 + 25); //rueditas frontales
    tren.pintar(contexto, 1090, 430, 4, 0, 0); //frente del tren 
    tren.rieles();
}
else
    alert("Tu navegador no es compatible con el canvas");
