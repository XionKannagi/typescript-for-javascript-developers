export {}

class Person {
    public name: string;
    private age: number;
    protected nationality: string;

    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}
let taro = new Person('Taro', 23, 'JPN');

console.log(taro.name); // publicだからアクセス可能
//console.log(taro.age); // privateな変数なのでインスタンス外からアクセス不可能
console.log(taro.profile()); //インスタンス内だからアクセス可能

class Android extends Person {
    constructor(name: string, age:number, nationality:string) {
        super(name, age, nationality);
    }

    profile(): string {
        return `name: ${this.name}, nationality: ${this.nationality}`; // ageは呼べない
    }
}

let jarvis = new Android('Jarvis', 300, 'USA');
console.log(jarvis.profile());
//console.log(jarvis.nationality); // 呼べない

