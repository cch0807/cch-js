/**
 * Intersection
 *
 * And
 */

interface Human {
    name: string;
    age: number;
}

interface Contacts {
    phone: string;
    address: string;
}

// 모든 property를 포함하는 새로운 property가 생긴다
type HumanAndContacts = Human & Contacts;

let HumanAndContacts: HumanAndContacts = {
    name: '최창현',
    age: 27,
    phone: '01012345678',
    address: 'seoul',
};

// premitive type을 intersection하면 never 타입이 된다.
type NumberAndString = number & string;

// let numberAndString: NumberAndString = never;
