/**
 * Using function to create objects
 */
function IdolModel(name, year) {
    // console.log(this);
    // console.log(new.target);

    if (!new.target) {
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    // return {}; // {} 반환 시 new keyword 에 사용할 순 있지만 생성자 object를 사용할 수 없음

    this.dance = function () {
        return `${this.name} dancing!!`;
    };
}

const yuJin = new IdolModel("안유진", 2003); // new keyword를 사용했기 때문에 IdolModel 의 instance로 mapping
console.log(yuJin);
// console.log(yuJin.dance());

const yuJin2 = IdolModel("안유진", 2003); // new keyword를 사용하지 않았기 때문에 global instance로 mapping
console.log(yuJin2); // 생성자 함수이기 때문에 new keyword가 없으면 undefined 반환
// console.log(global.name);
// console.log(global.year);

const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

const yuJin3 = IdolModelArrow("안유진", 2003);
console.log(yuJin3);
