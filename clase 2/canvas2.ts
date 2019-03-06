interface punto{
    x:number;
    y:number;
}
function pintartriangulo(p1:punto,p2:punto,p3:punto,context:CanvasRenderingContext2D,relleno:boolean=false){
    context.beginPath();
    context.moveTo(p1.x,p1.y);
    context.lineTo(p2.x,p2.y);
    context.lineTo(p3.x,p3.y);
    if(relleno)
        context.fill();
    context.closePath();
    context.stroke();
}

var c1:any =document.getElementById("canvas1");
var c2:any=document.getElementById("canvas2");

 if (c1!==undefined && c1.getContext){
    let ancho:number=c1.width;
    let alto:number=c1.height;

     var ctx1:CanvasRenderingContext2D=c1.getContext("2d");
    pintartriangulo({x:2,y:0},{x:ancho,y:alto},{x:0,y:alto},ctx1)
    ctx1.stroke();
    var ctx2:CanvasRenderingContext2D=c2.getContext("2d");
    pintartriangulo({x:50,y:0},{x:ancho,y:alto},{x:0,y:alto},ctx2)
    ctx2.stroke();
 }else
    console.log("No tienes un navegador apto para ejecutar este canvas");