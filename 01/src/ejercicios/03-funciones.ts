/*
    ===== Código de TypeScript =====
*/
function suma(a,b){
    return a+b;
}
function suma01(a:number, b:number){
    return (a + b).toString();
}

const sumarFlecha = (a:number, b:number): number =>{
    return a+b
}
function multiplicar(numero:number, otroNum?:number, base:number = 2):number{
    return numero * base;
}

/*
console.log(suma(3,5))
console.log(suma('maigualida','rangel'))
console.log(suma01(3,5))
console.log(sumarFlecha(3,3))

const resultado=multiplicar(2,3)
console.log(resultado)
*/


interface PersonajeLOR{ /* Clase */
    nombre:string;
    pv:number;
    mostrarhp: () => void;
}

function curar(personaje: PersonajeLOR, curarX:number):void{
    personaje.pv += curarX;
    /*console.log(personaje);*/
}

const nuevoPersonaje: PersonajeLOR ={
    nombre:'strider',
    pv:50,
    mostrarhp(){
        console.log('puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarhp();