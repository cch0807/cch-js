/**
 * Closure
 *
 * A closure is the combination of a function and the lexical
 * environment within which that function was declared
 *
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 *
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다."
 */

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber();
}

// console.log(number);

// console.log(getNumber());

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();

console.log(runner);
console.log(runner());

/**
 * 1) data cashing
 */

function cacheFunction(numNumber) {
    // 아래 계산은 매우 오래걸린다는 가정을 했을 때
    var number = 10 * 10;

    function innerCacheFunction(numNumber) {
        return number * numNumber;
    }

    return innerCacheFunction;
}

const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

/**
 * 2) data translation
 */

function cacheFunction2() {
    var number = 99;

    function increment() {
        number++;
        return number;
    }
    return increment;
}

const runner3 = cacheFunction2();
console.log(runner3()); // 100
console.log(runner3()); // 101

/**
 * 3) information hiding
 */

function Idol(name, year) {
    this.name = name;
    var _year = year;

    this.sayNameAndYear = function () {
        return `name = ${this.name}, year = ${_year}`;
    };
}

const yuJin = new Idol("안유진", 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
console.log(yuJin._year); // undefined (객체 property로 access 불가)
