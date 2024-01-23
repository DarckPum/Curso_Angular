export function whatsMyType<T> (argument: T): T {
//No usar el tipo de dato any tanto.
    return argument;
}

let amIString = whatsMyType<string>('Hola mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5,6,7,8]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join(' '));