export {}

let profile: {name: string, age: number | null}  = {
    name: 'Ham',
    age: null //tsconfig.jsonの"strictNullChecks": falseにするとnullが設定可能になるが基本はユニオン型で対応する
};