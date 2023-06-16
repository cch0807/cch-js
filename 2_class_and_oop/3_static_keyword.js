/**
 * Static Keyword
 *
 * static은 instance에 귀속되지 않는다.
 */

class IdolModel {
    name;
    year;
    static groupName = "newJeans";

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static returnGroupName() {
        return "newJeans";
    }
}

const minGe = new IdolModel("minGe", 2003);
console.log(minGe);

console.log(IdolModel.groupName);
console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 */

class IdolModel2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object) {
        return new IdolModel(object.name, object.year);
    }

    static fromList(list) {
        return new IdolModel(list[0], list[1]);
    }
}

const minGe2 = IdolModel2.fromObject({ name: "민지", year: 2002 });
console.log(minGe2);

const haeRin = IdolModel2.fromList(["haerin", 2004]);
console.log(haeRin);
