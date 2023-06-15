/**
 * Object / 객체
 */

// key : vale pair
let yuJin = {
    name: "안유진",
    group: "아이브",
    dance: function () {
        return `${this.name} start`;
    },
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin["name"]);
console.log(yuJin.group);
console.log(yuJin.dance());

const key = "name";

console.log(yuJin[key]);

const nameKey = "name";
const nameValue = "안유진";

const groupKey = "group";
const groupValue = "아이브";

const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function () {
        return `${this.name} start`;
    },
};

console.log(yuJin2);

yuJin2["group"] = "newJeans";
console.log(yuJin2);

yuJin2["englishName"] = "An Yu Jin";
console.log(yuJin2);

delete yuJin2["englishName"];
console.log(yuJin2);
/**
 * 객체의 특징
 *
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const wonYoung = {
    name: "장원영",
    group: "아이브",
};

console.log(wonYoung);

// wonYoung = {}; // error 발생 ( 객체 자체를 변경하는 경우 )

wonYoung["group"] = "newJeans";
console.log(wonYoung);

/**
 * 모든 key 값 다 가져오기
 */

console.log(Object.keys(wonYoung));

/**
 * 모든 value 값 다 가져오기
 */
console.log(Object.values(wonYoung));

/**
 * 객체 간단하게 만드는 방법
 */
const name = "안유진";

const yuJin3 = {
    name,
};

console.log(yuJin3);
