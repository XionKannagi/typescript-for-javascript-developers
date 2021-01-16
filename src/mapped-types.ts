export {};

type Profile = {
    name: string;
    age: number;
}

type PartialProfile = Partial<Profile>;
/* 内部では、mapped Typeが行われている
type Partial<T> = {
    [P in keyof T]?: T[P] | null //　keyofでリテラルの型をstringのリストで受け取り設定していく
}
 */

type Optional<T> = {
    [P in keyof T]?: T[P];
}
type OptinalProfile = Optional<Profile>;
