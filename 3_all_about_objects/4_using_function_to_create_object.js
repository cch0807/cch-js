/**
 * Using function to create objects
 */
function IdolModel(name, year) {
    this.name = name;
    this.year = year;

    // return {}; // {} 반환 시 new keyword 에 사용할 순 있지만 생성자 object를 사용할 수 없음

    this.dance = function () {
        return `${this.name} dancing!!`;
    };
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
console.log(yuJin.dance());
