export {}

let name: any = 'Ham';

//let length = name.length as number; // 型アサーション
let length = (name as string).length; //こっちの方がベター
//let length = (<string>name).length // jsxと記法がにているため非推奨 

//length = 'foo';