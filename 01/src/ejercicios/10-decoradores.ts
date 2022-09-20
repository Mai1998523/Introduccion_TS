/*
    ===== Código de TypeScript =====
*/
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor:T
) {
    return class extends constructor{
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator // es una funcion que expande y agrega mas funcionalidades
class miSuperClaser{ // sirve para diferenciar clases en angular 
    public miPropiedad: string = 'ABC123'; // se muestra cuando se instancia

    imprimir(){
        console.log('hola mundo');
    }
}

console.log(miSuperClaser);
const miClase = new miSuperClaser();

console.log(miClase.miPropiedad);