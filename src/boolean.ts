export {};

let name = 'TypeScript';

let isFinished: boolean = true;
isFinished = false;
//isFinished = 1; //← 片違いでエラー
console.log({ isFinished });