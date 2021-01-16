export {};

type Profile = {
    name: string,
    age?: number,
    zipCode: number
};

// Profileの全プロパティのオプショナル版を作くる。
type PartialType = Partial<Profile>;


// Profile2の全プロパティが必須な型にする。
type RequiredType = Required<Profile>;