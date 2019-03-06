var Tren = /** @class */ (function () {
    function Tren() {
    }
    Tren.prototype.pintar = function (contexto, X, Y, figura, L, R, dibx, diby) {
        /*let color = "rgb("+Math.random()*255+","+Math.random()*255+","+
        Math.random()*255+");"*/
        var color = "rgb(" + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255) + "," +
            Math.ceil(Math.random() * 255) + ")";
        contexto.fillStyle = color;
        // para variar el tamaño de la figura segun el radio de circunferencia circunscrita para los poligonos
         //R=parseInt(prompt("radio"));
        // Para elegir los lados del poligono si L =4 lados tenmos cuadrado, si L = 5 poligono, etc		
        //X = parseInt(prompt("cordenadas de x"));
        //Y = parseInt(prompt("cordenadas de y"));
        // L=parseInt(prompt("lados"));
        if (figura == 1) {
            contexto.fillStyle = "#6ab150";
            contexto.strokeStyle = color;
            contexto.lineWidth = 3;
            var rad = (2 * Math.PI) / L;
            // traslada el contexto en el centro del canvas 
            // para poder girar el contexto alrededor del centro 
            // Para mover el centro de la figura dhp tan solo se coloca el valor de la coordenada en 
            //(x =canvas1.width/2 ,y = canvas1.height/2) 
            contexto.translate(X, Y);
            //gira el contexto unos 270deg
            contexto.rotate(3 * Math.PI / 2);
            // dibuja el trazado 
            contexto.beginPath();
            for (var i = 0; i < L; i++) {
                var x = X + R * Math.cos(rad * i);
                var y = Y + R * Math.sin(rad * i);
                contexto.lineTo(x, y);
            }
            contexto.closePath();
            contexto.fill();
            contexto.stroke();
            // Circulo
            // contexto.arc(cordx, cordy, dibx, diby, Math.PI*2); contexto.fill(); contexto.stroke();
        } /*else if (figura==2) {
                  // Triangulo
                for(var i = 1;i<3;i++)
                     {
                        switch(i)
                           {
                           case 1:  break;
                           case 2:  break;
                           }
                        contexto.lineTo(cordx, cordy);
                  }*/
        /*}    else if (figura==3) {
                 for(var i = 0;i<4;i++)
                 {// cuadrado
                       switch(i){
                                   case 0: //arista inferior izquierda
                                 dibx = cordx-1; diby = cordy-1;break;
                                 contexto.lineTo(dibx,diby);
                                 contexto.fill();
                                  contexto.closePath();
                                  contexto.stroke();
                                  case 1:   //arista superior izquierda
                                  dibx = cordx-1; diby = cordy+1; break;
                
                                  case 2:    //arista superior derecha
                                 dibx = cordx+1;diby = cordy+1; break;

                                  case 3:    //arista inferior derecha
                                  dibx = cordx+1;diby = cordy-1; break;
                                 }
                 }*/
        //  else if (figura==4) 
        //     { 
        //           // Rectangulo
        //           contexto.beginPath();
        //          // contexto.moveTo(100,0);
        //           //contexto.lineTo(400,400);
        //           /* contexto.fill();
        //           contexto.closePath();
        //           contexto.stroke();  */
        //          // dibx = X-1; diby = Y-1;
        //           //contexto.lineTo(dibx,diby);
        //         for(var i = 0;i<4;i++) 
        //          {
        //                 switch(i){
        //                           case 0: dibx = X-100; diby = Y;  //arista inferior izquierda
        //                           contexto.moveTo(0,Y);
        //                           contexto.lineTo(dibx,diby);
        //                            case 1:                    //arista inferior derecha
        //                           //contexto.moveTo(dibx,diby);
        //                           dibx = dibx; diby = Y-50;    
        //                           contexto.lineTo(dibx,diby); 
        //                          case 2:                    //arista superior derecha 
        //                          //contexto.moveTo(dibx,diby);
        //                          dibx = dibx-100; diby = diby;    
        //                          contexto.lineTo(dibx,diby); 
        //                         /* case 3:                     //arista superior izquierda
        //                          diby = diby+50;
        //                         contexto.lineTo(dibx,diby);  */
        //                          }
        //                         //contexto.lineTo(dibx,diby); 
        //          }
        //          //contexto.fill();
        //          //contexto.closePath();
        //          contexto.stroke(); 
        //     }
        //contexto.fillRect(20,20,200,100);
    };
    return Tren;
}());
var tren = new Tren();
var canvas = document.getElementById("Tren");
var contexto = canvas.getContext("2d");
if (canvas != undefined && canvas.getContext) {
    tren.pintar(contexto, 100, 300, 1, 5, 50);
}
else
    alert("No se localizo el canvas Tren");
