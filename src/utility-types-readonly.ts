export {};

type Profile = {
    name: string;
    age: number;
};

const me: Profile = {
    name: 'Ham',
    age: 43
};

me.age++; // 更新されてしまう。
console.log(me);


type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
    name: 'Shigeru',
    age: 40
};

// friend.age++ //全プロパティがreadonly属性になったため再代入はできない

// 以下が実装方法
type YomitoriSenyou<T> = {
    readonly[P in keyof T]: T[P];
}

type YomitoriSenyouData= YomitoriSenyou<Profile>;
