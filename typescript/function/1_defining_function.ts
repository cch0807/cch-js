/**
 * defining function
 */

// bad example
// function printName(name) {
//     console.log(name);
// }

function printName(name: string) {
    console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
    return `${person1} & ${person2}`;
}

console.log(returnTwoCouples('you', 'me'));
// returnTwoCouples(0, 1); // error
// returnTwoCouples('you') // error
// returnTwoCouples('you', 'me', 'our') // error

/**
 * Optional Parameter
 */
function multiplyOrReturn(x: number, y?: number) {
    if (y) {
        return x * y;
    } else {
        return x;
    }
}

console.log(multiplyOrReturn(10, 20));
console.log(multiplyOrReturn(10));

function multiplyOrReturn2(x: number, y: number = 20) {
    return x * y;
}

console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]) {
    return args.map((x) => `너무조아 ${x}`);
}

console.log(getInfiniteParameters('뉴진스', '아이브', '블랙핑크'));
// console.log(getInfiniteParameters(1, 2, 3)); // number type error

/**
 * Return Type
 */
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

addTwoNumbers(10, 20);

function randomNumber() {
    return Math.random() > 0.5 ? 10 : '랜덤';
}

randomNumber();

function subtractTwoNumbers(x: number, y: number): number {
    return x - y;
}

const subtractTwoNumberArrow = (x: number, y: number): number => {
    return x - y;
};

/**
 * 특수 반환 타입
 *
 * void / never
 */

function doNotReturn(): void {
    console.log('저는 반환을 하지 않습니다');

    // return 3; // error
    // return;
}

doNotReturn();

function throwError(): never {
    // never 타입을 반환하려면 함수가 끝나지 않는 상태를 만들어야함
    while (true) {}
}

function throwError2(): never {
    throw Error();
}
