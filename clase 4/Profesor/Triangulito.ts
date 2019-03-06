import {Triangulo} from "./Triangulo"

export class Triangulito extends Triangulo{
    private nombre:string

    constructor(contexto:CanvasRenderingContext2D,nombre:string){
        super(contexto,75)
        this.nombre=nombre
    }
    // se sobre escribe el metodo de la super clase Triangulo
    public dibujar(){
        super.dibujar();
        this._context.fillStyle="black"
        this._context.font="25px arial"
        this._context.fillText(this.nombre,this.x+this.tamLados/8,
                                this.y+this.tamLados*0.8)
        
    }
}
