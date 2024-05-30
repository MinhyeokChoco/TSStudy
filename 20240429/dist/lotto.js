class NumberBox {
    constructor() {
        this.numberarr = [];
        for (let i = 1; i <= 45; i++) {
            this.numberarr.push(i);
        }
    }
    getNumber() {
        return this.numberarr;
    }
}
class LkjAi {
    constructor() {
        this.playerSelectArr = [];
    }
    randomSelectIndex(a) {
        for (let i = 0; i < 6; i++) {
            let j = Math.floor(Math.random() * a.length);
            this.playerSelectArr.push(a[j]);
            a.splice(j, 1);
        }
        console.log(a);
        console.log(this.playerSelectArr);
        return this.playerSelectArr;
    }
}
class LkjPick {
    constructor() {
        this.resultArr = [];
    }
    getResultArr() {
        return this.resultArr;
    }
    setResultArr(a) {
        this.resultArr = a;
    }
}
class Manager {
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
        const lkjGood = lkjAi.randomSelectIndex(numberBox.getNumber());
        this.lkjpick = new LkjPick();
        this.lkjpick.setResultArr(lkjGood);
        localStorage.setItem("lkjgreat", JSON.stringify(this.lkjpick.getResultArr()));
        return this.lkjpick.getResultArr();
    }
}
const numberBox = new NumberBox();
const lkjAi = new LkjAi();
const manager = new Manager();
manager.lottoRandomInit();
manager.play();
function draw(index) {
    const span = document.createElement("span");
    const colorrandom = Math.floor(Math.random() * 5);
    span.classList.add(`_number0${colorrandom}`);
    span.classList.add("_number");
    span.innerHTML = String(index + 1);
    return span;
}
const k = document.querySelector(".bo");
function reDirect(e) {
    location.href = "lotto2.html";
}
k.onclick = (e) => { reDirect(e); };
