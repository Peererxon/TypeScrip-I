class punto {
    x: number;
    y: number;
}

class tren {
    nombre: string


    pintar_tren(context: CanvasRenderingContext2D, p1: punto, p2: punto, p3: punto, p4: punto, p5: punto, p6: punto, p7: punto, p8: punto, radio: number,
        cuadro: boolean = false, circulo: boolean = false, triangulo: boolean = false, octagono: boolean = false, pentagono: boolean = false,
        hexagono: boolean = false, piso: boolean = false, ruedanegra: boolean = false) {

        if (cuadro) {
            context.beginPath();
            context.moveTo(p1.x, p1.y);
            context.lineTo(p2.x, p2.y);
            context.lineTo(p3.x, p3.y);
            context.lineTo(p4.x, p4.y);
            context.fillStyle = "rgb(" + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255)
                + "," + Math.ceil(Math.random() * 255) + ")";
            context.fill();
            context.closePath();
            context.stroke();
        }

        else {
            if (circulo) {
                context.beginPath();
                context.arc(p1.x, p1.y, radio, 0, Math.PI * 2);
                context.fillStyle = "rgb(" + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255)
                    + "," + Math.ceil(Math.random() * 255) + ")";
                context.fill();
                context.closePath();
                context.stroke();

            }
            else {
                if (triangulo) {
                    context.beginPath();
                    context.moveTo(p1.x, p1.y);
                    context.lineTo(p2.x, p2.y);
                    context.lineTo(p3.x, p3.y);
                    context.fillStyle = "rgb(" + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255)
                        + "," + Math.ceil(Math.random() * 255) + ")";
                    context.fill();
                    context.closePath();
                    context.stroke();
                }
                else {
                    if (octagono) {
                        context.beginPath();
                        context.moveTo(p1.x, p1.y);
                        context.lineTo(p2.x, p2.y);
                        context.lineTo(p3.x, p3.y);
                        context.lineTo(p4.x, p4.y);
                        context.lineTo(p5.x, p5.y);
                        context.lineTo(p6.x, p6.y);
                        context.lineTo(p7.x, p7.y);
                        context.lineTo(p8.x, p8.y);
                        context.fillStyle = "rgb(" + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255)
                            + "," + Math.ceil(Math.random() * 255) + ")";
                        context.fill();
                        context.closePath();
                        context.stroke();
                    }

                    else {
                        if (pentagono) {
                            context.beginPath();
                            context.moveTo(p1.x, p1.y);
                            context.lineTo(p2.x, p2.y);
                            context.lineTo(p3.x, p3.y);
                            context.lineTo(p4.x, p4.y);
                            context.lineTo(p5.x, p5.y);
                            context.fillStyle = "rgb(" + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255)
                                + "," + Math.ceil(Math.random() * 255) + ")";
                            context.fill();
                            context.closePath();
                            context.stroke();
                        }
                        else {
                            if (hexagono) {
                                context.beginPath();
                                context.moveTo(p1.x, p1.y);
                                context.lineTo(p2.x, p2.y);
                                context.lineTo(p3.x, p3.y);
                                context.lineTo(p4.x, p4.y);
                                context.lineTo(p5.x, p5.y);
                                context.lineTo(p6.x, p6.y);
                                context.fillStyle = "rgb(" + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255)
                                    + "," + Math.ceil(Math.random() * 255) + ")";
                                context.fill();
                                context.closePath();
                                context.stroke();
                            }

                            else {
                                if (piso) {

                                    context.beginPath();
                                    context.moveTo(p1.x, p1.y);
                                    context.lineTo(p2.x, p2.y);
                                    context.lineTo(p3.x, p3.y);
                                    context.lineTo(p4.x, p4.y);
                                    context.fillStyle = "rgb(0,0,0)";
                                    context.fill();
                                    context.closePath();
                                    context.stroke();

                                }

                                else {
                                    if (ruedanegra) {
                                        context.beginPath();
                                        context.arc(p1.x, p1.y, radio, 0, Math.PI * 2);
                                        context.fillStyle = "rgb(0,0,0)";
                                        context.fill();
                                        context.closePath();
                                        context.stroke();
                                    }
                                }

                            }


                        }
                    }

                }
            }
        }

    }

}

var a: tren = new tren()
var t: any = document.getElementById("chuchu");

