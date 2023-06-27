/**
 * Union Basics
 *
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법 중 하나이다.
 */

type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '뉴진스';
stringOrBooleanType = true;

// stringOrBooleanType = undefined; // error

type StrBoolNullType = string | boolean | null;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL'

/**
 * 리스트의 union
 */
// string으로 구성된 리스트 또는 boolean으로 구성된 리스트 (혼합 불가)
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = ['민지', '해린', '다니엘'];

strListOrBooleanList = [true, false, false, true];

// string 또는 number로 구성된 리스트 (혼합 가능)
type StrOrNumberList = (string | number)[];

let stringOrNumberList = [1, 2, 3, '해린', '다니엘'];

stringOrNumberList = ['해린', '다니엘'];
stringOrNumberList = [1, 2, 3];

/**
 * Interface로 사용하는 union
 */

interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
    name: '최창현',
    age: 27,
    address: '대한민국',
};

console.log(animalOrHuman);

animalOrHuman = {
    name: '오리',
    age: 9,
};

console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// console.log(animalOrHuman.address); // error

let animalOrHuman2:
    | {
          name: string;
          age: number;
      }
    | {
          name: string;
          age: number;
          address: string;
      } = {
    name: '최창현',
    age: 27,
    address: '대한민국',
};

console.log(animalOrHuman2);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
console.log(animalOrHuman2.address);

animalOrHuman2 = {
    name: '오리',
    age: 9,
};

// console.log(animalOrHuman2.address) // error
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는지?
type Person = {
    name: string;
    age: number;
};

type Cat = {
    breed: string;
    country: string;
};

type PersonOrCat = Person | Cat;

// union 중 한개의 타입에는 충족해야함!!!
const personOrCat: PersonOrCat = {
    name: '최창현',
    age: 32,
    breed: 'Yorkshire Terrier',
    country: '영국',
};

// union 과 intersection 집합의 개념이다. (합집합)
