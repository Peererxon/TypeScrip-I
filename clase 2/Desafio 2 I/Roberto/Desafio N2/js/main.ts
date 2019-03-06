var canvas:any = document.getElementById("lienzo")

interface Punto{
    x:number,
    y:number
}

abstract class Figura{
    color:string
    puntos: Array<Punto>
    contexto:CanvasRenderingContext2D 
    
    pintar(){
    this.contexto.closePath();
    this.contexto.fillStyle = this.color
    this.contexto.fill()
    this.contexto.stroke()
    }
    abstract dibujar()
    crear(){
        this.dibujar()
        this.pintar()
    }
}
class Circulo extends Figura{
    radio:number
    dibujar(){
    this.contexto.beginPath()
    this.contexto.arc(this.puntos[0].x,this.puntos[0].y,this.radio,0,Math.PI*2)
    }
    constructor (p1:Punto, radio:number, color:string){
        super();
            this.contexto  = canvas.getContext("2d")
            this.puntos= [{x:p1.x, y:p1.y}]
            this.radio = radio
            this.color = color
   }
}
class Triangulo extends Figura{
    dibujar(){
        this.contexto.beginPath()
        this.contexto.moveTo(this.puntos[0].x, this.puntos[0].y)
        this.contexto.lineTo(this.puntos[1].x, this.puntos[1].y)
        this.contexto.lineTo(this.puntos[2].x, this.puntos[2].y)
    }
    constructor(p1:Punto, longitudLado:number,  color:string){
        super();
            this.contexto  = canvas.getContext("2d")
            this.color = color
            this.puntos = [{x:p1.x, y:p1.y}, 
                           {x:p1.x, y:p1.y + longitudLado}, 
                           {x:p1.x+ longitudLado, y:p1.y + longitudLado}]
    }
}
class Cuadrilatero extends Figura{
    dibujar(){
        this.contexto.beginPath()
        this.contexto.moveTo(this.puntos[0].x, this.puntos[0].y)
        this.contexto.lineTo(this.puntos[0].x, this.puntos[1].y)
        this.contexto.lineTo(this.puntos[1].x, this.puntos[1].y)
        this.contexto.lineTo(this.puntos[1].x, this.puntos[0].y)
    }
    constructor(p1:Punto, color:string, longitudLado:number, longitudLado2?:number ){
        super();
            this.contexto  = canvas.getContext("2d")
            this.color = color
            if(longitudLado2){
                this.puntos = [{x:p1.x, y:p1.y}, 
                               {x:p1.x + longitudLado, y:p1.y + longitudLado2}]
            }else{
                this.puntos = [{x:p1.x, y:p1.y}, 
                               {x:p1.x + longitudLado, y:p1.y + longitudLado}]
            }
    }       

}

