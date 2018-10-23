class Figura{
    x:number
    y:number


     mostrarinformacion(){
        console.log("Hola mundo")
        console.log("Estoy en X: ", this.x,",Y:",this.y)
    }

}
let a:Figura=new Figura()
a.x=50
a.y=20
a.mostrarinformacion()