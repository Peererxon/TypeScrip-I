function salario(sueldobase, años, hijo) {
    sueldobase = 30000;
    años = 1;
    hijo = 0;
    if (años >= 5)
        var bonoanos = sueldobase * 0.125;
    var bonohijos = hijo * 1000;
    if (hijo >= 3)
        var bonoextra = (hijo - 3) * 500;
    return sueldobase + bonoanos + bonohijos + bonoextra;
}
function salario_aleatorio() {
    //el ciclo se repetira entre 1 hasta 5 veces
    var i;
    var n = 1 + Math.round(Math.random() * 5);
    for (i = 1; i < n; i++) {
        var sueldobase = 1 + Math.round(Math.random() * 90000);
        var hijo = 1 + Math.round(Math.random() * 12);
        var años = 1 + Math.round(Math.random() * 30);
        var nombre = "Pedro";
        console.log("esta es la vuelta numero:" + i);
        console.log(" ");
        console.log("hola, " + nombre);
        console.log("");
        console.log("Usted tiene un sueldo base de " + sueldobase);
        console.log("");
        console.log("un numero de hijos de : ", hijo);
        console.log("");
        console.log("una antiguedad de ", años, " años en la empresa");
        console.log("");
        console.log("por lo que su sueldo final sera de: ", salario(sueldobase, años, hijo));
        console.log("Fin de la vuelta");
        console.log(" ");
    }
}
function solicitar_datos() {
    var n = prompt("introduzca su nombre por favor");
    if (n == "" || n == null || !isNaN(n))
        alert("Debes introducir un nombre");
    else {
        var s = parseInt(prompt("introduzca su sueldo base"));
        if (isNaN(s))
            alert("Debe introducir un sueldo base ara continuar");
        else {
            var h = parseInt(prompt("introduzca el numero de hijos que usted tiene"));
            if (isNaN(h))
                alert("Debe introducir un numero de hijos para continuar");
            else {
                var a = parseInt(prompt("introduzca el numero de años que tiene en la empresa"));
                if (isNaN(a))
                    alert("Debe introducir un numero de años para continuar");
                else {
                    //llamado a la funcion
                    console.log("hola, " + n);
                    console.log("");
                    console.log("Usted tiene un sueldo base de " + s);
                    console.log("");
                    console.log("un numero de hijos de : ", h);
                    console.log("");
                    console.log("una antiguedad de ", a, " años en la empresa");
                    console.log("");
                    console.log("por lo que su sueldo final sera de: ", salario(s, a, h));
                    console.log("Gracias por formar parte de nuestra empresa ", n);
                }
            }
        }
    }
}
