export {}

let name = 'Atsushi';

name = 'Ham' //再代入可能

let nickname = 'Ham' as const;
//nickname = 'Hamtaro'; //すでにHamのリテラル型で初期化されているので再代入不可能

let profile = {
    name: 'Astushi',
    height: 178
} as const;


//profile.name = 'Ham'; これで一括でRead Onlyになるネストされている小要素まで影響する
//profile.height = 180;