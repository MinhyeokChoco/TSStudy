// const resultArr : number[] = new resultArr[];

// class NumberBox {
//     private numberarr: number[];
//     constructor() {
//         this.numberarr = [];
//         for (let i = 1; i <= 45; i++) {
//             this.numberarr.push(i);
//         }
//     }

//     getNumber(): number[] {
//         return this.numberarr;
//     }

// }

// class LkjAi {
//     private playerSelectArr: number[];
//     constructor() {
//         this.playerSelectArr = [];
//     }
//     randomSelectIndex(a: number[]): number[] {
//         for (let i = 0; i < 6; i++) {
//             let j = Math.floor(Math.random() * a.length); // 
//             this.playerSelectArr.push(a[j]);
//             a.splice(j, 1)
//         }
//         return this.playerSelectArr;
//     }
// }

// // const numBox : NumberBox = new NumberBox();



class NumberBox {
    private numberarr: number[];
    constructor(index: number) {
        this.numberarr = [];
        for (let i = 1; i <= 45; i++) {
            this.numberarr.push(i);
            const li = document.createElement("li") as HTMLLIElement;
            li.className = "machine-list";
            li.dataset.index = `${i}`;
            const machine = document.querySelector(".machine") as HTMLUListElement;
            li.innerHTML = `${i}`;
            machine.append(li);
        }
    }
    getNumber(): number[] {
        return this.numberarr;
    }
}



const numberBox = new NumberBox(1);
numberBox.getNumber();


class LkjAi {
    private playerSelectArr: number[];
    constructor() {
        this.playerSelectArr = [];
    }
    randomSelectIndex(a: number[]): number[] {
        for (let i = 0; i < 6; i++) {
            let j = Math.floor(Math.random() * a.length); // 
            this.playerSelectArr.push(a[j]);
            a.splice(j, 1)
        }
        // console.log(a);
        // console.log(this.playerSelectArr)
        return this.playerSelectArr;
    }
}

// const randomArr = new LkjAi();
// randomArr.randomSelectIndex()

// class LkjPick {
//   private resultArr: number[]
//   constructor(_resultArr : number[]) {
//     this.resultArr = _resultArr;
//   }

//   getResultArr(): number[] {
//       return this.resultArr;
//   }

//   setResultArr(a: number[]) {
//       this.resultArr = a;
//   }
// }





class Manager {
    numberBox: NumberBox
    lkjAi: LkjAi
    construct() {
        this.numberBox = new NumberBox(1);
    }

    lottoRandomInit() {
        this.numberBox = new NumberBox(1);
        this.lkjAi = new LkjAi();
        // this.lkjPick = new LkjPick([]);
    }

    play() {
        return lkjGood;
    }
}

const lkjAi = new LkjAi();
// const lkjGood: number[] = lkjAi.randomSelectIndex(numberBox.getNumber());
const lkjGood: number[] = lkjAi.randomSelectIndex(numberBox.getNumber());
const manager = new Manager();
const manageArr = manager.play();




const btn = document.querySelector("button") as HTMLButtonElement;
// const li = document.querySelector("li") as HTMLLIElement;
const li = document.querySelectorAll("li") as NodeListOf<HTMLLIElement>;
btn.onclick = function () {
    for (let i = 0; i <= 5; i++) {
        const randomBox = document.querySelector(".random") as HTMLElement;
        const randomList = document.createElement("li") as HTMLElement;
        randomList.className = "random-list"
        randomList.innerHTML = `${manageArr[i]}`;
        randomBox.append(randomList);

        console.log(li)
        for (let j = 0; j < li.length; j++) {
            console.log(li[j]);
            if (li[j].classList.contains("machine-list") && (li[j].dataset.index == String(manageArr[i]))) {
                li[j].classList.remove("machine-list");
                li[j].classList.add("delete-random");
            }
        }

    }

}