class Pentagono extends Figura{
    dibujar(){
        this.contexto.beginPath()
        this.contexto.moveTo(this.puntos[0].x, this.puntos[0].y)
        this.contexto.lineTo(this.puntos[1].x, this.puntos[0].y)
        this.contexto.lineTo(this.puntos[2].x, this.puntos[1].y)
        this.contexto.lineTo(this.puntos[3].x, this.puntos[2].y)
        this.contexto.lineTo(this.puntos[4].x, this.puntos[1].y)
    }
    constructor(p1:Punto, longitudLado:number, color:string){
        super();
            this.contexto  = canvas.getContext("2d")
            this.color = color
            this.puntos = [{x:p1.x, y:p1.y},
                           {x:p1.x + longitudLado, y:p1.y - longitudLado},
                           {x:p1.x + (longitudLado * 1.25), y:p1.y - (longitudLado * 1.5)},
                           {x:p1.x + (longitudLado * 0.5), y:p1.y },
                           {x:p1.x - (longitudLado * 0.25), y:p1.y }] 
    }
}
class Exagono extends Figura{
    dibujar(){
        this.contexto.beginPath()
        this.contexto.moveTo(this.puntos[0].x, this.puntos[0].y)
        this.contexto.lineTo(this.puntos[1].x, this.puntos[0].y)
        this.contexto.lineTo(this.puntos[2].x, this.puntos[1].y)
        this.contexto.lineTo(this.puntos[1].x, this.puntos[2].y)
        this.contexto.lineTo(this.puntos[0].x, this.puntos[2].y)
        this.contexto.lineTo(this.puntos[3].x, this.puntos[1].y)
    }
    constructor(p1:Punto, longitudLado:number, color:string){
        super();
            this.contexto  = canvas.getContext("2d")
            this.color = color
            this.puntos = [{x:p1.x, y:p1.y},
                {x:p1.x + longitudLado, y:p1.y - longitudLado},
                {x:p1.x + (longitudLado * 1.5), y:p1.y - (longitudLado * 2)},
                {x:p1.x - (longitudLado * 0.5), y:p1.y }]  
    }
}
class Octagono extends Figura{
    dibujar(){
        this.contexto.beginPath()
        this.contexto.moveTo(this.puntos[0].x, this.puntos[0].y)
        this.contexto.lineTo(this.puntos[1].x, this.puntos[0].y)
        this.contexto.lineTo(this.puntos[2].x, this.puntos[1].y)
        this.contexto.lineTo(this.puntos[2].x, this.puntos[2].y)
        this.contexto.lineTo(this.puntos[1].x, this.puntos[3].y)
        this.contexto.lineTo(this.puntos[0].x, this.puntos[3].y)
        this.contexto.lineTo(this.puntos[3].x, this.puntos[2].y)
        this.contexto.lineTo(this.puntos[3].x, this.puntos[1].y)
    }
    constructor(p1:Punto, longitudLado:number, color:string){
        super();
            this.contexto  = canvas.getContext("2d")
            this.color = color
            this.puntos = [{x:p1.x, y:p1.y},
                {x:p1.x + (longitudLado * 1.5), y:p1.y - longitudLado},
                {x:p1.x + (longitudLado * 2.5), y:p1.y - (longitudLado * 2.5 )},
                {x:p1.x - longitudLado , y:p1.y - (longitudLado * 3.5)}]
    }
}
class Via extends Figura{
        dibujar(){
            this.contexto.beginPath()
            this.contexto.moveTo(this.puntos[0].x, this.puntos[0].y)
            this.contexto.lineTo(this.puntos[1].x, this.puntos[1].y)
            this.contexto.lineTo(this.puntos[1].x + 6, this.puntos[2].y)
            this.contexto.lineTo(this.puntos[2].x, this.puntos[0].y)
        }
        constructor(p1:Punto, color:string){
            super();
                this.contexto  = canvas.getContext("2d")
                this.color = color
                this.puntos = [{x:p1.x, y:p1.y},
                    {x:p1.x - 20, y:p1.y + 10},
                    {x:p1.x + 15 , y:p1.y + 20}]
        }
}
class Tren{
    nombre:string
    circulos:Array<Circulo>
    cuadrilateros:Array<Cuadrilatero>
    vias:Array<Via>
    figuras:Array<Figura>
    contexto:CanvasRenderingContext2D
        pintar(){
            this.cuadrilateros = [new Cuadrilatero({x:0,y:300},"gold",900,20),
                                new Cuadrilatero({x:0,y:290},"black",900,10),
                                new Cuadrilatero({x:30,y:220},"greenyellow",500,20),
                                new Cuadrilatero({x:45,y:145},"blue",100),
                                new Cuadrilatero({x:195,y:145},"yellow",100),
                                new Cuadrilatero({x:345,y:145},"red",100),
                                new Cuadrilatero({x:495,y:45},"darkred",150,200),
                                new Cuadrilatero({x:530,y:85},"white",80),
                                new Cuadrilatero({x:475,y:10},"orange",190,45),
                                new Cuadrilatero({x:645,y:115},"blue",130),
                                new Cuadrilatero({x:700,y:65},"yellow",50),
                                new Cuadrilatero({x:680,y:15},"orange",90,50),]

            for(let i = 0; i < this.cuadrilateros.length ; i++){
                this.cuadrilateros[i].crear()
            }
            for(let i = 60; i< 920; i+=80){
                this.vias = [new Via({x:i,y:295},"black"),
                             new Circulo({x:i - 18,y:311},6,"black")]
                this.vias[0].crear()
                this.vias[1].crear() 
            }
            this.circulos =[new Circulo({x:95,y:260},30,"yellow"),
                            new Circulo({x:245,y:260},30,"red"),
                            new Circulo({x:395,y:260},30,"blue"),
                            new Circulo({x:570,y:240},50,"greenyellow"),
                            new Circulo({x:680,y:265},25,"darkviolet"),
                            new Circulo({x:745,y:265},25,"fuchsia")]

            for(let i = 0; i < this.circulos.length; i++){
                this.circulos[i].crear()
            }
            this.figuras = [new Triangulo({x:775,y:145},100,"orange"),
                            new Exagono({x:70,y:145},50,"fuchsia"),
                            new Pentagono({x:210,y:145},70,"turquoise"),
                            new Octagono({x:370,y:145},30,"gold")]
            for(let i = 0; i < this.figuras.length; i++){
                this.figuras[i].crear()
            }
            




        }
}

var tren1:Tren = new Tren()
tren1.nombre = "LOLA"
tren1.contexto = canvas.getContext("2d")
tren1.contexto.strokeText("Nombre: " + tren1.nombre, 10, 20)
tren1.pintar()