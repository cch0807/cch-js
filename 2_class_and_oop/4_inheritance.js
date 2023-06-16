/**
 * inheritance
 *
 * 상속(inheritance)은 객체들 간의 관계를 구축하는 방법이다.
 * 수퍼클래스, 또는 부모 클래스 등의 기존이 클래스로부터
 * 속성과 동작을 상속받을 수 있다.
 *
 * 부모/슈퍼 클래스 (parent/super class)
 * 자식 클래스 (child class)
 *
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance() {
        return `dancing!!`;
    }
}

class MaleIdolModel extends IdolModel {
    singing() {
        return `singing!!`;
    }
}

const minGe = new FemaleIdolModel("민지", 2002);
console.log(minGe);
console.log(minGe.dance());

const jiMin = new MaleIdolModel("지민", 1995);
console.log(jiMin);
console.log(jiMin.singing());

const cch = new IdolModel("cch", 1995);
console.log(cch);

console.log(minGe instanceof IdolModel); // true
console.log(minGe instanceof FemaleIdolModel); // true
console.log(minGe instanceof MaleIdolModel); // false
