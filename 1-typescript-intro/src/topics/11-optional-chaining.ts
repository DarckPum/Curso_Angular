export interface Passenger{
    name: string;
    chilren?: string[];

}

const passenger1: Passenger = {
    name: 'Octavio',
}

const passenger2: Passenger = {
    name:'Adair',
    chilren: ['Luis','Osiris'],
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.chilren?.length || 0;
    //El signo de ! quiere decir que nunca recibira un valor nulo.
    //const howManyChildren = passenger.chilren!.length || 0;
//Hola tavo
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger2);
printChildren(passenger1);