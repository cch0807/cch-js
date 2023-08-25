/**
 * Property Initialization
 */

class Person {
    // 일반적인 필수값 선언 방법
    name: string;

    // 초기값 제공 선업 방법
    age: number = 23;

    // optional 값 선언 방법
    pet?: string;

    // type or undefined 선언 방법
    petAge: number | undefined;

    constructor(name: string, pet?: string) {
        this.name = name;
        this.pet = pet;
    }
}

class RouteStack {
    stack!: string[];

    constructor() {
        this.initialize();
    }

    initialize() {
        this.stack = [];
    }
}

const routeStack = new RouteStack();
console.log(routeStack);
