export {};

type DetailedProfile = {
    name: string,
    height: number,
    weight: number
};

// DetailedProfileの特定のプロパティのみ利用した型をPickで作る。
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

// DetailedProfileの特定のプロパティを除外した型をOmitで作る。
type SmallProfile = Omit<DetailedProfile, 'height'>;

// Omitの実装
// ExcluedでDetailedProfileのプロパティのUnion型から指定した型を除外してPickしている
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>; 
type MySmallProfile = MyOmit<DetailedProfile, 'height'>;

