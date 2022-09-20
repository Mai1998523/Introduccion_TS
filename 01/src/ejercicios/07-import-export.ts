//import { CalculaISV, Producto } from "06-desestructuracion-funcion";

import { CalculaISV, Producto} from "./06-desestructuracion-funcion";

/*
    ===== Código de TypeScript =====
*/
const carritoCompras: Producto[] = [
    {
        desc: 'tel 1',
        precio: 100
    },
    {
        desc: 'tel 2',
        precio: 150
    }

];

const [total, isv] = CalculaISV (carritoCompras);
console.log('Total: ', total);
console.log('ISV', isv)
