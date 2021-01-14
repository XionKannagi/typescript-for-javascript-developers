export {}

// * owner
//  * 所有者
//  * 初期化時に設定できる 
//  * 途中で変更できない。
//  *  参照できる。
// * secretNJumber
//  * 個人番号
//  * 初期化時に設定できる。
//  * 途中変更できる。
//  * 参照できない。

class MyNumberCard {
    private _owner: string;
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    get owner() {
        return this._owner;
    }

    set secretNumber(secretNumber: number) {
        this._secretNumber = secretNumber;
    }

    debugPrint() {
        return `secretNumber: ${this._secretNumber}`;
    }
    
}

let card = new MyNumberCard('はむさbん', 123456);
console.log(card.owner);
//card.owner = 'Ham-san'

//card._scretNumber; 
console.log(card.debugPrint());
card.secretNumber = 111111;
console.log(card.debugPrint());
console.log(card.secretNumber);



