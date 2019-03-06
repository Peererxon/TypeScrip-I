
function calcsueldo(sueldobase:number, años=1, hijos=0): number{
    var bono:number = 0;
    var bonohijos:number = 0;
    var bonoextra=0;

    if (años > 5) {
        bono = (sueldobase * 0.125);
    }
    
        bonohijos = 1000 * hijos;

    if (hijos > 3) {
        bonoextra =(hijos - 3) * 500;
    }
    return (sueldobase+bono + bonohijos+ bonoextra);
}


    var n:number = 1+Math.round(Math.random()*3);    
    for(var i = 1;i<n;i++){
        var nombre:string="Pedro"
        var sueldobase:number = 1+Math.round(Math.random()*9000);
        var años:number = 1+Math.round(Math.random()*33)
        var hijos = 1+Math.round(Math.random()*10);
        console.log("esta es la vuelta numero:" +i);
	    console.log(" ");
	    console.log("hola, "+nombre,);
        console.log("usted tiene un sueldo base de: "+sueldobase);
        console.log("Tiene "+años+" años de trabajo en la empresa");
        console.log("Y un numero de hijos de: "+hijos);
        console.log("Su sueldo final es de: "+(calcsueldo(sueldobase, años, hijos))+" petros.");
    }


function solicitar_datos(): void{
    var n:number = parseInt(prompt("Ingrese el numero de los trabajadores: "));
    if(!isNaN(n)){
        for(var i = 1;i<=n;i++){
            
            var name:string = prompt("introduzca su nombre por favor");
            if (name == "" || name == null||!isNaN(name))
                alert("Debes introducir un nombre");
            else {
                var s = parseInt(prompt("introduzca su sueldo base"));
                if (isNaN(s))
                    alert("Debe introducir un sueldo base para continuar");
                else {
                    var h = parseInt(prompt("introduzca el numero de hijos que usted tiene"));
                    if (isNaN(h))
                        alert("Debe introducir un numero de hijos para continuar");
                    else {
                       var a = parseInt(prompt("introduzca el numero de años que tiene en la empresa"));
                            if (isNaN(a))
                                alert("Debe introducir un numero de años para continuar");
                        else{ 
                            //llamado a la funcion
                            console.log("hola, "+name,);
                            console.log("",);
                            console.log("Usted tiene un sueldo base de "+s);
                            console.log("",);
                            console.log("un numero de hijos de : ",h);
                            console.log("",);
                            console.log("una antiguedad de ",a," años en la empresa",);
                            console.log("",);
                            console.log("por lo que su sueldo final sera de: ",calcsueldo(s,a,h));
                            console.log("Gracias por formar parte de nuestra empresa ", name);
                        }
                    }
                }
            }
        }
    }

}
    
