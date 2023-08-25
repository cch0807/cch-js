/**
 * Readonly 프로퍼티
 */

class Idol {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const yuJin = new Idol('안유진', 23);

yuJin.age = 32;
yuJin.name; // 가능
// yuJin.name = '최창현' // readonly 라서 불가능
