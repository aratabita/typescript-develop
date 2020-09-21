export {};

let fooCompatible:any;
let barCompatible:string = 'TypeScript';

console.log(typeof fooCompatible)

//any => stringはok
fooCompatible = barCompatible;

console.log(typeof fooCompatible)

let fooIncompatible:string;
let barIncompatible: number = 1;

//string=> number はNG
// fooIncompatible= barIncompatible;

let fooString:string;
let barString:string = 'string';

fooString = barString;
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral

let fooNumber:number;
let fooNumberLiteral: 1976 = 1976 ;

fooNumber = fooNumberLiteral;

interface Animal {
    age:number;
    name:string;
}

class Person {
    constructor(public age:number,public name:string) {}
}

let me: Animal;
me = new Person(43,'Hamsan');

//型の互換性