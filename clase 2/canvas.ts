


var c:any =document.getElementById("canvas");
 if (c!==undefined && c.getContext){
     console.log("El ancho del canvas es de: ", c.width);
     console.log("El alto del canvas es de: ", c.height);
     var context:CanvasRenderingContext2D=c.getContext("2d");
     context.beginPath();
     context.moveTo(0,0);
     context.lineTo(300,150);
     context.lineTo(150,500);
     context.closePath();
     context.fill();
     context.stroke();
 }else
    console.log("No tienes un navegador apto para ejecutar este canvas");
