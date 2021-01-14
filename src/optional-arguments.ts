export {}

// 引数名の後ろに？をつけるとoptionalな引数になる。
let bmi: (height: number, weight: number, printable?: boolean) => number = (
    height: number, 
    weight: number,
    printable?: boolean
    ) => {
        const bmi: number = weight / (height * height)
        if(printable) {
            console.log( {bmi} );
        } 
        return bmi;
    };

    
// bmi(身長, 体重, log出力するか？)
bmi(1.78, 86, true);
bmi(1.78, 86, false);
bmi(1.78, 86);