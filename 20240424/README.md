
```sh
# package.json 초기화
npm init -y

# typescript 설치
npm i typescript

# tsconfig.json 초기화
npx tsc --init
```

# interface
> 객체의 구조를 정의하는 타입


```ts
interface IParson { // I 대문자에 P 이름 첫 시작 대문자
    name : string, // 키 : 문자형
    age : number, // 키 : 숫자형
}

const parson : IParson = {
    name : "이민혁"
    age : 20
}
```