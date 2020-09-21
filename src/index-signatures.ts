export {};

interface Profile {
    underTwenty:boolean;
    [index:string]: string| number|boolean;
}

let profile: Profile = {name:'Ham', underTwenty:false};

//How to write index signature
// {[idnex:typeForIndex]: typeForValue}

profile.name='Ham';
profile.age = 43;
profile.natinality = 'Japan';

