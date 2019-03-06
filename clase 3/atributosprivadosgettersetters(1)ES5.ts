class Circulo{
    private radio:number;
    private _color:string;

    public setRadio(radio:number){ //Hecho de forma tradicional
        this.radio=radio;
    }
    public getRadio(){
        return this.radio;
    }

    public get color(){ //De esta forma es mas facil llamar a estos metodos, ver_ en la definicion
        //del atributo puede usarse la tradicional y esta. recomendante esta.
        return this._color;
    }

    public set color(color:string){
        this._color=color;
    }
}
//para usar la nueva forma la version de target de ecmascript debe ser 5 o superior(ES5)
//por defecto viene en 3 ES3
//el comando es tsc nombrearchivo -t y ES5,ES2016 depende de lo que se quiera
//entre mas alto sea el compilado de ES mas incompatibilidad hay entre los navegadores
var c:Circulo=new Circulo();
c.color="red"; //la nueva forma que da  js, recomendado usar esta
c.setRadio(20);//esta es a la antigua, tal como se vio en POO

console.log(c.color);