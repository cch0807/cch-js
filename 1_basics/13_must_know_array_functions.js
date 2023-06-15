/**
 * Array Function
 */

let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

console.log(iveMembers);

// push()
// array 의 마지막 index 에 value를 추가
console.log(iveMembers.push("cch")); // 추가된 value까지 포함한 array 길이 반환
console.log(iveMembers);
console.log("---------------");

// pop()
console.log(iveMembers.pop()); // array 에서 삭제되는 value 반환
console.log(iveMembers);
console.log("---------------");

// shift()
console.log(iveMembers.shift()); // array의 첫 번째 값 반환
console.log(iveMembers);
console.log("---------------");

// unshift()
// array 의 첫 번째 index 에 value 추가
console.log(iveMembers.unshift("안유진"));
console.log(iveMembers);
console.log("---------------");

console.log(iveMembers.splice(0, 3)); // (start, end) start에서 end 만큼의 index에 있는 value 삭제 및 삭제된 value 반환
console.log(iveMembers);
console.log("---------------");

iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

console.log(iveMembers);

// concat()
// array의 마지막 index에 value를 추가하는것은 push와 똑같지만
// push 와 다르게 새로운 array 를 만들어서 반환

console.log(iveMembers.concat("cch")); // 새로운 array 를 만들어서 반환
console.log(iveMembers);

// slice()
// splice 다르게 새로운 array 를 만들어서 반환
console.log(iveMembers.slice(0, 2));
console.log(iveMembers);
console.log("---------------");

// spread operator
// 새로운 array 를 만들어서 반환
let iveMembers2 = [...iveMembers];
console.log(iveMembers2);

let ivemembers3 = [iveMembers];
console.log(ivemembers3);
console.log("---------------");

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers === iveMembers4); // true

console.log([...iveMembers] === iveMembers); // false
console.log("---------------");

// join()
// ,(comma) 를 기준
console.log(typeof iveMembers.join());
console.log(iveMembers.join());
console.log(iveMembers.join("/"));
console.log(iveMembers.join(", "));
console.log("---------------");

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

// a, b 를 비교했을 때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0 보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0 보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);

// map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(
    iveMembers.map((x) => {
        if (x === "안유진") {
            return `ive: ${x}`;
        } else {
            return x;
        }
    })
);
console.log(iveMembers);

// filter()
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x === 8));
console.log(numbers.filter((x) => x % 2 === 0));

// find()
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers);
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));

/**
 * reduce()
 * reduce(콜백함수, 초기값)
 * 초기값의 default 값은 0
 *
 * numbers = [1, 8, 7, 6, 3];
 * numbers.reduce((p, n) => p + n, 0);
 * 1. 초기값인 0이 p에 입력된다.
 * 2. numbers 어레이의 첫 번째 값인 1이 n에 입력된다.
 * 3. p + n 즉, 0 + 1의 결과값인 1이 반환된다.
 * 4. 3에서 반환한 값(1)이 p에 입력된다.
 * 5. 어레이의 두 번째 값인 8이 n에 입력된다.
 * 6. p + n 즉, 1 + 8의 결과값인 9가 반환된다.
 * 7. 6에서 반환한 값(9)가 p에 입력된다.
 * 8. numbers 리스트의 모든 값들을 다 순회할 때 까지 반복
 * 결국 모든 값을 다 더한 25가 반환된다.
 */
