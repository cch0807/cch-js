/**
 * Enum
 */

/**
 * API 요청을한다.
 * 4가지 상태가 있음
 *
 * Done - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩상태
 * INITIAL- 초기 상태
 */

function runWork() {
    let state = 'INITIAL';

    try {
        state = 'LOADING';
        // 작업을 한다.

        state = 'DONE';
    } catch (e) {
        state = 'ERROR';
    } finally {
        return state;
    }
}

console.log(runWork() === 'DONE'); // true
console.log(runWork() === 'DONNE'); // false

const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWork2() {
    let state = initialState;

    try {
        state = loadingState;
        // do something.

        state = doneState;
    } catch (e) {
        state = errorState;
    } finally {
        return state;
    }
}

console.log(runWork2() === 'DONE');
console.log(runWork2() === 'DONNE');

enum State {
    DONE = 'DONE',
    INITIAL = 'INITIAL',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
}

function runWork3() {
    let state = State.INITIAL;

    try {
        state = State.LOADING;
        // 작업을 한다.

        state = State.DONE;
    } catch (e) {
        state = State.ERROR;
    } finally {
        return state;
    }
}

console.log(runWork3() === 'DONE'); // true
// console.log(runWork3() === 'DONNE'); // false
