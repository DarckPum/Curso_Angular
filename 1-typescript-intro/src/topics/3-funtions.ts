
function addNumbers( a: number, b: number):number {
    return a + b;
    //return undefined;
};

//Funcion de fecha
const addNumbersArrow = ( a: number, b: number): string =>{
    return '${ a + b }';
};

//Funcion para regresar void
function multyply(firstNumber: number,secondNumber?: number,base:number = 2){
    return firstNumber * base;
};

const result: number = addNumbers(1,2);
const result2: string = addNumbersArrow(1,2);
const multiplyResult: number = multyply(5);

console.log({result,result2,multiplyResult})




export{};