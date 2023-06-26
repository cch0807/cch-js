/**
 * Casting
 *
 * typescript에서 casting을 하면 js에서는 적용이 안된다.
 */
const cch = 'cch';
const testNumber = 3;

console.log(cch.toUpperCase());
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase());
console.log(sampleNumber as string);

console.log(typeof (sampleNumber as string));

let number = 5;

console.log((number as any).toUpperCase());
