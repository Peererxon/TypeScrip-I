var sueldo_base = 0;
var cant_años_antigüedad = 1;
var nro_hijos = 0;
var bono_años = 0;
var bono_hijos = 0;
var i = 0;
var n = 0;
function calcular_salario(sueldo_base, cant_años_antigüedad, nro_hijos, bono_años, bono_hijos) {
    if (cant_años_antigüedad > 5)
        bono_años = sueldo_base * 0.125;
    if (nro_hijos > 0 && nro_hijos <= 3)
        bono_hijos = nro_hijos * 1000;
    else {
        if (nro_hijos > 3)
            bono_hijos = (nro_hijos * 1000) + ((nro_hijos - 3) * 500);
    }
    return bono_años + bono_hijos;
}
n = parseInt(prompt("Cantidad de empleados:"));
if (isNaN(n) || n == null) {
    alert("Asegurese de ingresar datos válidos");
}
else {
    for (i = 1; i <= n; i++) {
        sueldo_base = parseInt(prompt("Sueldo base:"));
        if (isNaN(sueldo_base) || sueldo_base == null) {
            alert("Asegurese de ingresar datos válidos");
            break;
        }
        else {
            cant_años_antigüedad = parseInt(prompt("Años de antigüedad:"));
            if (isNaN(cant_años_antigüedad) || cant_años_antigüedad == null) {
                alert("Asegurese de ingresar datos válidos");
                break;
            }
            else {
                nro_hijos = parseInt(prompt("Numero de hijos:"));
                if (isNaN(nro_hijos) || nro_hijos == null) {
                    alert("Asegurese de ingresar datos válidos");
                    break;
                }
                else {
                    calcular_salario(sueldo_base, cant_años_antigüedad, nro_hijos, bono_años, bono_hijos);
                    alert("Sueldo base= " + sueldo_base + " $" + "\n" + "Años de antigüedad= " + cant_años_antigüedad + " años"
                        + "\n" + "numero de hijos= " + nro_hijos + " hijos"
                        + "\n" + "bono= " + Math.round(calcular_salario(sueldo_base, cant_años_antigüedad, nro_hijos, bono_años, bono_hijos)) + " $"
                        + "\n" + "Salario Total= " + Math.round((calcular_salario(sueldo_base, cant_años_antigüedad, nro_hijos, bono_años, bono_hijos) + sueldo_base)) + "$");
                }
            }
        }
    }
}
