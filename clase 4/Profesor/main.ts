import {Triangulo} from "./Triangulo"
import {Triangulito} from "./Triangulito"
import {Colores} from "./Figura"
import {Figura} from "./Figura"

var canvas:any=document.getElementById("canvas");
if (canvas.getContext){

    var t1:Triangulito = new Triangulito(canvas.getContext("2d"),"jose")
    t1.dibujar();

    var t:Triangulo =new Triangulo(canvas.getContext("2d"),Math.random()*500)  
    t.dibujar();
    
    Figura.color = Colores.Yellow; // se usa el setter implicito
    for (let i=1;i<=5;i++)
        new Triangulito(canvas.getContext("2d"),i.toString()).dibujar();

}