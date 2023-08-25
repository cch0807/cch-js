/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number;

type PersonType = {
    name: string;
    age: number;
};
type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
};

type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
    name: '창현',
    age: 28,
    company: '??',
    companyRegistrationNumber: 'xxxyyyyzzzz',
};

type PetType = {
    petName: string;
    petAge: number;
};

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
    // PersonType
    name: '최창현',
    age: 28,

    // CompanyType
    company: '??',
    companyRegistrationNumber: 'xxxyyyyzzz',

    // PetType
    petName: '오리',
    petAge: 8,
};
