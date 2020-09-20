export {};

const nextYearSarary = (currentSalary:number,rate:number = 1.1) =>{
    return currentSalary * rate;
}

console.log(nextYearSarary(1000));