Algoritmo salario
	definir nombre,apellido,Ncompleto como caracter
	Definir SueldoBase,bonohijos,bonoaños,bonoextra,total como real
	definir hijo,años Como Entero
	
	nombre=pedro
	apellido=hernandez
	
	SueldoBase=Aleatorio(10000,90000)
	hijo=Aleatorio(1,8)
	años=Aleatorio(1,30)
	
	si años>=5 entonces
		bonoaños=SueldoBase*0.125
	FinSi
	
	bonohijos=hijo*1000
//	
//	si hijo>=3 Entonces
//		bonohijos=500*hijo	
//	FinSi
	
	total=SueldoBase+bonoaños+bonohijos
	Ncompleto=nombre +" " +apellido
	
	Mostrar "hola, " + Ncompleto
	Mostrar ""
	
	Mostrar "Usted tiene un sueldo base de " SueldoBase
	Mostrar ""
	
	Mostrar "un numero de hijos de : " hijo
	Mostrar ""
	
	Mostrar "una antiguedad de " años " años en la empresa"
	Mostrar ""
	
	Mostrar "por lo que su sueldo final sera de: " total
	
FinAlgoritmo

	