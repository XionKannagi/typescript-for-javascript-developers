export {}

// union typesだと型の順番は指定できない。
//let profile:(string| number)[] = ['Ham', 43];
//profile = [43, 'Ham']; // ←こいつも許容されてしまう。

let profile: [string, number] =  ['Ham', 43];
// profile = [43, 'Ham']; // ←代入できなくなる。

