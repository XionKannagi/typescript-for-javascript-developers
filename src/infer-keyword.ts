export {};

function add(a: number, b: number) {
    return a + b;
}

console.log(add(1,2));

type ReturnTypeFromAdd = ReturnType<typeof add>;
// inferは条件の一部としてGenerics型を指定できる。
// アロー関数の戻り値の型についてその後の型として使う（Genericsのように）
type MyReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
) => infer R 
    ? R 
    : any;