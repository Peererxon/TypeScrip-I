import {Figura} from "./Figura";
import {Colores} from "./Figura";

export class Triangulo extends Figura{
    private _tamLados : number

    public get tamLados():number{
        return this._tamLados;
    }
    public mover(){
        this.x++;
        this.y++
    }
    public dibujar(){
        // Colores[] es para acceder a los valores String del enumerado
        this._context.fillStyle=Colores[Figura.color];
        this._context.beginPath();
        this._context.moveTo(this.x,this.y);
        this._context.lineTo(this.x,this.y+this._tamLados);
        this._context.lineTo(this.x+this._tamLados,this.y+this._tamLados);
        this._context.closePath();
        this._context.fill();
        this._context.stroke();
    }
    constructor(contexto:CanvasRenderingContext2D ,
                tamLados?:number){
        super(contexto);
        if (tamLados==undefined)
            this._tamLados=Math.random()*500;
        else
                this._tamLados = tamLados
    }
}