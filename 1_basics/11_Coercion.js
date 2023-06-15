/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;
console.log(typeof age);

// 명시적
let stringAge = age.toString();

console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + ""; // number + string = string
console.log(typeof test, test);

let test2 = "98" + 2;
console.log(typeof test2, test2); // string + number = string

let test3 = "98" * 2;
console.log(typeof test3, test3); // string * number = number

let test4 = "98" - 2;
console.log(typeof test4, test4); //string - number = number

console.log("-----------------");
/**
 * 명시적 변환 몇가지 더
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof true.toString(), true.toString());
console.log(typeof Infinity.toString(), Infinity.toString());

// 숫자 타입으로 변환
console.log(typeof parseInt("0"), parseInt("0"), parseInt("0") + 1);
console.log(typeof parseFloat("0"), parseFloat("0"), parseFloat("0") + 1);
console.log(
  typeof parseFloat("0.99"),
  parseFloat("0.99"),
  parseFloat("0.99") + 1
);
console.log(typeof +"1", +"1"); // +String = number
console.log("-----------------");

/**
 * Boolean 타입으로의 변환
 */
console.log(!""); // string 이지만 값이 없어서 false
console.log(!!"x"); // string 변수에 값이 들어있으면 boolean 적으로 봤을 때 true
console.log(!!0);
console.log(!!"0");
console.log(!!"false");
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});
console.log(!![]);

/**
 * 1) 아무 글자도 없는 string
 * 2) 값이 없는 경우
 * 3) 0
 *
 * 모두 false로 반환한다.
 */
