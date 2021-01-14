export {}

interface Profile {
    underTwenty: boolean,
    [index: string]: string | number | boolean ; // Index Signaturesで許容するプロパティの型を指定しておく
}
let profile: Profile = {name: 'Ham', underTwenty: false}; // underTwentyプロパティは必須の項目なので初期化が必要

// How to write index signatures
// { [ index: typeForIndex ]: typeForIndex }
profile.age = 43;
profile.nationarity = 'Japanese';