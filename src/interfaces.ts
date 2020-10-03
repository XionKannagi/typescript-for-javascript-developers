export {}


type ObjectType = {
    name: string,
    age: number
}

/* 以下エイリアスで書いた場合
let object: ObjectType = {
    name: 'Ham-san',
    age: 43
};
*/

interface ObjectInterface {
    name: string,
    age: number
}

let object: ObjectInterface = {
    name: 'Ham-san',
    age: 43
};

