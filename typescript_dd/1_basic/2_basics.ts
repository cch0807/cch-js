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
