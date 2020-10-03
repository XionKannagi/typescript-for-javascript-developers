export {}

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// 型が不明なので演算不能
//let sumUnknown = numberUnknown + 10;

//型を取得しnumber型であることを保証すれば実行できる。= Type Guard実装
//このようにすることで暫定的にunknown型と定義した値を安全に処理できる。= 型安全 
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10;
}
