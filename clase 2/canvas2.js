function pintartriangulo(p1, p2, p3, context, relleno) {
    if (relleno === void 0) { relleno = false; }
    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.lineTo(p3.x, p3.y);
    if (relleno)
        context.fill();
    context.closePath();
    context.stroke();
}
var c1 = document.getElementById("canvas1");
var c2 = document.getElementById("canvas2");
if (c1 !== undefined && c1.getContext) {
    var ancho = c1.width;
    var alto = c1.height;
    var ctx1 = c1.getContext("2d");
    pintartriangulo({ x: 200, y: 0 }, { x: ancho, y: alto }, { x: 0, y: alto }, ctx1);
    ctx1.stroke();
    var ctx2 = c2.getContext("2d");
    pintartriangulo({ x: 50, y: 0 }, { x: ancho, y: alto }, { x: 0, y: alto }, ctx2);
    ctx2.stroke();
}
else
    console.log("No tienes un navegador apto para ejecutar este canvas");
