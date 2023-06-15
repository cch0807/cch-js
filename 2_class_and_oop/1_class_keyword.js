/**
 * Class Keyword
 *
 * 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한
 * 변수와 메소드(함수)를 정의하는 일종의 틀이다.
 */
class IdolModel {
    // property
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayName() {
        return `hello, i'm ${this.name}`;
    }
}

// constructor - 생성자

// 인스턴스 생성
const yuJin = new IdolModel("안유진", 2003);

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin.year);
console.log("---------------");

const minge = new IdolModel("민지", 2002);

console.log(minge);
console.log(minge.name);
console.log(minge.year);
console.log("---------------");

console.log(yuJin.sayName());
console.log(minge.sayName());

console.log(typeof IdolModel); // class = function
console.log(typeof minge); // instance = object
