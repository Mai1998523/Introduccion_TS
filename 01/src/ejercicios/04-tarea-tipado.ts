
/*
    ===== Código de TypeScript =====
*/
interface superHeroe{
    nombre: string;
    edad: number;
    direccion: Direccion;
    /*direccion: {
        calle:string;
        pais:string;
        ciudad:string;
    },*/
    mostrarDireccion: () => string;
/*    mostrarDireccion():string;*/
}
interface Direccion{
    calle:string;
    pais:string;
    ciudad: string;
}


const superheroe: superHeroe ={
    nombre: 'spiderman',
    edad: 30,
    direccion:{
        calle: 'Main ST',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superheroe.mostrarDireccion();
console.log(direccion)