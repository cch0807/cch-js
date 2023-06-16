/**
 * getter and setter
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * getter의 역할
     *
     * 1) 데이터를 가공해서 새로운 데이터를 반환
     * 2) private한 값을 반환
     */

    get nameAndYear() {
        return `${this.name}-${this.year}`;
    }

    set setName(name) {
        this.name = name;
    }
}

const minGe = new IdolModel("민지", 2003);
console.log(minGe);
console.log(minGe.nameAndYear);

minGe.setName = "minge";
console.log(minGe);

class IdolModel2 {
    #name;
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const minGe2 = new IdolModel2("민지", 2002);
console.log(minGe2);
console.log(minGe2.name); // undefined
console.log(minGe2.name);

minGe2.name = "minge";
console.log(minGe2.name);
