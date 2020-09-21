export {};

const debugProfile = (name:string, age:number) =>{
    console.log({name,age})
}

debugProfile('ham', 43)

type Profile = Parameters<typeof debugProfile> //引数の型

const profile:Profile = ['Gloria', 76];

debugProfile(...profile);

