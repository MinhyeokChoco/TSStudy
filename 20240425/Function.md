# This가 어려운 이유

`Function` 의 역할이 너무 많기 떄문입니다.

## 일반함수로 사용
```js
function Foo(a, b){
    console.log(this) // window
    return [a, b]
}

const a = new Foo(1, 2) // [1. 2]
console.log(a);
```

## this

- this 의 뜻 (묶는다. 묶어주다)

### function 함수 이해 해야 함

```js
function Foo(a, b) {
    console.log(this)
    return [a, b]
}

const bar = {
    method: Foo,
}
bar.method(5, 6)
```

**bind**

1. 인자값이 어떤 형태인지.
// 이 메서드 혹은 함수를 호출 했을 때, 리턴타입이 무엇인지

```js
function getNumber(a) {
    return function() {
        return a + 1
    }
}

const result = getNumber(2)
const answer = result() // 3
```

## callback

여러분들은 콜백을 배울 수 없습니다.
- 목적성보다는 문법을 이해하려 해보자.

- 객체를 전달할 때 다른것도 전달하기 위해서
- 다른 코드로 인수로 넘겨줄 때
- 똑같은 내용은 안 쓰려고
- 이벤트가 일어났을 때 원하는 동작을 하기 위해서


콜백 -> 실행순서를 늦춘다.

```js
function foo() {
    console.log('hello world')
}

// 1. hi 출력한다.
// 2. foo 함수를 호출해서 hello world 출력한다.

function init(cb) {
    console.log('hi')
    cb()
}

init(foo)

// 비동기적이라던가, 이벤트적인것

```

프로그래밍을 잘한다는 것

- 정확하고 효율적이게 코드를 작성하는것

문제인식
해결방안

문제해결능력
- 대화

게시판 만드세요 ~ 했을 때 순서를 정해본다면 ?

- 게시판 형태를 먼저 구성
- 번호, 제목, 작성자, 작성일, 조회수
- 제목에는 a태그로써 링크를 넣어놓음
- 링크와 연결되어 있는 게시판 글로 넘어감
- 등록 버튼도 마지막에 있음

- list, view, write
- list
- view = 수정과 삭제 버튼이 있음
- write