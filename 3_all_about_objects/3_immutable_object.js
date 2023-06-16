/**
 * Immutable Object
 */

const yuJin = {
    name: "안유진",
    year: 2003,

    get age() {
        return new Date().getFullYear - year;
    },

    set age(age) {
        this.year = new Date().getFullYear - age;
    },
};

console.log(yuJin);

/**
 * Extensible
 *
 * 추가는 불가
 * 삭제는 가능
 */

console.log(Object.isExtensible(yuJin));

yuJin["position"] = "vocal";
console.log(yuJin);

Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin));

yuJin["groupName"] = "아이브";
console.log(yuJin);

delete yuJin["position"];
console.log(yuJin);

/**
 * Seal
 */

const yuJin2 = {
    name: "안유진",
    year: 2003,

    get age() {
        return new Date().getFullYear - year;
    },

    set age(age) {
        this.year = new Date().getFullYear - age;
    },
};

console.log(yuJin2);

console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2);

console.log(Object.isSealed(yuJin2));

yuJin2["groupName"] = "아이브"; // sealed 상태에서 추가 x
console.log(yuJin2);

delete yuJin2["name"]; // sealed 상태에서 삭제 x
console.log(yuJin2);

Object.defineProperty(yuJin2, "name", {
    value: "cch",
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));

Object.defineProperty(yuJin2, "name", {
    writable: false,
}); // sealed 상태에서도 property attribute 변경이 가능

console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));

/**
 * Freezed
 *
 * 읽기 외에 모든 기능을 불가능하게 만듬
 */

const yuJin3 = {
    name: "안유진",
    year: 2003,

    get age() {
        return new Date().getFullYear() - year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    },
};

console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3["groupName"] = "아이브";
console.log(yuJin3);

// Object.defineProperty(yuJin3, "name", {
//     value: "cch",
// }); // error
console.log(Object.getOwnPropertyDescriptor(yuJin3, "name"));

const yuJin4 = {
    name: "안유진",
    year: 2003,
    wonYoung: {
        name: "장원영",
        year: 2002,
    },
};

Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4)); // true
console.log(Object.isFrozen(yuJin4.wonYoung)); // false

/**
 * 상위 object를 freeze 해도 하위 object 까지 freeze 되지 않음
 */
