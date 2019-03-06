function salario(sueldobase:number,años:number =1, hijo:number=0):number {
	sueldobase=30000
	if (años>=5) 
		 var bonoanos:number = sueldobase*0.125;
	
	var bonohijos:number = hijo*1000;

    if (hijo>=3)
    var bonoextra:number=(hijo-3)*500

    
	return sueldobase+bonoanos+bonohijos+bonoextra;
}

function salario_aleatorio():void {
//el ciclo se repetira entre 1 hasta 5 veces
	var i:number;
	var n:number=1+Math.round(Math.random()*5);
  for (i=1;i<n; i++){

	
	var sueldobase:number = 1+Math.round(Math.random()*90000);
	var hijo:number = 1+Math.round(Math.random()*12);
	 var años:number = 1+Math.round(Math.random()*30);
	var nombre:string="Pedro";
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
	console.log("por lo que su sueldo final sera de: ",salario(sueldobase,años,hijo));
	console.log("Fin de la vuelta");
	console.log(" ");
  }
}

function solicitar_datos():void{
    var n = prompt("introduzca su nombre por favor");
    if (n == "" || n == null||!isNaN(n))
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
				else{ 
                	//llamado a la funcion
					console.log("hola, "+n,);
					console.log("",);
					console.log("Usted tiene un sueldo base de "+s);
					console.log("",);
					console.log("un numero de hijos de : ",h);
					console.log("",);
					console.log("una antiguedad de ",a," años en la empresa",);
					console.log("",);
					console.log("por lo que su sueldo final sera de: ",salario(s,a,h));
					console.log("Gracias por formar parte de nuestra empresa ", n);
				}
            }
        }
    }

}