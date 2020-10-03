export {}


enum Months {
    January = 1 ,
    Feburary,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Months.January);
console.log(Months.December);



enum Colors {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#00FF00',
    BLUE = '#0000FF',
    BLACK = '#000000'
}

console.log(Colors.RED);

//要素を追加する。
enum Colors {
    YELLOW = '#FFFF00'
}
console.log(Colors.YELLOW);
