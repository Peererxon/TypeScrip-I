function calcularsueldo(x) {
    if (x.edad > 18)
        return 100;
    else
        return x.edad * 5;
}
var p = {
    nombre: "Anderson Gil",
    edad: 19,
    sexo: "Masculino"
};
console.log("El valor del sueldo es", calcularsueldo(p));
p.edad = 15;
console.log("El valor del sueldo es", calcularsueldo(p));
