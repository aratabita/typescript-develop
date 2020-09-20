export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log(typeof numberUnknown)
// タイプガード
//any型より暫定的にunknown型を使用した方が良い。
if(typeof numberUnknown === 'number'){
    let sumUnknown = numberUnknown +  10;
}
