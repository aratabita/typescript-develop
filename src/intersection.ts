export {};

type Pitcher1 = {
    throwingSpeed: number;
}

type Batter1 = {
    battingAverage:number;
}

const DaimajinSasaki: Pitcher1 ={
    throwingSpeed:154
}

// const OchiaiHiromitsu: Batter1 ={
//     throwingSpeed:154,
//     battingAverage:0.367
// }

// type TowWayPlayer ={
//     throwingSpeed:number;
//     battingAverage:number;
// }

type TwoWayPlayer = Pitcher1 & Batter1;

const Otanishohei: TwoWayPlayer ={
    throwingSpeed:165,
    battingAverage:0.3
}