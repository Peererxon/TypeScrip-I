class Tren{
    nombre:string;

    pintar(ctx:CanvasRenderingContext2D, pX:number, pY:number, ancho:number, alto:number, lados:number,
    cuadro:boolean,circulo:boolean, otraFigura:boolean) {
        let color = "rgb("+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+
        Math.ceil(Math.random()*255)+")";
        ctx.fillStyle = color;
        if(cuadro){           //  ( CUADRADO LADOS IGUALES )
            ctx.fillRect(pX, pY, ancho, alto);
        }
        else{
            if(otraFigura){
                ctx.beginPath();
                ctx.moveTo(pX, pY);
                if(lados == 5){   // debe ser un hexagono
                    for(var i = 0;i<lados;i++){        
                        switch(i){
                            case 0: ancho -= 50; alto -= 80; break;
                            case 1: ancho += 50; alto -= 80; break;
                            case 2: ancho += 80; break; 
                            case 3: ancho += 50; alto += 80; break;
                            case 4: ancho -= 50; alto += 80; break;
                        }
                        ctx.lineTo(ancho, alto);
                    }
                }
                else{
                    if(lados == 4){       // debe ser un pentagono
                        for(var i = 0;i<=lados;i++){
                            switch(i){
                                case 0: ancho -= 30; alto -= 100; break;
                                case 1: ancho += 80; alto -= 60; break;
                                case 2: ancho += 80; alto += 60; break;
                                case 3: ancho -= 20; alto += 100; break;
                            }
                            ctx.lineTo(ancho, alto);
                        }
                    }
                    else{
                        if(lados == 7){  // debe ser un octagono 
                            for(var i = 0;i<lados;i++){
                                switch(i){
                                    case 0: ancho -= 45; alto -= 45; break;
                                    case 1: alto -= 55; break;
                                    case 2: ancho += 55; alto -= 45; break;
                                    case 3: ancho += 55; break;
                                    case 4: ancho += 55; alto += 45; break;
                                    case 5: alto += 55; break;
                                    case 6: ancho -= 45; alto += 45; break;
                                }
                                ctx.lineTo(ancho, alto);
                            }
                        }
                        else{
                            if(lados == 3){   //debe ser un triangulo
                                for(var i = 1;i<lados;i++){
                                    switch(i){
                                        case 1: alto += 250; break;
                                        case 2: ancho += 250; break;
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
            else{
                if(circulo){  // debe ser un CIRCULO
                    ctx.beginPath();
                    ctx.arc(pX, pY, ancho, alto, Math.PI*2);
                    ctx.fill();
                    ctx.stroke();
                }
                else{
                    if(lados == 5 && cuadro == false){
                        ctx.beginPath();
                        ctx.moveTo(pX, pY);
                        for( var i = 0;i<lados;i++){
                            switch(i){
                                case 1: ancho -= 20; alto += 70; break;
                                case 2: ancho -= 20; alto -= 3; break;
                                case 3: ancho += 12; alto -= 50; break;
                                case 4: ancho -= 221; break;
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
    }
}

var tren:Tren = new Tren();

var canvas:any = document.getElementById("caja");
if(canvas != undefined && canvas.getContext){
    tren.nombre = "Tren ChuChu"                  // NOMBRE MAS G.... IMPOSIBLE
    var ancho:number = canvas.width;
    var alto:number = canvas.height;
    var ctx:CanvasRenderingContext2D = canvas.getContext("2d");
    ctx.font = "50px rockwell";
    ctx.fillText(tren.nombre, 20, 50);
                                          // aqui se coloca la matriz pixeles, en donde se ubica las coordenadas de las figuras, los rieles y el piso

    tren.pintar(ctx, 50, 500, 1000, 30, 0, true, false, false);
    tren.pintar(ctx, 0, 620, canvas.width, 80, 0, true, false, false);
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
    let x:number = 80;
    for(var i = 0;i<3;i++){
        tren.pintar(ctx, x, 350, 200, 200, 0, true, false, false);
        tren.pintar(ctx, x+100, 570, 60, 0, 0, false, true, false);
        x += 270;
    }
    tren.pintar(ctx, 140, 350, 135, 350, 5, false, false, true);
    tren.pintar(ctx, 390, 350, 405, 350, 4, false, false, true);
    tren.pintar(ctx, 680, 350, 680, 350, 7, false, false, true);
    tren.pintar(ctx, x, 150, 320, 400, 0, true, false, false);
    tren.pintar(ctx, x-50, 100, 410, 50, 0, true, false, false);
    tren.pintar(ctx, x+50, 200, 200, 200, 0, true, false, false);
    tren.pintar(ctx, x+320, 250, 300, 300, 0, true, false, false);
    tren.pintar(ctx, x+470, 160, 90, 90, 0, true, false, false);
    tren.pintar(ctx, x+440, 110, 150, 90, 0, true, false, false);
    tren.pintar(ctx, x+620, 370, x+620, 300, 3, false, false, true);
    tren.pintar(ctx, x+150, 550, 100, 0, 0, false, true, false);
    for(var i = 0;i<2;i++){
        tren.pintar(ctx, x+400, 590, 50, 0, 0, false, true, false);
        x += 150;
    }
    
}
else
    alert("No se encontró el canvas");