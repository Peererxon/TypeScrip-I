var c = document.getElementById("canvas");
if (c !== undefined && c.getContext) {
    var context = c.getContext("2d");
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(50, 50);
    context.stroke;
}
else
    console.log("No tienes un navegador apto para ejecutar este canvas");
