export {};

type Profile = {
    name:string;
    age:number
}

const me : Profile = {
    name:'Ham',
    age:43
}

me.age++;

console.log(me)

type PersonalDataTypes = Readonly<Profile>;
const friend : PersonalDataTypes = {
    name:'shigeru',
    age:40
}

friend.age++;

// type YomitoriSenyo<T> ={
//     readonly [P in keyof T]: T[P]
// }