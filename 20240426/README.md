# 타입 어서션
# 타입 앨리어스
# 타입 클래스 수정자
# 제네릭

## 타입 어서션

> document.querySelector("") as "타입이다."
```ts
const input = document.querySelector("input") as HTMLinputElement
```
[변수명] = [값] as [타입명] : 타입 어서션의 문법
> 타입의 어서션은 구체적인 객체의 타입을 알려준다. 혹은 객체의 타입을 명시한다.

> typescript
```sh
npm init -y # package.json 초기화
npm i typescript
npx tsc --init # tsconfig.json
```

## 타입 앨리어스
> 타입지정에 별명을 붙여준다.
> 유저의 회원가입 데이터 구조의 별명
> interface는 기능이나 사물의 객체의 구조를 정의할 때
> type은 데이터의 형태를 정의할 때

```ts
// type userLogin : string
type userLogin = {
    uid : string,
    upw : string,
}
```

## class

```ts
class User {
    private name : string;
    // 이 name은 객체를 생성하고 .표기법이나 []대괄호 표기법으로 접근이 불가능하다.
    // 직접 참조 할 수 없게 만든다.
    // 다른 작업자나 아니면 혹여나 의도치 않게 변경될 경우를 고려하여 직접 참조 혹은 수정이 불가능하다.
    // 객체 안에서 수정이 가능하다.

    public age : number;
    // 이 age는 객체도 참조 수정이 가능하고 .표기법 혹은 []대괄호 표기법으로 접근이 가능하다.
    // 어느 manager까지 우리가 유저를 관리하거나 하다보면 값을 풀어야 하는 상황이 생기기도 한다.
    // 객체지향적으로 프로그래밍을 하다가 어쩔 수 없을 때

    // get set
    getName () {
        // private 속성은 객체 안에서 메서드로 this를 참조하여 호출할 수 있다.
        return this.name
    }

    setName(_name) {
        // private 속성에 접근해서 name의 값을 수정
        this.name = _name;
    }
}
```

## 제네릭 타입
> 호출 시에 동적인 타입을 주고 싶은 경우
> <T> : 꺽쇠가 양쪽으로 있는 표기법을 제네릭 타입 문법
> 타입을 전달한다.

```ts
class Product<A> {
    private name : A; 
}

// 제네릭을 사용하는 목적은 코드의 재사용셩을 높이기 위해서
const product = Product<number>();
const product = Product<string>();

// 제네릭 타입 문법 안에 알파벳은
// T : 타입의 축약어
// E : 에러의 타입
// R : 반환 타입
function name<T, R>( name : T ) : R {
    // 비동기
    const a : T = {

    }
    return true;
}

name<string, number>();
const user : userLogin = {
    uid,
    upw
}
// DTO : 데이터를 전송할 때 구조를 정의한다. (데이터 전송 객체)
name<userLogin, boolean>(user);
// 가위 바위 보는 상수가 3개 필요하고
// 프로그래밍적 사고 -> 객체 지향적 사고
//
// 객체를 나눠서 기능 사물 타입을 정의하는 것까지. (검사)
// 유저 로그인 관련 -> 유저 매니저 -> 유저 로그인 -> 로그인 로직을 나눌 것.
// 전략 패턴
```