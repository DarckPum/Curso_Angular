//Importar
import { Product, taxCalculation } from './6-funtion-destructuring';
//import {taxCalculation} from './6-funtion-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Redmi Note 10', 
        price: 250.0
    },
    {
        description: 'Samsung V15', 
        price: 180.0
    }
];

//Tax = 0.15
const [total,tax]= taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total: ',total);
console.log('Tax',tax);