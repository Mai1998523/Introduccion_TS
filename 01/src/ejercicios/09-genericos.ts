/*
    ===== Código de TypeScript =====
*/

function queTiposoy<T>(argumento:T){
    return argumento;
} 

let soyString = queTiposoy('Hola mundo');
let soyNumero = queTiposoy(25);
let soyArreglo = queTiposoy([1,2,3,4,5,6,7,8,9]);

let soyExplicito = queTiposoy<number>(100);
//let soyExplicito01 = queTiposoy<number>('holap');
