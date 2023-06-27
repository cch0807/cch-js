/**
 * Type and interface
 *
 * Type
 *
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'male' | 'female';

const stringVar1: string = 'test';
const stringVar2: NewStringType = 'test';

const yuJin_1: {
    name: string;
    year: number;
} = {
    name: '안유진',
    year: 2002,
};
type IdolType = {
    name: string;
    year: number;
};

const yuJin_2: IdolType = {
    name: '안유진',
    year: 2002,
};

/**
 * Interface
 */
interface IdolInterface {
    name: string;
    year: number;
}

const yuJin_3: IdolInterface = {
    name: '안유진',
    year: 2002,
};

interface IdolIT {
    name: NewStringType;
    year: NewNumberType;
}

const yuJin_4: IdolIT = {
    name: '안유진',
    year: 2002,
};

interface IdolOptional {
    name: string;
    year?: number;
}

const yuJin_5: IdolOptional = {
    name: '안유진',
    year: 2002,
};
