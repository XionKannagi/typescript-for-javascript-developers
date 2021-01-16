export {};

// Record<K, T> K: Union Type, T: Generics Typeで指定する。
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

type Covid19InfectionInfo = {
    kanji_name: string,
    confirmed_case: number
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
    Tokyo: { kanji_name: '東京', confirmed_case: 1960 },
    Chiba: { kanji_name: '千葉', confirmed_case: 249 },
    Tottori: { kanji_name: '鳥取', confirmed_case: 2 },
    //Shiga: { kanji_name: '滋賀' , confirmed_case: true } //　型制約される
    Shiga: { kanji_name: '滋賀', confirmed_case: 13 }
};




