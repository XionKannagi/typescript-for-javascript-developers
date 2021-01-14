export {}

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible); // undefinde
fooCompatible = barCompatible;
console.log(typeof barCompatible); // string

let fooInCompatible: string;
let barInCompatible: number = 1;

//fooInCompatible = barInCompatible //代入できない

let fooString: string;
let barString: string = "string";

fooString = barString;


let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;


let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
    age: number;
}


class Person {
    constructor(public age: number){}
}

let me: Animal;
me = new Person(43); //依存関係はないが互換性がある　※継承/実装しているか関係ない

interface Human {
    name: string;
    age: number;
}

let hamu: Human;
//hamu = new Person(43); //プロパティが一致しないのでエラーが発生する

class Hamu {
    constructor(public age: number, public name: string) {}
}

hamu = new Hamu(43, "Hamu"); //こうすれば代入可能になる