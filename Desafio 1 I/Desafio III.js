//hice las correcciones que me dejo anteriormente, otorgue valores constantes donde correspondia
//Solo use variables locales para las n
//profesor por favor evalueme a fondo la identacion. Me dijeron los que trabajan en binaural que
//alla estan muy pendientes de eso, y quiero pulirme en este aspecto. Sin piedad con eso.
var nombre; 
const base=500000;
var comision;
var cantidad;
var valor_total;
var sueldo;
var contador;
contador=0
console.log("primera funcion");
var confirmar;

function primera(){
contador++;
if (contador==1)
	confirmar=true;
else if (contador>1) {
	confirmar=confirm("Esta function ya ha sido utilizada,desea volver a ejecutarla?")
}
	if (confirmar==true) {
		var n=parseInt(prompt(" Introduzca las cantidad de empleados que se registraran"));//repeticiones elegidas por el usuario
			if (isNaN(n))
				alert("Debe introducir un numero");
				else{
					for (i = 1; i<=n; i++) {
	
						nombre=prompt("introduzca su nombre por favor");
						if (nombre=="" || nombre==null || !isNaN(nombre)) 
									alert("Debes introducir un nombre");
						else{
 							alert(nombre +" eres la persona numero "+ i+" de: "+n+" en total");

							cantidad=parseInt(prompt("introduzca la cantidad de vehiculos que vendio"));
							if (isNaN(cantidad)) 
								alert("Debe introducir un numero de autos vendidos para continuar");
							else{
								comision=200000*cantidad;

								valor_total=parseInt(prompt("introduzca el valor total de sus ventas"));
								if (isNaN(valor_total)) 
									alert("Debe introducir un numero de autos vendidos para continuar");
								else{
									sueldo=base+comision+valor_total*0.10;

									//salidas


									alert("hola "+nombre);
		
									alert("usted tiene un sueldo base de "+ base) ;

									alert("Usted vendio una cantidad de " +cantidad+ " vehiculos"); 

									alert("obtendra una comision de 200000 multiplicado por la cantidad de vehiculos que vendio:"+ comision);

									alert("El valor total de sus ventas es de "+ valor_total);

									alert("por lo que su sueldo total sera de "+sueldo+"BsS");
									console.log("La funcion 1 a sido ejecutada correctamente " +contador+" veces");
								}

									
							}
						}
					}
				}
	}
	else
		alert("Hasta luego");
	
console.log("Esta funcion a sido ejecutada");
}

	
console.log("2da funcion: ");

var parcial1,parcial2,parcial3;

const evalcontinua=9;

const Tpractico=10;

var total100,total20,total4;
var contador2;
contador2=0

function segunda(){
contador2++;
if (contador2==1)
	confirmar=true;
else if (contador2>1) {
	confirmar=confirm("Esta function ya ha sido utilizada,desea volver a ejecutarla?")
}
	if (confirmar==true) {
	var n=1+Math.round(Math.random()*5);//con el numero de repeticiones aleatorias

		
		for (i = 1; i<=n; i++){
			nombre=prompt("introduzca su nombre por favor");

				if (nombre=="" || nombre==null || !isNaN(nombre)) 
					alert("Debes introducir un nombre");
				else{
					parcial1=parseInt(prompt("introduzca la nota del parcial 1"));

					parcial2=parseInt(prompt("introduzca la nota del parcial 2"));

					parcial3=parseInt(prompt("introduzca la nota del parcial 3"));
					if (parcial1==null || parcial1==""||isNaN(parcial1)||parcial2==null || parcial2==""||isNaN(parcial2)||parcial3==null || parcial3==""||isNaN(parcial3))
						alert("Debe introducir numeros, en todos los campos");
						else if (parcial1>27 ||parcial2>27 ||parcial3>27) 
									alert("Debe introducir notas validas en escala de 27 puntos")
								
							else{
								//solo a estas 2 variables e les asigna un valor fijo para obtener un indice medianamente alto

									//evalcontinua

									//Tpractico

								//procesos

								total100=parcial1+parcial2+parcial3+Tpractico+evalcontinua;

								total20=(parcial1+parcial2+parcial3+Tpractico+evalcontinua)/5;

								total4=(parcial1+parcial2+parcial3+Tpractico+evalcontinua)/25;

								//salidas

								alert(nombre+" eres el alumno numero "+i+ " en este sistema, y sus notas de los parciales1, 2 y 3 fueron de: ");

								alert("parcial 1: " +parcial1);

								alert("parcial 2: " +parcial2);

								alert("parcial 3: " +parcial3);

								alert("Su evaluacion continua: " + evalcontinua);

								alert("y su trabajo practico: " + Tpractico);

								alert(nombre+" su nota en escala de 100 es de: " + total100);

								alert(nombre+" su nota en escala de 20 es de: " + total20);

								alert(nombre+"su nota en escala de 4 es de: " + total4);
								if (i<n)
								alert("En total seran registrados "+n+" alumnos");
								console.log("La funcion 2 a sido ejecutada correctamente " +contador2+" veces");
								//a proposito fuera del if

							}							
				}
		}
	}

	else
		alert("Hasta luego");

}


console.log("3era funcion");

var contador3;
contador3=0

var cuota_inicial;

var costo;

var costo_2años;

