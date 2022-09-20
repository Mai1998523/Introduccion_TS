/*
    ===== Código de TypeScript =====
*/
export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto ={
    desc: 'nokia a1',
    precio: 150
}
const tableta: Producto ={
    desc: 'aipad air',
    precio: 350
}
export function CalculaISV(productos: Producto[]):[number,number]{
    let total = 0;

    productos.forEach( ({ precio }) => {
        total += precio;
    })   
    return [total, total * .15];
}

const articulos = [telefono, tableta];

const [total, isv] = CalculaISV(articulos);
console.log('Total: ', total);
console.log('ISV: ', isv);