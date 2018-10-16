function calcular_bono(monto) {
    if (monto > 1000)
        return monto += 100;
    else
        return monto;
}
var a;
var b;
a = calcular_bono(1500);
//b=calcular_bono("hola") un error
//b=calcular_bono(10).toFixed(2) asi si se podria porque toFixed retorna una cadena
