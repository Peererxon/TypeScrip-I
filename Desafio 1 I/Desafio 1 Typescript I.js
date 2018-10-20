// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function salario() {
	var hernandez, pedro;
	var nombre = new String();
	var apellido = new String();
	var ncompleto = new String();
	var sueldobase = new Number();
	var bonohijos = new Number();
	var bonoanos = new Number();
	var bonoextra = new Number();
	var total = new Number();
	var hijo = new Number();
	var anos = new Number();
	nombre = pedro;
	apellido = hernandez;
	sueldobase = aleatorio(10000,90000);
	hijo = aleatorio(1,8);
	anos = aleatorio(1,30);
	if (anos>=5) {
		bonoanos = sueldobase*0.125;
	}
	bonohijos = hijo*1000;
	// si hijo>=3 Entonces
	// bonohijos=500*hijo 
	// FinSi
	total = sueldobase+bonoanos+bonohijos;
	ncompleto = nombre+" "+apellido;
	document.write("hola, "+ncompleto,'<BR/>');
	document.write("",'<BR/>');
	document.write("Usted tiene un sueldo base de ",sueldobase,'<BR/>');
	document.write("",'<BR/>');
	document.write("un numero de hijos de : ",hijo,'<BR/>');
	document.write("",'<BR/>');
	document.write("una antiguedad de ",anos," años en la empresa",'<BR/>');
	document.write("",'<BR/>');
	document.write("por lo que su sueldo final sera de: ",total,'<BR/>');
}

