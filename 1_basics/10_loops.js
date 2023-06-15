/**
 * Loops
 *
 * 1) for
 * 2) while
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log("i -> " + i, "|", "j -> " + j);
  }
}

// *을 이용해서 6x6의 정사각형을 출력해라
let square = "";

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    square += "*";
  }
  square += "\n";
  console.log(square);
}

/**
 * for...in
 */
const yuJin = {
  name: "안유진",
  yaer: 2003,
};

for (let key in yuJin) {
  console.log(key);
  console.log(yuJin[key]);
}

const iveMembersArray = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

for (let key in iveMembersArray) {
  console.log(key);
  console.log(iveMembersArray[key]);
  console.log(`${key}:${iveMembersArray[key]}`);
}
/**
 * for...of
 */
for (let value of iveMembersArray) {
  console.log(value);
}

/**
 * While
 */
let number = 0;

while (number < 10) {
  number++;
  console.log(number);
}
console.log("-------------");
console.log(number);

/**
 * do...while
 */

number = 0;

do {
  console.log(`${number}`);
  number++;
} while (number < 10);
console.log("-------------");

/**
 * break
 */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log("-------------");

number = 0;
while (number < 10) {
  if (number === 5) {
    break;
  }

  number++;
  console.log(number);
}
console.log("-------------");

/**
 * continue
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
console.log("-------------");

number = 0;

while (number < 10) {
  number++;
  if (number === 5) {
    continue;
  }
  console.log(number);
}
