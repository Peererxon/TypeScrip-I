Algoritmo salario
	definir nombre,apellido,Ncompleto como caracter
	Definir SueldoBase,bonohijos,bonoa�os,bonoextra,total como real
	definir hijo,a�os Como Entero
	
	nombre=pedro
	apellido=hernandez
	
	SueldoBase=Aleatorio(10000,90000)
	hijo=Aleatorio(1,8)
	a�os=Aleatorio(1,30)
	
	si a�os>=5 entonces
		bonoa�os=SueldoBase*0.125
	FinSi
	
	bonohijos=hijo*1000
//	
//	si hijo>=3 Entonces
//		bonohijos=500*hijo	
//	FinSi
	
	total=SueldoBase+bonoa�os+bonohijos
	Ncompleto=nombre +" " +apellido
	
	Mostrar "hola, " + Ncompleto
	Mostrar ""
	
	Mostrar "Usted tiene un sueldo base de " SueldoBase
	Mostrar ""
	
	Mostrar "un numero de hijos de : " hijo
	Mostrar ""
	
	Mostrar "una antiguedad de " a�os " a�os en la empresa"
	Mostrar ""
	
	Mostrar "por lo que su sueldo final sera de: " total
	
FinAlgoritmo

	