// function Counter() {
//     let index = 0;

//     function increment() {
//         index++;
//         console.log(index);
//     }

//     function decrement() {
//         index--;
//         console.log(index);
//     }

//     return { increment, decrement }
// }
// // tip 객체를 구조 분해 할당할때 키로 값을 할당받았는데 변수에
// // increment로 키를 구조분해 할당하고 : 뒤의 선언한 변수명에 값을 할당해준다.  _increment 이름 지어준 변수
// const { increment: _increment, decrement } = Counter();
// // 클로저 : 데이터를 요소 개인 변수로 줄수 있다.
// // 반환된 메서드들로만 이 요소의 개인 변수를 참조하거나 할당할수 있다.

// _increment();
// _increment();
// _increment();
// _increment();
// _increment();
// _increment();
// decrement();
// decrement();
// decrement();
// decrement();

// 클로저가 없는경우
// let index = 0;
// function Counter() {
//     return function increment() {
//         index++;
//         console.log(index);
//     }
// }
// debugger
// const _increment = Counter();
// debugger
// _increment();
// debugger

// 클로저 있음
// function Counter(index) {
//     return function increment() {
//         index++;
//         console.log(index);
//     }
// }
// debugger
// const _increment = Counter(0);
// const _increment2 = Counter(0);
// debugger
// _increment();
// debugger

// 재사용 가능한 클로저 함수
// 카운터를 생상할때
const createCounter = () => {
    // 상태 변수
    let index = 0;

    const increment = () => {
        index++;
        console.log(index);
    }
    const decrement = () => {
        index--;
        console.log(index);
    }
    return { increment, decrement };
}

// 카운터 하나 생성
// 요소 변수와 메서드를 같이 생성.
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();

// 두번째 카운터 생성
const counter2 = createCounter();

// 빌드업
// react에서 상태 변수를 useState()