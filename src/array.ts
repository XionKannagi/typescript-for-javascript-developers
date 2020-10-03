export {}

let numbers: number[] = [1, 2, 3];
console.log({ numbers });

// 非推奨な書き方
let numbers2: Array<number> = [1, 2, 3];
console.log({ numbers2 });

let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];
console.log({ strings2 });

let string: string[] = ['Tokyo', 'Osaka', 'Kyoto'];

let nijigenhairetsu: number[][] = [
    [50, 100],
    [150, 300]
];
console.log( { nijigenhairetsu } );

// union type(= 共用型)
let hairetsu: (string | number | boolean)[] = [1, false, 'Tokyo'];
console.log({ hairetsu });
