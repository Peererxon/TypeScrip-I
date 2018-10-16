function calcular_bono (monto:number, porc=10,x?:boolean):number{
    if (x==undefined)
    x=false;

    if(monto>1000)
    return monto+=monto*porc/100;
    else
    return monto;
}

var a:number;
//var b:string para el ejemplo del error
var b:number;
var c:number;

a=calcular_bono(1500);
b=calcular_bono(1500,20);
c=calcular_bono(1500,25,false)
//b=calcular_bono("hola") un error
//b=calcular_bono(10).toFixed(2) asi si se podria porque toFixed retorna una cadena

console.log("el valor de A es: ", a);
console.log("el valor de B es: ", b);
