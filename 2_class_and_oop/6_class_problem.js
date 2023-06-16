class Country {
    name;
    idolGroups;

    constructor(name, idolGroups) {
        this.name = name;
        this.idolGroups = idolGroups;
    }
}

class IdolGroup {
    name;
    members;

    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
}

class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class MaleIdol extends Idol {
    sing() {
        return `${this.name} singing!`;
    }
}

class FemaleIdol extends Idol {
    dance() {
        return `${this.name} danceing!`;
    }
}

// ive는 한국 아이돌이다
// 아이브라는 이름이 걸그룹이다.
// 아이브는 여자 아이돌이다.
const iveMembers = [
    {
        name: "안유진",
        year: 2003,
    },
    {
        name: "장원영",
        year: 2002,
    },
    {
        name: "레이",
        year: 2004,
    },
];

const ive = iveMembers.map((x) => new FemaleIdol(x.name, x.year));
console.log(ive);

const iveGroup = new IdolGroup("아이브", ive);
console.log(iveGroup);

// BTS는 한국 아이돌이다
// 방탄소년단이라는 이름의 보이그룹이다.
// BTS는 남자 아이돌이다.

const btsMembers = [
    {
        name: "지민",
        year: 1995,
    },
    {
        name: "뷔",
        year: 1995,
    },
    {
        name: "정국",
        year: 1997,
    },
];

const bts = btsMembers.map((x) => new MaleIdol(x.name, x.year));
console.log(bts);
console.log(bts[0].sing());

btsGroup = new IdolGroup("BTS", bts);
console.log(btsGroup);

const korea = new Country("korea", [iveGroup, btsGroup]);
console.log(korea); // 3 detps 이상이면 타입으로 출력

const allTogether = new Country("korea", [
    new IdolGroup(
        "아이브",
        iveMembers.map((x) => new Idol(x.name, x.year))
    ),
    new IdolGroup(
        "BTS",
        btsMembers.map((x) => new Idol(x.name, x.name))
    ),
]);

console.log(allTogether);
