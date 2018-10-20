
var total:number=0;
var i:number=0;

//esta es la funcion con los valores asignados fijos
function salario(sueldobase:number,años:number,hijo:number,nombre:string) {

	nombre="Pedro"
	sueldobase=30000
	años=1
	hijo=0
	if (años>=5) 
		 var bonoanos:number = sueldobase*0.125;
	
	var bonohijos:number = hijo*1000;

    if (hijo>=3)
    var bonoextra:number=(hijo-3)*500

    
	total=sueldobase+bonoanos+bonohijos;
	console.log("hola, "+nombre,);
	console.log("",);
	console.log("Usted tiene un sueldo base de ",sueldobase);
	console.log("",);
	console.log("un numero de hijos de : ",hijo);
	console.log("",);
	console.log("una antiguedad de ",años," años en la empresa",);
	console.log("",);
	console.log("por lo que su sueldo final sera de: "+ total);
}

function salario_aleatorio(sueldobase,años,hijo,nombre) {
//el ciclo se repetira desde 1 hasta 5 veces
	var n:number=1+Math.round(Math.random()*5);
  for (i=1;i<n; i++){

	

    nombre = "jose";
	sueldobase = 1+Math.round(Math.random()*90000);
	hijo = 1+Math.round(Math.random()*12);
	años = 1+Math.round(Math.random()*30);
	if (años>=5) 
		var bonoanos:number = sueldobase*0.125;
	
	var bonohijos:number = hijo*1000;

    if (hijo>3)
   var bonoextra:number=(hijo-3)*500

    
	total = sueldobase+bonoanos+bonohijos;
	console.log("esta es la vuelta numero:" +i);
	console.log(" ");
	console.log("hola, "+nombre,);
	console.log("",);
	console.log("Usted tiene un sueldo base de "+sueldobase);
	console.log("",);
	console.log("un numero de hijos de : ",hijo);
	console.log("",);
	console.log("una antiguedad de ",años," años en la empresa",);
	console.log("",);
	console.log("por lo que su sueldo final sera de: ",total,);
	console.log("Fin de la vuelta");
	console.log(" ");
  }
}
//salario_aleatorio()

function solicitar_datos(sueldobase,años,hijo,nombre){
    nombre = prompt("introduzca su nombre por favor");
    if (nombre == "" || nombre == null)
        alert("Debes introducir un nombre");
    else {
        sueldobase = parseInt(prompt("introduzca su sueldo base"));
        if (isNaN(sueldobase))
            alert("Debe introducir un sueldo base ara continuar");
        else {
            hijo = parseInt(prompt("introduzca el numero de hijos que usted tiene"));
            if (isNaN(hijo))
                alert("Debe introducir un numero de hijos para continuar");
            else {
                años = parseInt(prompt("introduzca el numero de años que tiene en la empresa"));
           		 if (isNaN(años))
						alert("Debe introducir un numero de años para continuar");
				else{ 
                	//llamado a la funcion
                	salario(sueldobase,años,hijo,nombre);
					console.log("Gracias por formar parte de nuestra empresa ", nombre);
				}
            }
        }
    }

}