var Tren = /** @class */ (function () {
    function Tren() {
    }
    Tren.prototype.pintar = function (ctx, pX, pY, ancho, alto, lados, cuadro, circulo, otraFigura) {
        var color = "rgb(" + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255) + "," +
            Math.ceil(Math.random() * 255) + ")";
        ctx.fillStyle = color;
        if (cuadro) {
            ctx.fillRect(pX, pY, ancho, alto);
        }
        else {
            if (otraFigura) {
                ctx.beginPath();
                ctx.moveTo(pX, pY);
                if (lados == 5) {
                    for (var i = 0; i < lados; i++) {
                        switch (i) {
                            case 0:
                                ancho -= 50;
                                alto -= 80;
                                break;
                            case 1:
                                ancho += 50;
                                alto -= 80;
                                break;
                            case 2:
                                ancho += 80;
                                break;
                            case 3:
                                ancho += 50;
                                alto += 80;
                                break;
                            case 4:
                                ancho -= 50;
                                alto += 80;
                                break;
                        }
                        ctx.lineTo(ancho, alto);
                    }
                }
                else {
                    if (lados == 4) {
                        for (var i = 0; i <= lados; i++) {
                            switch (i) {
                                case 0:
                                    ancho -= 30;
                                    alto -= 100;
                                    break;
                                case 1:
                                    ancho += 80;
                                    alto -= 60;
                                    break;
                                case 2:
                                    ancho += 80;
                                    alto += 60;
                                    break;
                                case 3:
                                    ancho -= 20;
                                    alto += 100;
                                    break;
                            }
                            ctx.lineTo(ancho, alto);
                        }
                    }
                    else {
                        if (lados == 7) {
                            for (var i = 0; i < lados; i++) {
                                switch (i) {
                                    case 0:
                                        ancho -= 45;
                                        alto -= 45;
                                        break;
                                    case 1:
                                        alto -= 55;
                                        break;
                                    case 2:
                                        ancho += 55;
                                        alto -= 45;
                                        break;
                                    case 3:
                                        ancho += 55;
                                        break;
                                    case 4:
                                        ancho += 55;
                                        alto += 45;
                                        break;
                                    case 5:
                                        alto += 55;
                                        break;
                                    case 6:
                                        ancho -= 45;
                                        alto += 45;
                                        break;
                                }
                                ctx.lineTo(ancho, alto);
                            }
                        }
                        else {
                            if (lados == 3) {
                                for (var i = 1; i < lados; i++) {
                                    switch (i) {
                                        case 1:
                                            alto += 250;
                                            break;
                                        case 2:
                                            ancho += 250;
                                            break;
                                    }
                                    ctx.lineTo(ancho, alto);
                                }
                            }
                        }
                    }
                }
                ctx.fill();
                ctx.closePath();
                ctx.stroke();
            }
            else {
                if (circulo) {
                    ctx.beginPath();
                    ctx.arc(pX, pY, ancho, alto, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                }
                else {
                    if (lados == 5 && cuadro == false) {
                        ctx.beginPath();
                        ctx.moveTo(pX, pY);
                        for (var i = 0; i < lados; i++) {
                            switch (i) {
                                case 1:
                                    ancho -= 20;
                                    alto += 70;
                                    break;
                                case 2:
                                    ancho -= 20;
                                    alto -= 3;
                                    break;
                                case 3:
                                    ancho += 12;
                                    alto -= 50;
                                    break;
                                case 4:
                                    ancho -= 221;
                                    break;
                            }
                            ctx.lineTo(ancho, alto);
                        }
                        ctx.fillStyle = "black";
                        ctx.fill();
                        ctx.stroke();
                    }
                }
            }
        }
    };
    return Tren;
}());
var tren = new Tren();
var canvas = document.getElementById("caja");
if (canvas != undefined && canvas.getContext) {
    tren.nombre = "Tren ChuChu";
    var ancho = canvas.width;
    var alto = canvas.height;
    var ctx = canvas.getContext("2d");
    ctx.font = "50px rockwell";
    ctx.fillText(tren.nombre, 20, 50); 

    // =============================================================
    // los HDP rieles DHP (desarrollo de habilidades del pensamiento jajajaja)
    // =============================================================
    tren.pintar(ctx, 50, 500, 1000, 30, 0, true, false, false);         // la barra conectoras delos vagones    
    tren.pintar(ctx, 0, 620, canvas.width, 80, 0, true, false, false);  // el f... ing piso debajo delos rieles
    tren.pintar(ctx, 0, 610, 250, 615, 5, false, false, false);
    tren.pintar(ctx, 200, 610, 400, 615, 5, false, false, false);
    tren.pintar(ctx, 400, 615, 550, 615, 5, false, false, false);
    tren.pintar(ctx, 550, 614, 700, 615, 5, false, false, false);
    tren.pintar(ctx, 700, 614, 850, 615, 5, false, false, false);
    tren.pintar(ctx, 850, 614, 1000, 615, 5, false, false, false);
    tren.pintar(ctx, 1000, 614, 1150, 615, 5, false, false, false);
    tren.pintar(ctx, 1150, 614, 1300, 615, 5, false, false, false);
    tren.pintar(ctx, 1300, 614, 1450, 615, 5, false, false, false);
    tren.pintar(ctx, 1450, 614, 1600, 615, 5, false, false, false);
    tren.pintar(ctx, 1600, 614, 1750, 615, 5, false, false, false);
    tren.pintar(ctx, 1750, 614, 1900, 615, 5, false, false, false);
    // =============================================================

    var x = 80;  
    for (var i = 0; i < 3; i++) {
        tren.pintar(ctx, x, 350, 200, 200, 0, true, false, false);      // las hdp vagones
        tren.pintar(ctx, x + 100, 570, 60, 0, 0, false, true, false);   // las hdp rueditas de los vagones
        x += 270;
    }
    ///////////////////////////////////////////////////////////////
    // parte de los vagones
    ///////////////////////////////////////////////////////////////
    tren.pintar(ctx, 140, 350, 135, 350, 5, false, false, true);         // figura 1 el hexagono 
    tren.pintar(ctx, 390, 350, 405, 350, 4, false, false, true);         // figura 2 el pentagono 
    tren.pintar(ctx, 680, 350, 680, 350, 7, false, false, true);         // figura 3 el octagono
    tren.pintar(ctx, x, 150, 320, 400, 0, true, false, false);           // carro del HDP tren principal
    tren.pintar(ctx, x - 50, 100, 410, 50, 0, true, false, false);       // techo del HDP tren principal
    tren.pintar(ctx, x + 50, 200, 200, 200, 0, true, false, false);      // ventana del HDP tren principal
    tren.pintar(ctx, x + 320, 250, 300, 300, 0, true, false, false);     // motor del HDP tren principal
    tren.pintar(ctx, x + 470, 160, 90, 90, 0, true, false, false);       // fumarola del DHP tren principal
    tren.pintar(ctx, x + 440, 110, 150, 90, 0, true, false, false);      // superior fumarola del DHP tren principal
    tren.pintar(ctx, x + 620, 370, x + 620, 300, 3, false, false, true); // parte delantera del DHP tren principal
    tren.pintar(ctx, x + 150, 550, 100, 0, 0, false, true, false);       // Rueda grande del DHP tren principal
    ///////////////////////////////////////////////////////////////////
    for (var i = 0; i < 2; i++) {
        tren.pintar(ctx, x + 400, 590, 50, 0, 0, false, true, false);
        x += 150;
    }
}
else
    alert("No se encontró el canvas");
