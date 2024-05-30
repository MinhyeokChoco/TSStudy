const input = document.querySelector(".uid") as HTMLInputElement;
const input2 = document.querySelector(".upw") as HTMLInputElement;
const inputBtn = document.querySelector(".uid-btn") as HTMLButtonElement;

// HTMLInputElement, HTMLFormElement 두가지를 자주 사용함
// as HTMLInputElement 풀어보면
interface HTMLInputElement {
    value: string
}

// 만약 위에 쿼리셀렉터 뒤에 as HTMLInputElement 타입 어서션이 없을 때 Element에 value 가 없을거다. 하고 빨간줄로 표시해줌
console.log(input.value);

// DTO : 데이터의 형태를 받을 수 있는 형태로 변환
type userLoginInputDTO = {
    uid: string,
    upw: string,
    city?: string,
    [key: string]: string
}
// 키 뒤에 ? 붙이면 옵셔닝이라는걸 부여
// 옵셔닝 검색해서 정의 알아보기


inputBtn.onclick = function (e: Event) {
    // form 요소를 사용시 name의 요소에 접근하기 위해서
    // const _target = e.target as HTMLFormElement;
    // const uid = _target.uid;

    // e.target === EventTarget
    // input 요소를 사용 시 value 같은 속성에 접근하기 위해서
    // 오류를 우리가 실행전에 좀 유추할 수 없게 된다.
    // if((e.target as Element).classList.contains("uid-btn")) {
    //     const _target = e.target as EventTarget
    //     const uid = _target.value;
    //     console.log(uid);
    // }

    const _value = (input as HTMLInputElement).value;
    const _value2 = (input2 as HTMLInputElement).value;

    // userLoginInputDTO 형태가 아니면 기능에 오류가 발생할 수 있으니
    // DTO의 형태로 데이터를 변환해서 사용할 수 있게 함 *중요*
    const userData: userLoginInputDTO = {
        uid: _value,
        upw: _value2,
        "name": "안녕",
    }
    userData["name"]
    console.log(userData?.city); // undefined
    // ?. : 코드에 오류가 발생하면 중단되는게 defalut 기본값인데 체이닝을 사용하면 코드 중단을 막아준다.
    // 옵션 체이닝 : 키를 먼저 확인하고 있으면 호출하고 없으면 하지마라
    // userData? .city : userData 객체에 city 키가 있으면 값을 호출하고 아니면 하지 마라

    // 여기서 데이터를 전달
    console.log(userData);
}

// EventTarget 여쭤보기
// 타겟의 구조가 들어간다
// EventTarget 으로 타입 설정하면 uid를 쓰기 어려움 HTMLFormElement 사용 해야 함

// 여기부터는 온전히 나만의 정리
// TypeScript 프로그래밍을 하다 보면 타입 어설션(단언, Assertion)을 사용해야 할 순간이 오게 됩니다.
// 타입 어설션은 컴파일러에게 "이 타입이 특정 타입 임을 단언합니다"라고 말하는 것과 같습니다.
// 른 언어의 타입 캐스트(Cast)와 비슷하지만, 특별한 검사나 데이터 재구성을 수행하지 않습니다.
// 런타임 시, 영향을 미치지 않으며 오직 컴파일 과정에서만 사용됩니다.

// 타입 어설션을 처리하는 방법은 2가지 입니다.
// 1번째 방법은 앵글 브라켓(angle-bracket, <>) 문법을 사용하는 것입니다.
// let assertion:any = "타입 어설션은 '타입을 단언'합니다.";

// 방법 1: assertion 변수의 타입을 string으로 단언 처리
// let assertion_count:number = (<string>assertion).length;

// 2번째 방법은 as 문법을 사용하는 것입니다.  
// let assertion:any = "타입 어설션은 '타입을 단언'합니다.";

// 방법 2: assertion 변수의 타입을 string으로 단언 처리
// let assertion_count:number = (assertion as string).length;