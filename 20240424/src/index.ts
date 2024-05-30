interface IParson {
    name: string,
    age?: number // 물음표를 붙이면 키가 있어도 되고 없어도 된다. 라는 뜻의 ? 기호를 뒤에 붙임
}

const parson: IParson = {
    name: "이민혁",
    // age : 123
}

// class에 구조를 체크하기
// interface의 구조에 충족하는지 여부 체크
class Parson implements IParson {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}