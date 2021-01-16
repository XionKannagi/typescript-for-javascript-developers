export {};


type MyExclude<T, U> = T extends U ? never : T;
type DebugType = () => void;
type SomeType = string | number | DebugType;

// 特定の型を除外したtypeを作りたい時はExcludeを利用する。
type FuntionType = Exclude<SomeType, string | number>;
type nonFunctionType = Exclude<SomeType, DebugType>;
type TypeExcludingFunction = Exclude<SomeType, Function>; // Functionは関数型の総称として使える。全関数を除外できる。
type MyExcludeType = MyExclude<SomeType, string | number>;


// 特定の型のみを利用したtypeを作りたいときはExtractを利用する。
type FunctionTypeByExtract = Extract<SomeType, DebugType>;
type nonFunctionTypeByExtract = Extract<SomeType, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeType, Function>;


// nullやundefinedに対する制約をしたい時
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>; // nullとundfinedを除外できる

