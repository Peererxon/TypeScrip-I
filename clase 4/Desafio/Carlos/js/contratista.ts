enum colors{
    marron = "brown",
    amarillo = "yellow",
    negro = "black",
    gris = "gray",
    rojo = "red",
    naranja = "orange",
    azul = "blue",
    verde = "green"
}
abstract class Figura 
{
    protected _color:colors
    protected context:CanvasRenderingContext2D
    private _posicionX:number
    private _posicionY:number
    constructor(ctx:CanvasRenderingContext2D, posicionX:number, posicionY:number) 
    {
        this.context = ctx
        this.posX = posicionX
        this.posY = posicionY
    }
    get color():colors
    {
        return this._color
    }
    set color(new_color:colors)
    {
        this._color = new_color
    }
    get posX():number
    {
        return this._posicionX
    }
    get posY():number
    {
        return this._posicionY
    }
    set posX(new_x:number)
    {
        this._posicionX = new_x
    }
    set posY(new_y:number)
    {
        this._posicionY = new_y
    }
    abstract dibujar()
}
class Ventana extends Figura
{
    private _tamaño:number;
    private _conMarco:boolean;
    private _luzEncendida:boolean;
    constructor(ctx:CanvasRenderingContext2D, tam:number, posicionX:number, posicionY:number, marco?:boolean, luz?:boolean)
    {
        super(ctx, posicionX, posicionY)
        this.tamaño = tam
        if (marco == undefined)
        {
            let n = Math.round(Math.random())
            if (n == 0)
            {
                this.conMarco = true
            }else
            {
                this.conMarco = false
            }
        }else
        {
            this.conMarco = marco
        }
        if (luz == undefined)
        {
            let m = Math.round(Math.random())
            if (m == 0)
            {
                this.luzEncendida = true
            }else
            {
                this.luzEncendida = false
            }
        }else
        {
            this.luzEncendida = luz
        }
        if (this.luzEncendida == true)
        {
            this.color = colors.amarillo
        }else
        {
            this.color = colors.negro
        }
    }
    get tamaño():number
    {
        return this._tamaño
    }
    get conMarco():boolean
    {
        return this._conMarco
    }
    get luzEncendida():boolean
    {
        return this._luzEncendida
    }
    set tamaño(new_tamaño:number)
    {
        this._tamaño = new_tamaño
    }
    set conMarco(new_marco:boolean)
    {
        this._conMarco = new_marco
    }
    set luzEncendida(new_luz:boolean)
    {
        this._luzEncendida = new_luz
    }
    public dibujar() 
    {
        let ctx = this.context
        let alto = this.tamaño / 2
        let ancho = this.tamaño
        if (this.conMarco == true)
        {
            ctx.fillStyle = colors.marron
            ctx.fillRect(this.posX-5, this.posY-5, ancho + 10, alto + 10)
        }
        ctx.fillStyle = this.color
        ctx.fillRect(this.posX, this.posY, ancho, alto)
    }
}
class Piso extends Figura
{
    private _nroVentanas:number
    private _ancho:number
    static alto:number
    constructor(ctx:CanvasRenderingContext2D, pisoAncho:number, posicionX:number, posicionY:number, colorPiso:colors)
    {
        super(ctx, posicionX, posicionY)
        this.ancho = pisoAncho
        this.nroVen = Math.ceil((Math.random()*5)+3)
        this.color = colorPiso
    }
    get nroVen():number
    {
        return this._nroVentanas
    }
    get ancho():number
    {
        return this._ancho
    }
    set nroVen(new_nroVen:number)
    {
        this._nroVentanas = new_nroVen
    }
    set ancho(new_ancho:number)
    {
        this._ancho = new_ancho
    }
    public dibujar()
    {
        let ctx = this.context
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.moveTo(this.posX, this.posY)
        ctx.lineTo(this.posX, this.posY + Piso.alto)
        ctx.lineTo(this.posX + this.ancho, this.posY + Piso.alto)
        ctx.lineTo(this.posX + this.ancho, this.posY)
        ctx.lineTo(this.posX, this.posY)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        let posVen:number = 10
        let tamVen:number = (this.ancho / this.nroVen) - 20
        for (let i = 0; i < this.nroVen; i++)
        {
            var ventanas:Ventana = new Ventana(ctx, tamVen, this.posX + posVen, this.posY + ((Piso.alto - (tamVen / 2)) / 2))
            ventanas.dibujar()
            posVen = posVen + tamVen + 20
        }
    }
}
class Edificio extends Figura
{
    private _nroPisos:number
    private _ancho:number
    private _nombre:string
    constructor(ctx:CanvasRenderingContext2D, nuevoNombre:string, cantidadPisos:number, posicionX:number, posicionY:number)
    {
        super(ctx, posicionX, posicionY)
        this.nombre = nuevoNombre
        this.nroPisos = cantidadPisos
        this.ancho = Math.round(Math.random() * canvas.width/4) + canvas.width/4
        let n = Math.ceil(Math.random()*5) + 3
        if (n == 4)
        {
            this.color = colors.gris
        }else
        {
            if (n == 5)
            {
                this.color = colors.rojo
            }else
            {
                if (n == 6)
                {
                    this.color = colors.naranja
                }else
                {
                    if (n == 7 )
                    {
                        this.color = colors.azul
                    }else
                    {
                        this.color = colors.verde
                    }
                }
            }
        }
    }
    get nroPisos():number
    {
        return this._nroPisos
    }
    get ancho():number
    {
        return this._ancho
    }
    get nombre():string
    {
        return this._nombre
    }
    set nroPisos(new_nro:number)
    {
        this._nroPisos = new_nro
    }
    set ancho(new_ancho:number)
    {
        this._ancho = new_ancho
    }
    set nombre(new_nombre:string)
    {
        this._nombre = new_nombre
    }
    public dibujar()
    {
        let ctx = this.context 
        let alt:number = this.posY
        for (let i = 0; i < this.nroPisos; i++)
        {
            alt = alt - Piso.alto
            var pisos:Piso = new Piso(this.context, this.ancho, this.posX, alt, this.color)
            pisos.dibujar()
        }
        ctx.fillStyle = this.color
        alt = alt - Piso.alto / 2
        ctx.fillText(this.nombre, this.posX + this.ancho * 0.4, alt)
    }
}
function construir()
{
    let titulo:string
    do
    {
        titulo = prompt("Cual es el Nombre del Edificio?")
        if (titulo == "" || titulo == null)
        {
            alert("Alerta! Debe Ingresar un Nombre")
        }
    }while (titulo == "" || titulo == null)
    if (canvas != undefined && canvas.getContext)
    {
        var ctx = canvas.getContext("2d")
        Piso.alto = canvas.height / 6
        var edificaion:Edificio = new Edificio(ctx, titulo, Math.ceil(Math.random() * 4) + 1, Math.random()* canvas.width/2, canvas.height)
        edificaion.dibujar()
    }
}
var canvas:any = document.getElementById("ciudad")
canvas.width = screen.availWidth - 17
canvas.height = screen.availHeight
document.getElementById("generar").onclick = construir