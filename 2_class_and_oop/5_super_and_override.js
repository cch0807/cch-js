/**
 * Super and Override
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `hello! i'm ${this.name}! `;
    }
}

class FemaleIdolModel extends IdolModel {
    part; // sing or dance

    constructor(name, year, part) {
        super(name, year);
        this.part = part;
    }

    sayHello() {
        // override function
        // return `hello~ i'm ${this.name}! my part is ${this.part} `;
        return `${super.sayHello()}`; // super 키워드로 함수 실행
    }
}

const yuJin = new FemaleIdolModel("안유진", 2003, "보컬");
console.log(yuJin);

const wonYoung = new IdolModel("장원영", 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());
