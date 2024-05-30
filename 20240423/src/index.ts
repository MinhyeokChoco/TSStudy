// // 로또 추첨기

// let lottoNum : number[] = [];
// let result : number[] = [];

// function lottoInit(): string {
//     lottoNum = [];
//     for (let i = 1; i <= 45; i++) {
//         lottoNum.push(i);
//     }
//     return `init 함수 실행 lotto초기화`
// }
// // void 타입
// // 반환 값의 데이터 타입을 지정하고싶다.

// function lottoPlay() {
//     result = [];
//     for (let i = 0; i < 6; i++) {
//         let randomIndex: number = Math.floor((Math.random() * lottoNum.length));
//         let number: number = lottoNum[randomIndex];
//         lottoNum.splice(randomIndex, 1);
//         result.push(number);
//     }
// }

// function main() {
//     const text: string = lottoInit();
//     console.log(text)
//     lottoPlay();
//     console.log("로또 결과", result);
// }

// main();

// let com : string = prompt("가위바위보를 입력해주세요.")
// let ply : string = prompt("가위바위보를 입력해주세요.")

// if (com == ply) {
//     alert("비겼습니다.");
//     console.log("비겼습니다.");
// } else if (com == "가위") {
//     if (ply == "보") {
//         alert("졌습니다.");
//         console.log("졌습니다.");
//     } else {
//         alert("이겼습니다.");
//         console.log("이겼습니다.");
//     }
// } else if (com == "바위") {
//     if (ply == "가위") {
//         alert("졌습니다.");
//         console.log("졌습니다.");
//     } else {
//         alert("이겼습니다.");
//         console.log("이겼습니다.")
//     }
// } else if (com == "보") {
//     if (ply == "바위") {
//         alert("졌습니다.")
//         console.log("졌습니다.")
//     } else {
//         alert("이겼습니다.")
//         console.log("이겼습니다.")
//     }
// } else if ((com !== "가위") && (com !== "바위") && (com !== "보")){
//     if((ply !== "가위") && (ply !== "바위") && (ply !== "보")){
//         alert("다시 입력해주세요")
//         console.log("다시 입력해주세요.")
//     }
// }

// function rps(com: string, ply: string) {
//     if (com === ply) {
//         alert("비겼습니다.")
//         console.log("비겼습니다.")
//     } else if ((com == "가위" && ply == "바위") || (com == "바위" && ply == "보") || (com == "보" && ply == "가위")) {
//         alert("이겼습니다.")
//         console.log("이겼습니다.")
//     } else {
//         alert("졌습니다.")
//         console.log("졌습니다.")
//     }
// }
// console.log("com", "ply");
// rps(prompt("가위바위보를 입력해주세요"), prompt("가위바위보를 입력해주세요."));

let com: string = prompt("컴퓨터 값")
let ply: string = prompt("플레이어 값")