if (t !== undefined && t.getContext) {
    a.nombre = "Mi trensito chuchumax"
    var context: CanvasRenderingContext2D = t.getContext("2d")
    context.font = "bold 22px sans-serif";
    context.fillText(a.nombre, Math.random() * 450, 20 + Math.random() * 180);

    //cuadrados
    //Viga que une vagones
    a.pintar_tren(
        context,
        { x: 5, y: 414 },
        { x: 5, y: 397 },
        { x: 380.5, y: 397 },
        { x: 380.5, y: 414 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, true, false, false, false, false, false, false,false)
    //Cuadrados ruedas medianas   
    a.pintar_tren(context,
        { x: 15, y: 350 },
        { x: 15, y: 420 },
        { x: 92, y: 420 },
        { x: 92, y: 350 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, true, false, false, false, false, false, false,false)
    a.pintar_tren(context,
        { x: 137, y: 350 },
        { x: 137, y: 420 },
        { x: 214, y: 420 },
        { x: 214, y: 350 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, true, false, false, false, false, false, false,false)
    a.pintar_tren(context,
        { x: 259, y: 350 },
        { x: 259, y: 420 },
        { x: 336, y: 420 },
        { x: 336, y: 350 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, true, false, false, false, false, false, false,false)
    //Cuadrado rueda grande
    a.pintar_tren(context,
        { x: 381, y: 270 },
        { x: 381, y: 420 },
        { x: 500, y: 420 },
        { x: 500, y: 270 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, true, false, false, false, false, false, false,false)
    //Ventana cuadrado rueda grande
    a.pintar_tren(context,
        { x: 405, y: 295 },
        { x: 405, y: 365 },
        { x: 475, y: 365 },
        { x: 475, y: 295 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, true, false, false, false, false, false, false,false)
    //trompa que va sobre las 2 ruedas pequeñas 
    a.pintar_tren(context,
        { x: 500, y: 310 },
        { x: 500, y: 420 },
        { x: 610, y: 420 },
        { x: 610, y: 310 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, true, false, false, false, false, false, false,false)
    //cuello sobre trompa 
    a.pintar_tren(context,
        { x: 550, y: 275 },
        { x: 550, y: 310 },
        { x: 585, y: 310 },
        { x: 585, y: 275 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, true, false, false, false, false, false, false,false)
    //cuadro sobre cuello
    a.pintar_tren(context,
        { x: 535, y: 230 },
        { x: 535, y: 275 },
        { x: 605, y: 275 },
        { x: 605, y: 230 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, true, false, false, false, false, false, false,false)
    //cuadro sobre cuadro rueda grande
    a.pintar_tren(context,
        { x: 370, y: 230 },
        { x: 370, y: 270 },
        { x: 520, y: 270 },
        { x: 520, y: 230 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, true, false, false, false, false, false, false,false)

    //Triangulos
    a.pintar_tren(context,
        { x: 610, y: 350 },
        { x: 610, y: 420 },
        { x: 680, y: 420 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, true, false, false, false, false,false)

    //Formas Geometricas
    //hexagono 
    a.pintar_tren(context,
        { x: 70, y: 350 },
        { x: 95, y: 315 },
        { x: 70, y: 280 },
        { x: 40, y: 280 },
        { x: 15, y: 315 },
        { x: 40, y: 350 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, false, false, false, true, false,false)
    //pentagono
    a.pintar_tren(context,
        { x: 200, y: 350 },
        { x: 215, y: 305 },
        { x: 180, y: 280 },
        { x: 145, y: 305 },
        { x: 160, y: 350 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, false, false, true, false, false,false)
    //octagono
    a.pintar_tren(context,
        { x: 310, y: 350 },
        { x: 330, y: 330 },
        { x: 330, y: 305 },
        { x: 310, y: 285 },
        { x: 285, y: 285 },
        { x: 265, y: 305 },
        { x: 265, y: 330 },
        { x: 285, y: 350 },
        0, false, false, false, true, false, false, false,false)

    //Ruedas
    //Ruedasmedianas 
    a.pintar_tren(context,
        { x: 50, y: 433 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        30, false, true, false, false, false,false, false, false)
    a.pintar_tren(context,
        { x: 175, y: 433 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        30, false, true, false, false, false,false, false, false)
    a.pintar_tren(context,
        { x: 300, y: 433 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        30, false, true, false, false, false, false, false,false)
    //Rueda grande
    a.pintar_tren(context,
        { x: 435, y: 420 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        43, false, true, false, false, false, false, false,false)
    //Ruedas pequeñas
    a.pintar_tren(context,
        { x: 520, y: 441.5 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        22.5, false, true, false, false, false, false, false,false)
    a.pintar_tren(context,
        { x: 575, y: 441.5 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        22.5, false, true, false, false, false, false, false,false)

    //piso
    //tierra
    a.pintar_tren(context,
        { x: 0, y: 465 },
        { x: 800, y: 465 },
        { x: 800, y: 500 },
        { x: 0, y: 500 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, true, false, false, false, false, false,false)
    //carril
    a.pintar_tren(context,
        { x: 0, y: 465 },
        { x: 800, y: 465 },
        { x: 800, y: 480 },
        { x: 0, y: 480 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, false, false, false, false, true,false)
    //piquitos
    a.pintar_tren(context,
        { x: 20, y: 480 },
        { x: 40, y: 480 },
        { x: 15, y: 495 },
        { x: 12, y: 485 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, false, false, false, false, true,false)
    a.pintar_tren(context,
        { x: 100, y: 480 },
        { x: 120, y: 480 },
        { x: 95, y: 495 },
        { x: 92, y: 485 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, false, false, false, false, true,false)
    a.pintar_tren(context,
        { x: 180, y: 480 },
        { x: 200, y: 480 },
        { x: 175, y: 495 },
        { x: 172, y: 485 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, false, false, false, false, true,false)
    a.pintar_tren(context,
        { x: 260, y: 480 },
        { x: 280, y: 480 },
        { x: 255, y: 495 },
        { x: 252, y: 485 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, false, false, false, false, true,false)
    a.pintar_tren(context,
        { x: 340, y: 480 },
        { x: 360, y: 480 },
        { x: 335, y: 495 },
        { x: 332, y: 485 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, false, false, false, false, true,false)
    a.pintar_tren(context,
        { x: 420, y: 480 },
        { x: 440, y: 480 },
        { x: 415, y: 495 },
        { x: 412, y: 485 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, false, false, false, false, true,false)
    a.pintar_tren(context,
        { x: 500, y: 480 },
        { x: 520, y: 480 },
        { x: 495, y: 495 },
        { x: 492, y: 485 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, false, false, false, false, true,false)
    a.pintar_tren(context,
        { x: 580, y: 480 },
        { x: 600, y: 480 },
        { x: 575, y: 495 },
        { x: 572, y: 485 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, false, false, false, false, true,false)
    a.pintar_tren(context,
        { x: 660, y: 480 },
        { x: 680, y: 480 },
        { x: 655, y: 495 },
        { x: 652, y: 485 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, false, false, false, false, true,false)
    a.pintar_tren(context,
        { x: 740, y: 480 },
        { x: 760, y: 480 },
        { x: 735, y: 495 },
        { x: 732, y: 485 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0, false, false, false, false, false, false, true,false)

    //rueda negra
    a.pintar_tren(context,
        { x: 735, y: 489.5 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        4.7, false, false, false, false, false, false, false, true)


    a.pintar_tren(context,
        { x: 655, y: 489.5 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        4.7, false, false, false, false, false, false, false, true)


    a.pintar_tren(context,
        { x: 575, y: 489.5 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        4.7, false, false, false, false, false, false, false, true)


    a.pintar_tren(context,
        { x: 495, y: 489.5 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        4.7, false, false, false, false, false, false, false, true)



    a.pintar_tren(context,
        { x: 415, y: 489.5 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        4.7, false, false, false, false, false, false, false, true)



    a.pintar_tren(context,
        { x: 335, y: 489.5 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        4.7, false, false, false, false, false, false, false, true)



    a.pintar_tren(context,
        { x: 255, y: 489.5 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        4.7, false, false, false, false, false, false, false, true)



    a.pintar_tren(context,
        { x: 175, y: 489.5 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        4.7, false, false, false, false, false, false, false, true)


    a.pintar_tren(context,
        { x: 95, y: 489.5 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        4.7, false, false, false, false, false, false, false, true)

    a.pintar_tren(context,
        { x: 15, y: 489.5 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        4.7, false, false, false, false, false, false, false, true)


}

else {
    alert("error")
}


