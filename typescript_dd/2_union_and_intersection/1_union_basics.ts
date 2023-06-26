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
 * 리스트의 유니언
 */
// string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string;
