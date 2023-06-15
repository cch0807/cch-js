/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10/ 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */

console.log((((2 * 10) / 2) % 3).toString());

/**
 * Dry
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate() {
    console.log((((2 * 10) / 2) % 3).toString());
}

// calculate();

function calculate(number) {
    console.log((((number * 10) / 2) % 3).toString());
}
/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고한다.
 * 실제 입력하는 값은 argument라고 한다.
 */
calculate(4);
calculate(5);

function multiply(x, y) {
    console.log(x * y);
}
multiply(4, 2);

function multiply(x, y = 10) {
    console.log(x * y);
}
multiply(2, 4); // x = 2, y = 4
multiply(2); // x = 2, y = 10

/**
 * return 받기
 */
console.log("---------------");
function multiply(x, y) {
    result = x * y;
    return result;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(2, 10);
console.log(result2);
console.log("---------------");

/**
 * Arrow 함수
 */
const multiply2 = (x, y) => {
    return x * y;
};

console.log(multiply2(2, 4));
console.log(multiply2(5, 4));
console.log("---------------");

const multiply3 = (x, y) => x * y;
console.log(multiply3(2, 4));
console.log(multiply3(5, 4));
console.log("---------------");

const multiply4 = (x) => x * 2;
console.log(multiply4(2));
console.log("---------------");

const multiply5 = (x) => (y) => (z) => `x: ${x} y: ${y}, z:${z}`;
console.log(multiply5(2)(5)(10));

function multiply6(x) {
    return function (y) {
        return function (z) {
            return `x: ${x} y: ${y}, z:${z}`;
        };
    };
}

console.log(multiply6(2)(5)(10));
console.log("---------------");

const multiplyTwo = function (x, y) {
    return x * y;
};

console.log(multiplyTwo(4, 5));
console.log("---------------");

const multiplyThree = function (x, y, z) {
    console.log(arguments);
    console.log(arguments[0]); // x
    console.log(arguments[1]); // y
    console.log(arguments[2]); // z
    return x * y * z;
};

console.log(multiplyThree(4, 5, 6));

const multiplyAll = function (...arguments) {
    console.log(arguments);
    return Object.values(arguments).reduce((a, b) => a * b, 1);
};

console.log(multiplyAll(1, 2, 3, 4, 5));

// immediately invoked function
(function (x, y) {
    console.log(x * y);
})(4, 5);

console.log(typeof multiply);
console.log(multiply instanceof Object);
