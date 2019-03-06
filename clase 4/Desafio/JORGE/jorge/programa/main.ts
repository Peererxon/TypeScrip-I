enum Colores{
    Red,
    white,
    Purple,
    Orange,
    Blue,
    Green,
    Grey,
    yellow,
}

abstract class Figura{
    private _x:number
    private _y:number
    protected static  _color:Colores = Colores.Orange;
    protected _context :CanvasRenderingContext2D

    public get x(){
        return this._x;
    }
    public get y(){
        return this._y;
    }
    public set x(x:number){
        this._x=x;
    }
    public set y(y:number){
        this._y=y;
    }
    public static set color(color:Colores){
        this._color=color;
    }
    public static get color():Colores{
        return this._color;
    }
    constructor(context:CanvasRenderingContext2D, 
                x?:number,y?:number){
        if (x==undefined )
            this._x = Math.random()*250+20;
        else
            this._x = x;
        this._y = (y==undefined)?Math.random()*250 : y;
        this._context = context;
    }
    public abstract dibujar();
    public abstract mover();
}

class Ventana extends Figura {
    public tamaño:number;
    public conMarco:boolean;
    luzEncendida:boolean;

    constructor(context:CanvasRenderingContext2D,x?:number,y?:number,marco?:boolean,luz?:boolean){
        super(context,x,y);
        
        if (marco==undefined) {
            let num:number= Math.round(Math.random()*1)
            if (num==0) {
                this.conMarco= true
            } else {
                this.conMarco= false
            }            
        } else {
            this.conMarco= marco
        }
        if (luz==undefined) {
            let num:number= Math.round(Math.random()*1)
            if (num==0) {
                this.luzEncendida= true
            } else {
                this.luzEncendida= false
            }            
        } else {
            this.luzEncendida= luz;
        }
    }

    public dibujar() {
        if (this.conMarco) {
            this._context.fillStyle= "white"
            this._context.fillRect(this.x-5,this.y-5,this.tamaño+10,this.tamaño/2+10)
            this._context.clearRect(this.x,this.y,this.tamaño,this.tamaño/2)
        }
        if (this.luzEncendida) {
            this._context.fillStyle= "yellow"
        } else {
            this._context.fillStyle= "black"
        }
        this._context.fillRect(this.x,this.y,this.tamaño,this.tamaño/2)
    }
    public mover(){

    };
}
class Piso extends Figura {
    public nroVentanas:number;
    public ancho:number;
    static alto:number= 100;
    constructor(context:CanvasRenderingContext2D,p_x:number,p_y:number,n_ancho:number,n_color:Colores) {
        super(context);
        this.ancho= n_ancho;
        Figura.color=n_color;
        this.x=p_x
        this.y=p_y
        this.nroVentanas= Math.round(Math.random()*5)+3
    }
    public dibujar() {
        this._context.fillStyle= Colores[Figura.color]
        this._context.fillRect(this.x,this.y,this.ancho,Piso.alto)
        this._context.strokeRect(this.x,this.y,this.ancho,Piso.alto)
        let espacio:number=0
        for (let i = 0; i < this.nroVentanas; i++) {
            var ventana:Ventana=new Ventana(this._context,this.x+espacio+10,this.y+30)
            ventana.tamaño= (this.ancho-140) / this.nroVentanas
            espacio= espacio + this.ancho / this.nroVentanas
            ventana.dibujar()           
        }
    }
    public mover() {
    }
}

class Edificio extends Figura{
    public nroPisos:number;
    public ancho:number;
    public nombre:string;

    constructor(context:CanvasRenderingContext2D,p_x:number,p_y:number,n_nombre:string,nro_pisos:number) {
        super(context);
        this.nombre= n_nombre;
        this.nroPisos= nro_pisos;
        this.x=p_x
        this.y=p_y
        let color_aleatorio:Colores=Math.round(Math.random()*6)
        Figura.color= color_aleatorio
        this.ancho= Math.round(Math.random()*100)+300        
    }
    public dibujar() {
        for (let i = 0; i < this.nroPisos; i++) {
            var piso:Piso=new Piso(this._context,this.x,this.y-Piso.alto*i,this.ancho,Figura.color)
            piso.dibujar()
        }
        let mitad_y:number= this.y - (this.nroPisos * Piso.alto) + (Piso.alto/2)
        let mitad_x:number= this.ancho / 2 + this.x
        this._context.fillStyle= Colores[1]
        this._context.fillRect(this.x,this.y-Piso.alto*this.nroPisos,this.ancho,Piso.alto)
        this._context.strokeRect(this.x,this.y-Piso.alto*this.nroPisos,this.ancho,Piso.alto)
        this._context.font= "30px Cambria"
        this._context.strokeText(this.nombre, mitad_x-40,mitad_y)
        this._context.fillStyle= Colores[Piso.color]
        this._context.fillText(this.nombre, mitad_x-40,mitad_y)

        //hice a medias el sol me imagino que no era requerido hacerlo
        this._context.beginPath()
        this._context.fillStyle= "yellow"
        this._context.arc(1200,100,80,0,Math.PI*2);
        this._context.fill();          
    }        
    public mover() {
    }
}
function ejecutar() {
    var nombre:string= prompt("Hola Por Favor Ingrese Su Nombre:")
    if (nombre=="") {
        alert("el nombre no puede estar vacio")
    } else {
        var canvas:any= document.getElementById("lienzo")
        if (canvas.getContext) {
            canvas.style.display="block"
            canvas.width= screen.availWidth
            canvas.height= screen.availHeight            
            var contexto:CanvasRenderingContext2D= canvas.getContext("2d")
            var edificio:Edificio=new Edificio(contexto, Math.round(Math.random()*600),canvas.height-Piso.alto,nombre, Math.round(Math.random()*3)+2)
            edificio.dibujar()
        }
    }
}

