export {}

// stringのエイリアスとしてMojiretsuを指定した。　
type Mojiretsu = string;


const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';


const example1 = {
    name: 'Ham',
    age: 43
};

type Profile = {
    name: string,
    age: number
};

/* 型のエイリアスProfileを指定可能
const example2: {name: string, age: number} = {
    name: 'Ham',
    age: 43
};*/
const example2: Profile = {
    name: 'Ham',
    age: 43
};

// example1オブジェクトの型を元にエイリアスを作成することもできる。
type Profile2 = typeof example1; 