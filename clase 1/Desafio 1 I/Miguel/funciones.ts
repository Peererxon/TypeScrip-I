
function calcularBono(salarioBase:number, antiguedad=1, hijos=0): number{
    var bono:number = 0;
    var extraHijos:number = 0;

    if(antiguedad > 5){
        bono = (salarioBase*0.125);
    }
    if(hijos > 0 && hijos < 4){
        extraHijos = (1000*hijos);
    }
    if(hijos > 3){
        extraHijos = 3000 + ((hijos-3)*500);
    }
    return bono+extraHijos;
}

function datosaleatorios(): void{
    var n:number = Math.ceil(Math.random()*5);    
    for(var i = 1;i<n;i++){
        var salarioBase:number = Math.round(2000+Math.random()*2000);
        var antiguedad:number = Math.round(Math.random()*30)
        var hijos = Math.round(Math.random()*6);
        console.log("\nEl empleado N°"+i);
        console.log("Tiene un salario base de: "+salarioBase);
        console.log("Tiene "+antiguedad+" años de antiguedad");
        console.log("Y tiene "+hijos+" hijos");
        console.log("Su bono es de: "+calcularBono(salarioBase, antiguedad, hijos)+" BsS.");
        console.log("Su salario final es de: "+(calcularBono(salarioBase, antiguedad, hijos)+salarioBase)+" BsS.");
    }
}

datosaleatorios();

function datosingresados(): void{
    var n:number = parseInt(prompt("Ingrese el numero de empleados: "));
    if(!isNaN(n)){
        for(var i = 1;i<=n;i++){
            
            var nombre:string = prompt("Ingrese el nombre del empleado");
            if(nombre != null && nombre != ""){
                var salarioBase:number = parseFloat(prompt("Ingrese el sueldo base de "+nombre));
                if(!isNaN(salarioBase)){
                    var antiguedad:number = parseInt(prompt("Ingrese los años de antiguedad de "+nombre));
                    if(!isNaN(antiguedad)){
                        var hijos = parseInt(prompt("Ingrese la cantidad de hijos de "+nombre));
                        if(!isNaN(hijos)){
                            alert("\nEl empleado N°"+i+" "+nombre+"\nTiene un salario base de: "+salarioBase+
                            "\nTiene "+antiguedad+" años de antiguedad\nY tiene "+hijos+" hijos"+
                            "\nSu bono es de: "+calcularBono(salarioBase, antiguedad, hijos)+" BsS."+
                            "\nSu salario final es de: "+
                            (calcularBono(salarioBase, antiguedad, hijos)+salarioBase)+" BsS.");
                        }
                        else{
                            alert("Número invalido");
                        }
                    }
                    else{
                        alert("Número invalido");
                    } 
                }
                else{
                    alert("Número invalido");
                }
            }
            else{
                alert("Nombre invalido");
            }
        }
    }
    else{
        alert("Número invalido");
    } 
    
}