export {}

// 呼び出し元に返らない型 = never
function error (message: string): never {
    throw new Error(message);
}

try {
    let result = error('Test');
    console.log( {result} );
} catch (error) {
    console.log( {error} );    
}

let foo: void = undefined;
//let bar: never = undefined; // nerverは値がないから値を代入できない。
let bar: never = error('only me'); // never型なので代入してもコンパイルエラーが起こらない。