/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat =
    Math.random() > 0.5
        ? {
              // 강아지
              name: '별이',
              age: 12,
          }
        : {
              // 고양이
              name: '오리',
              breed: '코리안 길냥이',
          };

dogOrCat.name;
dogOrCat.age;
dogOrCat.breed;

interface Dog {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat =
    Math.random() > 0.5
        ? {
              // 강아지
              name: '별이',
              age: 12,
          }
        : {
              // 고양이
              name: '네오',
              breed: '러시안 블루',
          };

dogOrCat2.name;
// dogOrCat2.age; // 에러 발생
// dogOrCat2.breed; // 에러 발생

if ('age' in dogOrCat2) {
    dogOrCat2;
    dogOrCat2.age;
    dogOrCat2.name;
    // dogOrCat2.breed;
} else {
    dogOrCat2;
    dogOrCat2.name;
    dogOrCat2.breed;
    // dogOrCat2.age;
}
