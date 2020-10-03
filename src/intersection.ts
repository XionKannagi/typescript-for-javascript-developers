export {}

type Picher1 = {
    throwingSpeed: number
};

type Batter1 = {
    battingAverage: number
}


const DaimajinSasaki: Picher1 = {
    throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
    battingAverage: 0.367
}

// Picher1 and Batter1の混合型を作る。
type TwoWayPlayer = Picher1 & Batter1

const OtaniShowhei: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.286
}