document.getElementById("boton").onclick= ejecutar;
//Ojo lo subi pero aun le sigo haciendo correcciones!


//  Realizar las siguientes actividades utilizando la clase abstracta Figura (con el método abstracto dibujar) y el enumerado Colores utilizados 
// en clase (ATENCIÓN: SE VE MUY LARGO PERO ES PORQUE LA EXPLICACIÖN ESTA MUY DETALLADA. VAYAN HACIENDO CADA OBJETIVO UNO POR UNO. NO  TRATEN DE 
// HACER EL SIGUIENTE OBJETIVO SI EL ANTERIOR NO ESTA RESUELTO )
// 1.- Crear una clase con el nombre Ventana que herede de la clase Figura, que tenga los atributos: tamaño (number), conMarco (boolean), 
// luzEncendida (boolean). Sobre escribir el método "dibujar", que debe pintar la ventana en la posición X,Y que tenga. El ancho y el alto se 
// debe conseguir usando el atributo tamaño. El color de fondo dependerá de si la luz esta encendida (amarillo) o no (negro). Si el atributo 
// conMarco es true, la ventana debe tener un marco, de lo contrario no. En el constructor los valores de los atributos "conMarco" y "luzEncendida" 
// son opcionales y deben asignarse aleatoriamente si no se reciben

// 2.- Crear una clase con el nombre Piso que herede de la clase Figura, que tenga el atributo nroVentanas (number), ancho (number) y alto (number). 
// El alto debe ser un atributo Static y constante. En el constructor se debe recibir por parámetro el ancho, el color, la posición X,Y, pero el 
// atributo nroVentanas debe ser un número aleatorio. Sobre escribir el método "dibujar", que debe pintar un rectangulo usando la posición X,Y, 
// del color que tenga el atributo color. Luego debe instanciar tantas ventanas como tenga el atributo nroVentanas y llamar el método "dibujar" de 
// cada una. El tamaño de las ventanas debe calcularse en base al ancho del piso, de modo tal que todas quepan (todas las ventanas deben tener el 
// mismo tamaño y debe haber una pequeña separación entre estas).

// 3.- Crear la clase Edificio que herede de la clase Figura, que tenga los atributos nroPisos (number), ancho (number) y nombre (string). El constructor 
// debe recibir por parámetros: el nombre del edificio, el número de pisos, la posición X y la posición Y. El color y el ancho se determinan de forma 
// aleatoria.

// 4.- Sobre escribir el método dibujar de la clase Edificio, que debe instanciar y dibujar tantos objetos de la clase Piso como número de pisos tenga 
// el edificio, enviando por parámetro al constructor de Piso: el color, el ancho y la posición X del edificio. El primer piso debe estar en la 
// posición Y del edificio menos el alto de un piso, el sengundo piso debe estar en la posición Y menos el alto de 2 pisos (this.Y - Piso.alto*i) y 
// asi sucesivamente. Luego de pintar todos los pisos, se debe mostrar el nombre del edificio (arriba del último piso)

// 5.- Crear un archivo HTML con un canvas que ocupe toda la página. Agregar un botón y programar el evento click del botón para que ejecute una 
// función que pida al usuario un nombre (usando prompt) y luego instancie un objeto de la clase Edificio, pasando por parámetro al constructor el 
// nombre del edificio (el que el usuario escribió), un número de pisos aleatorio, una posición X aleatoria, la posición Y debe ser el borde inferior
// del canvas. Luego de instanciar el edificio debe ejecutar el método dibujar (utilice la imagen adjunta como ejemplo)