export {};

let bmi:(     height: number,     weight: number,printable?:boolean)=> number = (height:number,weight:number,printable?:boolean):number =>{
  const bmi:number = weight/ height*height;
    if(printable) console.log(`bmi:${bmi}`)
    return  bmi;
}

bmi(1.69,55);

// bmi(身長,体重,console.logに出力するかどうか)
//true
//false
//引数無し
bmi(1.69,55,true);
bmi(1.69,55,false);