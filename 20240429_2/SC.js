class NumberBox {
    constructor(index) {
        this.numberarr = [];
        for (let i = 1; i <= 45; i++) {
            this.numberarr.push(i);
            const li = document.createElement("li");
            li.className = "machine-list";
            li.dataset.index = `${i}`;
            const machine = document.querySelector(".machine");
            li.innerHTML = `${i}`;
            machine.append(li);
        }
    }
    getNumber() {
        return this.numberarr;
    }
}
const numberBox = new NumberBox(1);
numberBox.getNumber();
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
        return this.playerSelectArr;
    }
}
class Manager {
    construct() {
        this.numberBox = new NumberBox(1);
    }
    lottoRandomInit() {
        this.numberBox = new NumberBox(1);
        this.lkjAi = new LkjAi();
    }
    play() {
        return lkjGood;
    }
}
const lkjAi = new LkjAi();
const lkjGood = lkjAi.randomSelectIndex(numberBox.getNumber());
const manager = new Manager();
const manageArr = manager.play();
const btn = document.querySelector("button");
const li = document.querySelectorAll("li");
btn.onclick = function () {
    for (let i = 0; i <= 5; i++) {
        const randomBox = document.querySelector(".random");
        const randomList = document.createElement("li");
        randomList.className = "random-list";
        randomList.innerHTML = `${manageArr[i]}`;
        randomBox.append(randomList);
        console.log(li);
        for (let j = 0; j < li.length; j++) {
            console.log(li[j]);
            if (li[j].classList.contains("machine-list") && (li[j].dataset.index == String(manageArr[i]))) {
                li[j].classList.remove("machine-list");
                li[j].classList.add("delete-random");
            }
        }
    }
};