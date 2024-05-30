class NumberBox {
    // NumberBox 클래스 생성
    private numberarr: number[];
    // 수정자, 키의 값
    constructor() {
        // 생성자 함수
        this.numberarr = [];
        // 45개의 숫자를 담을 수 있는 빈 배열 생성
        for (let i = 1; i <= 45; i++) {
            this.numberarr.push(i);
        }
        // number 배열에 1부터 45까지의 숫자를 넣기 위해서 반복문
    }

    getNumber(): number[] {
        return this.numberarr;
    }
    // 45개의 숫자를 넣은 배열을 호출하기 위해서 getNumber 메서드 생성
}

class LkjAi {
    // LkjAi 클래스 생성
    private playerSelectArr: number[];
    // 수정자, 키의 값
    constructor() {
        // 생성자 함수
        this.playerSelectArr = [];
        // 45개의 숫자에서 랜덤한 6개의 숫자를 담을 빈 배열 생성
    }
    randomSelectIndex(a: number[]): number[] {
        // 함수 randomSelectIndex의 매개변수 a를 number[]값으로 자료형 지정 후 리턴 받는 자료형도 number[]로 지정 
        for (let i = 0; i < 6; i++) {
            // 인덱스 0을 주고 6보다 작을때까지 증가식
            let j = Math.floor(Math.random() * a.length);
            // 변수 j에게
            this.playerSelectArr.push(a[j]);
            a.splice(j, 1)
        }
        console.log(a);
        console.log(this.playerSelectArr)
        return this.playerSelectArr;
    }
}

class LkjPick {
    private resultArr: number[]
    constructor() {
        this.resultArr = [];
    }

    getResultArr(): number[] {
        return this.resultArr;
    }

    setResultArr(a: number[]) {
        this.resultArr = a;
    }
}

class Manager {
    numberBox: NumberBox
    lkjAi: LkjAi
    lkjpick: LkjPick

    constructor() {
        this.numberBox = new NumberBox();
    }

    lottoRandomInit() {
        this.numberBox = new NumberBox();
        for (let i = 0; i < this.numberBox.getNumber().length; i++) {
            document.querySelector(".number").append(draw(i));
        }
    }

    play() {
        const lkjGood: number[] = lkjAi.randomSelectIndex(numberBox.getNumber());
        this.lkjpick = new LkjPick()
        this.lkjpick.setResultArr(lkjGood);
        localStorage.setItem("lkjgreat", JSON.stringify(this.lkjpick.getResultArr()))
        return this.lkjpick.getResultArr();
    }
}

const numberBox = new NumberBox();
const lkjAi = new LkjAi();
const manager = new Manager();

manager.lottoRandomInit();
manager.play();

function draw(index: number): HTMLSpanElement {
    const span = document.createElement("span") as HTMLSpanElement;
    const colorrandom = Math.floor(Math.random() * 5);
    span.classList.add(`_number0${colorrandom}`);
    span.classList.add("_number");
    span.innerHTML = String(index + 1);

    return span;
}



// 추첨버튼
const k: HTMLInputElement = document.querySelector(".bo");
function reDirect(e: Event) {
    location.href = "lotto2.html"
}
k.onclick = (e: Event) => { reDirect(e) }