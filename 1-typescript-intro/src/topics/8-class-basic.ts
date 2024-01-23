export class Person {
    // Propiedades de la clase
    //public name: string;
    //private address: string;

    // Constructor de la clase
    constructor(
        public firsName: string,
        public lastName: string, 
        private address: string = 'No address'
        ){}

    // Método de la clase
}

export class Hero {
    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        //this.person = new Person(realName);
    }
}

const tony = new Person('Tony','Stark','New York');
const iroman = new Hero ('Iroman',45,'Tony',tony);

console.log(iroman);