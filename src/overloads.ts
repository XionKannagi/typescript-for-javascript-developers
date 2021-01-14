export {}

// シグネチャーを設定
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
    if(typeof value === 'number') {
        return value * 2;
    } else {
        return value + value;
    }
    //いらない
    // else if(typeof value === 'string') {
    //     
    // }　else {
    //     throw 'invalid type of arguments.';
    // }
}

// function double(value: string): string {
//     return value + value;
// }

console.log(double(100));
console.log(double('Go '));
//console.log(double(true)); // シグネチャーを設定しているので、この型以外は弾かれる。
