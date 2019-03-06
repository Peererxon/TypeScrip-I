class Tren
{ 
    nombre:string;

     pintar(contexto:CanvasRenderingContext2D,cordx:number,cordy:number,figura:number,radio:number, dibx:number,diby:number,){
        /*let color = "rgb("+Math.random()*255+","+Math.random()*255+","+
        Math.random()*255+");"*/
        let color="rgb("+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+
        Math.ceil(Math.random()*255)+")";

        contexto.fillStyle = color;

        switch (figura)
        {// Circulo
            case 0:  contexto.arc(cordx, cordy, dibx, diby, Math.PI*2); contexto.fill(); contexto.stroke();
            
            case 1: // Triangulo
                                for(var i = 1;i<3;i++)
                                {
                                    switch(i)
                                        {
                                        case 1:  break;
                                        case 2:  break;
                                        }
                                    contexto.lineTo(cordx, cordy);
                                };
                                
            case 2 :   // cuadrado
                    for(var i = 0;i<4;i++)  
                    {
                         switch(i){
                                    case 0: //arista inferior izquierda
                                    dibx = cordx-1; diby = cordy-1;break;
                                    contexto.lineTo(dibx,diby); 
                                    contexto.fill();
                                    contexto.closePath();
                                    contexto.stroke();
                                    case 1:   //arista superior izquierda
                                    dibx = cordx-1; diby = cordy+1; break;
                        
                                    case 2:    //arista superior derecha
                                    dibx = cordx+1;diby = cordy+1; break;

                                    case 3:    //arista inferior derecha
                                    dibx = cordx+1;diby = cordy-1; break;
                                   }
                 
                    } 
        
            case 3: // Rectangulo
            for(var i = 0;i<4;i++)  
                    {
                         switch(i){
                                    case 0: //arista inferior izquierda
                                    dibx = cordx-1; diby = cordy-1;break;
                            
                                    case 1:   //arista superior izquierda
                                    dibx = cordx-1; diby = cordy+1; break;
                        
                                    case 2:    //arista superior derecha
                                    dibx = cordx+1;diby = cordy+1; break;

                                    case 3:    //arista inferior derecha
                                    dibx = cordx+1;diby = cordy-1; break;
                                   }
                    contexto.lineTo(dibx,diby); 
                    } 
            
            case 4: // Pentagono
            for(var i = 0;i<5;i++)  
                    {
                         switch(i){
                                    case 0: //arista pta 1
                                    dibx = cordx; diby = cordy;break;
                            
                                    case 1:   //arista pta 2
                                    dibx = cordx; diby = cordy; break;
                        
                                    case 2:    //arista pta 3
                                    dibx = cordx;diby = cordy; break;

                                    case 3:    //arista pta 4
                                    dibx = cordx;diby = cordy; break;

                                    case 4:    //arista pta 5
                                    dibx = cordx;diby = cordy; break;
                                   }
                    contexto.lineTo(dibx,diby); 
                    } 
            case 5: // Hexagono

            case 6: // Octagono

        }
    }
}

var tren:Tren = new Tren();
var canvas:any = document.getElementById("Tren");
var contexto=canvas.getContext("2d");
if(canvas != undefined && canvas.getContext){

tren.pintar(contexto, 50, 500, 0, 10,10);

}
else
    alert("No se localizo el canvas Tren");