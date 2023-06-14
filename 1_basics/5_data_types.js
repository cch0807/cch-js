/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * Object (객체)
 * Function
 * Array
 * Object
 */


/**
 * Number 타입
 */
const age = 27;
const tempature = -10;
const pi = 3.14;

console.log(typeof(age));
console.log(typeof(tempature));
console.log(typeof(pi));

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof Infinity);
console.log(typeof nInfinity);
console.log('------------------');


/**
 * String 타입
 */
const name = '"최"창현';
console.log(name)
console.log(typeof name);

const ive = "'아이브' 안유진";
console.log(typeof ive);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 됌.
 */


const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\최창현';
console.log(backSlash);
const smallQutoation = '아이브\'최창현';
console.log(smallQutoation);

const iveWonYoung2 = `아이브 '" \\\\\\/////
장원영`;
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);
console.log('------------------');

/**
 * Boolean 타입
 */

const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('------------------');

/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log('------------------');

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화 할 때 사용
 */

let init = null;
console.log(init);
console.log(typeof init);
console.log('------------------');

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 
 * 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);
console.log('------------------');


/**
 * Object 타입
 * 
 * Map
 * 키: 벨류의 쌍으로 이루어져있다.
 * key:value
 */
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색'
};

console.log(dictionary);
console.log(typeof dictionary);

console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);
console.log('------------------');

/**
 * Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

console.log(iveMembersArray);

/** 
 * index
 * 
 * 0부터 시작
 * 1씩 올라감
*/

console.log(iveMembersArray[0]); // 안유진
console.log(iveMembersArray[1]); // 가을
console.log(iveMembersArray[5]); // 이서
iveMembersArray[0] = '공석';
console.log(iveMembersArray)
console.log(typeof iveMembersArray)
