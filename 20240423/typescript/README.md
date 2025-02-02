# 타입 스크립트

## javascript에서 타입 검사가 추가된 확장 언어라고 보시면 됩니다.
```js
const a = 1;
const b = "2";
const c = [];
```

## typescript는 javascript의 슈퍼셋(상위 확장)
> typescript는 javascript와 다르게 런타임 환경이 존재하지 않는다.
> 컴파일러가 존재(컴파일 언어)
> typescript -> javascript

> 코드 실행은 자바스크립트로
> 자바스크립트로 코드를 작성하면 실행중에 오류를 발견할 수 있고
> 안정적인 코드를 작성하는데 시간이 오래 걸릴 수 있다.
> 우리가 코드를 의도에 맞게 작성하는 시간이 오래걸림
> 코드 작성단계에서 의도에 맞지 않게 코드를 작성한 경우에도 오류를 표시

## typescript를 쓰면 javascript로 작업할 때 보다 개발에서 생기는 이슈 에러를 사전에 방지할 수 있다.
> javascript 코드의 품질과 개발의 생산성을 좋게 만들어준다.

```js
const click = () => {
    console.log(type);
}
click();
```

```ts
const click = () => {
    console.log(type);
}
click();
```

### 타입 스크립트 문법

[예약어] [변수명] = [초기값];
```js
let num = 20;
const str = "javascript";
const nan = NaN;
const _null = null;
const bool = true;
const _undefined = undefined;

const obj = {};
const arr = [];

const fn = (a : any) => {
    console.log(a);
}

```
[예약어] [변수명] : [타입명] = [초기값];
타입 스크립트에게 타입을 알려줘서 추론해라
타입을 알려주지 않으면 any 타입 뭐든 가능한 타입으로 인식함
```ts
let num : number = 20;
const str : string = "typescript";
const nan : number = NaN;
const _null : null = null;
const bool : boolean = true;
const _undefined : undefined = undefined;

const obj : object = {};
const arr : string[] = ["1","2","3"];

const fn = (a : number, b : number) => {
    console.log(a = b);
}

// any : 어떤 타입이든 할당할 수 있다. 되도록 남발 하면 안됨
// 코드의 안정성을 향상 시키기 위해서인데 보장이 되지 않는다.
const _any : any == "123";
// any 사용해야 할 경우가 가끔 생기는데
// 패키지를 설치 받으면 다른 사람이 작성한 코드를 받는다는 얘기
// 그 패키지가 타입 지정이 되어 있지 않다. 패키지의 타입도 설치를 받아야 하는데
// 타입을 지정 해줄 수가 없다. any를 사용하자, 그 사람 패키지를 우리가 업데이트 할 건 아니기 때문에

// 어떤 타입이든 할당할 수 있는 타입
// unknown
// 안정성을 좀 더 보장
// unknown 어떤 타입이든 할당은 가능하지만 조건문 검사하고 나한테 알려주고 써.
const _unknown : unknown = "";
if(typeof _unknown === "string")
console.log(_unknown.length); // 길이 확인
```

### 타입스크립트를 자바스크립트로 변환

### typescript의 json도 따로 설치를 해서 컴파일 옵션을 설정한다.

### typescript 설치

```sh
# 설치
npm install typescript
npm i typescript
# 제거
npm uninstall typescript

# 설치가 잘 되어 있는지 버전을 확인
# npm 실행할 때 사용
# tsc 타입 스크립트 명령어
npx tsc --version
```

### tsc 컴파일 진행

### tsconfig.json
> 컴파일을 진행할 때 검사의 속성이나 파일의 경로 속성을 정의하는 json파일


```sh
npx tsc --init
```


### tsconfig.json 설정
- "include": 가져와서 진행할 폴더 지정
- "exclude": 제외할 폴더 지정 기본값으로 node_modules은 지정되어있다.

compoilerOptions 속성에 포함
- "target" : 변환파일의 es 버전 ES5로 만들거냐? ES6로 만든거냐 ?
- "outDir" : 변환된 파일을 내보낼 경로를 지정

### 컴파일

```sh
# 컴파일 진행
npx tsc
```
