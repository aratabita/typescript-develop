export {};

class Me{
   static isProgrammer:boolean=true;
    static firstName:string = 'Atsushi'
    static lastName:string= 'Ishida'

   static work(){
        return `Hey, guys! I'm ${this.firstName}. Are you interested Typescript? Let's dive into Typescript!`
    }
}

let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer)
console.log(Me.work())