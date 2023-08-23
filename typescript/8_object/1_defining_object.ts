/**
 * Object
 */
const cch = {
    name: '최창현',
    age: 28,
};

interface IPerson {
    name: string;
    age: number;
}

type TPerson = {
    name: string;
    age: number;
};

const iPerson: IPerson = {
    name: '아이유',
    age: 30,
};

const tPerson: TPerson = {
    name: '유인나',
    age: 30,
};

iPerson.name;
tPerson.name;