function tercera(){
contador3++;
if (contador3==1)
	confirmar=true;
else if (contador3>1) {
	confirmar=confirm("Esta function ya ha sido utilizada,desea volver a ejecutarla?")
}
	if (confirmar==true) {

	var n=1+Math.round(Math.random()*5);//con el numero de repeticiones aleatorias

		
		for (i = 1; i<=n; i++){
			nombre=prompt("introduzca su nombre por favor");

			if (nombre=="" || nombre==null || !isNaN(nombre)) 
				alert("Debes introducir un nombre");
			else{
				costo=prompt(nombre+ " Usted es nuestro cliente numero "+i+" del total de "+n+" que atenderemos hoy"+
					"\n Introduzca por favor el costo del vehiculo que elegio");
				if (isNaN(costo)||costo==""||costo==null) 
					alert("Debe ingresar el costo del vehiculo selecto para que podamos continuar con las operaciones ");
				else {	
					cuota_inicial=costo*0.30;

					costo_2años=(costo-cuota_inicial)/24;

					//salidas

					alert("Bienvenido " + nombre);

					alert("El costo del vehiculo es de " + costo +"Bss");

					alert("El valor de la cuota inicial es de: " +cuota_inicial+"Bss");

					alert("El restante sera cancelado en los 2 años siguientes con cuotas mensuales \n"+
					 "Que corresponderan a un pago de: "+ costo_2años+"Bss "+ "mensualmente");
					console.log("La funcion 3 a sido ejecutada correctamente " +contador3+" veces");

				}	
				
			}
		}
	
	}
	else
	alert("Hasta luego");	
}


console.log("4ta funcion");
//la primera letra en mayusculas al final significa o Desayuno o Almuerzo o Cena
var nombre_local;

const Desayuno=3800;

var cantidadD;

var totalD;

const Almuerzo=5000;

var totalA;

var cantidadA;

const Cena=4200;

var totalC;

var cantidadC;

var totaldel_dia;

var promedio;

var contador4;
contador4=0;

function cuarta(){
contador4++;
if (contador4==1)
	confirmar=true;
else if (contador4>1) {
	confirmar=confirm("Esta function ya ha sido utilizada,desea volver a ejecutarla?")
}
	if (confirmar==true) {

  		var n=parseInt(prompt(" Introduzca los locales que van a ser facturados"));//repeticiones elegidas por el usuario

			if (isNaN(n))
				alert("Debe introducir un numero");
			else{
				for (i = 1; i<=n; i++){
					nombre_local=prompt("introduzca el nombre del local "+i+ " por favor");
					if (nombre_local=="" || nombre_local==null || !isNaN(nombre_local)) 
						alert("Debes introducir un nombre para el local");
					else{
						cantidadD=prompt(nombre_local+ " Usted es nuestro local numero "+i+" del total de "+n+" que facturaremos hoy"+
							"\n Introduzca por favor la cantidad de desayunos que fueron vendidos el dia de hoy.");
						if (isNaN(cantidadD)||cantidadD==""||cantidadD==null) 
							alert("Debe ingresar la cantidad de desayunos que fueron vendidos el dia de hoy para que podamos continuar con las operaciones ");
						else{
								totalD=Desayuno*cantidadD;

								cantidadA=prompt(nombre_local+ " Introduzca por favor la cantidad de almuerzos que fueron vendidos el dia de hoy");
								if (isNaN(cantidadA)||cantidadA==""||cantidadA==null) 
									alert("Debe ingresar la cantidad de almuerzos que fueron vendidos el dia de hoy para que podamos continuar con las operaciones ");
								else{
										totalA=Almuerzo*cantidadA;

										cantidadC=prompt(nombre_local+ " Introduzca por favor la cantidad de cenas que fueron vendidos el dia de hoy");
									if (isNaN(cantidadC)||cantidadC==""||cantidadC==null) 
										alert("Debe ingresar la cantidad de cenas que fueron vendidas el dia de hoy para que podamos continuar con las operaciones ");
									else{
										totalC=Cena*cantidadC;

										totaldel_dia=totalD+totalA+totalC;

										promedio=(Desayuno+Almuerzo+Cena)/3 ;

										//salidas

										alert("Hola "+nombre_local);

										alert("El precio del Desayuno es de: "+ Desayuno+ "Bss");

										alert("Hoy se vendieron "+cantidadD+" desayunos");

										alert("Por lo que el total del dia por desayunos es de: "+ totalD+"Bss");

										alert("El precio del Almuerzo es de: "+ Almuerzo+ "Bss");

										alert("Hoy se vendieron "+cantidadA+" almuerzos");

										alert("Por lo que el total del dia por almuerzos es de: "+ totalA+"Bss");

										alert("El precio de la Cena es de: "+ Cena+ "Bss");

										alert("Hoy se vendieron "+cantidadC+" cenas");

										alert("Por lo que el total del dia por cenas es de: "+ totalC+"Bss");

										alert("El ingreso total del dia de hoy en "+ nombre_local+ " es de: "+ totaldel_dia+ "Bss");

										alert("En general la comida en "+nombre_local +" tienen un precio de: "+promedio)
										console.log("La funcion 4 a sido ejecutada correctamente " +contador4+" veces");
									}
								}
						}
					}
				}
			}
	}
	else
		alert("Hasta luego");
}
