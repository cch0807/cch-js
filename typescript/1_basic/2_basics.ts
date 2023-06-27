/**
 * Types
 */
let helloText: string = 'Hello';
// helloText = true;

/**
 * 7개의 타입
 */
const stringVar: string = 'String';
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(99999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */

// any - 아무 타입이나 입력 할 수 있는 타입
let anyVar: any;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown - 알 수 없는 타입
let unknownType: unknown;
unknownType = 100;
unknownType = '코드팩토리';
unknownType = true;

// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBoolean2: boolean = unknownType;
let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;

// never - 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
// let neverType: never = null;
// let neverType: never = undefind;
// let neverType: never = 'test'

/**
 * 리스트 타입
 */
const koreanGirlGroup: string[] = ['아이브', '뉴진스', '블랙핑크']; // o
// const koreanGirlGroup: string[] = ['아이브', '뉴진스', '블랙핑크', 123]; // x
const booleanList: boolean[] = [true, false];
