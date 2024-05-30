# 로또 

1. 1 ~ 45까지 담을 상자
2. 45개의 숫자중에서 랜덤한 숫자를 뽑을 기계
3. 기계로 랜덤하게 뽑은 숫자를 담을 상자

1. 1 ~ 45까지 담을 상자 NumberBox
- number[] === 숫자 담을 배열 X
<!-- - solt === function(arr : number[]) : number[] {} === 상자에 있는 배열을 섞어서 -->
- randomSelect === function(index : number[]) : number[] {}
- getNumber === function () : number[];

2. 45개의 숫자중에서 랜덤한 숫자를 뽑을 사람 LkjAi
- playerSelectArr : number[] 플레이어가 숫자를 뽑은 배열 X
- randomSelectIndex === function () : number[] {} 6개 뽑을때까지 반복 중복체크
- setPlayerSelectArr === function ( playerSelect : number[] ) : void {}
- getPlayerSelectArr === function() : number[] {}

3. 경제로 랜덤하게 뽑은 숫자를 담을 상자 LkjPick
- resultArr : number[] X
- getResultArr === function () : number[] {}
- setResultArr === function ( resultArr : number[] ) : void  {}

4. manager 
- numberBox : NumberBox
- lkjAi : LkjAi
- lkjPick : LkjPick

- lottoRandomInit === function() : void { 
    lkjAi.randomSelectIndex -> lkjAi.setPlayerSelect() ->  lkjAi.getPlayerSelectArr() 
  }

- play === function() : number[] {
    numberBox.randomSelect(lkjAi.getPlayerSelectArr()) -> lkjPick.setResultArr(구슬을 담고) -> lkjPick.getResult();
}

```ts
class NumberBox {
    constructor()
    randomSelect(index : number[]) : number[] {

    }
    number = number[];

}
class LkjAi {
    constructor()

}
class LkjPick{
    constructor()

}
class Manager {
    private numberBox : NumberBox
    private lkjAi : LkjAi
    private lkjPick : LkjPick
    constructor(numberBox, lkjAi, lkjPick){
        this.numberBox = numberBox
        this.lkjAi = lkjAi
        this.lkjPick = lkjPick
    }
    
    getNumberBox() {
       return this.numberBox
    }
    setNumberBox(numberBox){
        this.numberBox = numberBox
    }
}

const manager = new Manager("1","2","3");

manager.setNumberBox("fsdfsdfsdfsd")
class
{
    getState(){

    }
}

type borad{
    name : string
    content : number
}
```

페이지 1번째 = 45개의 숫자를 가진 로또 뽑을 수 있는 환경을 구현
페이지 2번째 = 6개의 로또 당첨 번호를 받고 출력 하는 화면 구현