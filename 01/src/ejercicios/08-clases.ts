/*
    ===== Código de TypeScript =====
class heroe{ // idea 1 redaccion de class
    alterEgo:string;
    edad:number;
    nombreReal: number;
    /*imprimirNombre(){
        return this.alterEgo + ' ' + this.nombreReal;
    }
    constructor(alertEgo:string){
        this.alterEgo = alertEgo;
    }
}
interface Personaje2{  //redaccion de interfaces
    alterEgo:string;
    edad:number;
    nombreReal: number;

    imprimirNombre: () => string;
}
*/
//'Interface'
//const spriderman: Personaje2 ={}

class personaNormal{
    constructor(
        public nombre:string,
        public direccion:string
        ){}
}
class heroe extends personaNormal{
    constructor(
        public alterEgo:string,
        public Edad?: number,
        public nombreReal?: string
        ){
            super(nombreReal, 'New york, USA');
        }
}

//instancia Clase
const iroman = new heroe('Iroman', 35, 'Tony');

console.log(iroman);
