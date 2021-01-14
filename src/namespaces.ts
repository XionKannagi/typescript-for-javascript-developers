export{}

namespace Japanese {
    export class Person {  // 外部からアクセスさせるためにexportを指定する。
        constructor(public name: string) {}
    }

    // namespaceの中にも作れる
    export namespace Tokyo {
        export class Person {
            constructor(public name: string, public lastName: string) {}
        }
    }

    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

namespace English {
    export class Person {
        constructor(
            public name: string, 
            public middleName: string, 
            public lastName: string
        ) {}    
    }
}


let me = new Japanese.Person('はむさん');
console.log(me);

let osaka = new Japanese.Osaka.Person('はむやん');
console.log(osaka);

let michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
 
