var sueldo_base=0;
var cant_años_antigüedad=1; 
var nro_hijos=0; 
var bono_años=0;
var bono_hijos=0;
var i=0;

function calcular_salario(sueldo_base:number, cant_años_antigüedad:number, nro_hijos:number, bono_años:number, bono_hijos:number,):number {	
	
	if(cant_años_antigüedad>5)
		bono_años=sueldo_base*0.125;

	if (nro_hijos>0 && nro_hijos<=3) 	
		bono_hijos=nro_hijos * 1000;

	    else{ 
	    	if(nro_hijos>3)
	    		 bono_hijos=(nro_hijos*1000)+((nro_hijos-3)*500);
	    }
	return bono_años+bono_hijos
}

var n=1+Math.round(Math.random()*5);  
for (i = 1; i <= n; i++) {
	
	sueldo_base=Math.round(Math.random()*5000);
	cant_años_antigüedad=Math.round(Math.random()*15);
	nro_hijos=Math.round(Math.random()*7);

	calcular_salario(sueldo_base, cant_años_antigüedad, nro_hijos, bono_años, bono_hijos);
	console.log("Sueldo base= "+ sueldo_base +" $");
	console.log("Años de antigüedad= "+ cant_años_antigüedad +" años");
	console.log("numero de hijos= "+ nro_hijos +" hijos");
	console.log("bono="+ Math.round(calcular_salario(sueldo_base, cant_años_antigüedad, nro_hijos,bono_años,bono_hijos))+ " $");
	console.log("Sueldo total:"+ Math.round((calcular_salario(sueldo_base, cant_años_antigüedad, nro_hijos,bono_años,bono_hijos)+ sueldo_base))+" $")
	console.log("")
}	

