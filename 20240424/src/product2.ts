// 할인의 구조를 정의
interface IDiscount {
    // 함수가 있어요 할인가를 가져오는 함수
    // interface는 구조를 정의 하는 곳으로써
    // 값을 사용하거나 함수의 내용을 interface안에 작성할 수가 없음
    // ex) interface 스코프 안에 값을 입력하거나 사용하거나 함수의 내용을 작성 할 수 없다.
    getDisCountPrice(price: number): number
}

// 가격만 수정하는 할인
// 기능 단위로 클래스를 작성
// 고정 할인의 기능을 담당하는 클래스
class FlatDiscount implements IDiscount { // Flat 뜻 조사해보기, implements도 조사해보기, amount도 조사해보기
    amount: number
    constructor(amount: number) {
        this.amount = amount;
    }
    getDisCountPrice(price: number): number {
        return price - this.amount;
    }
}

// 가격을 할인율을 적용하는 기능을 담당하는 클래스
class PercentDiscount implements IDiscount {
    amount: number
    constructor(amount: number) {
        this.amount = amount;
    }
    getDisCountPrice(price: number): number {
        return price * (1 - this.amount / 100)
    }
}

// 특별 할인 행사
class FlatPersent implements IDiscount {
    flatAmount: number
    persentAmount: number
    constructor(flatAmount: number, persentAmount: number) {
        this.flatAmount = flatAmount;
        this.persentAmount = persentAmount;
    }
    getDisCountPrice(price: number): number {
        const flatDiscount = price - this.flatAmount;
        return flatDiscount * (1 - this.persentAmount / 100);
    }
}

class Products {
    name: string
    price: number
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}

// ProductDiscount 할인의 기능을 가지고 있는 객체를 받아서
// 할인을 적용
class ProductDiscount {
    product: Products
    discount: IDiscount
    constructor(product: Products, discount: IDiscount) {
        this.product = product;
        this.discount = discount;
    }

    getPrice(): number {
        return this.discount.getDisCountPrice(this.product.getPrice());
    }
}

const _product01 = new Products("Mac", 100000);
const _product02 = new Products("Window", 20000);

const _flatDiscount = new FlatDiscount(10000);
const _persentDiscount = new PercentDiscount(10);
const _flatPersentDiscount = new FlatPersent(10000, 10);

const discount01 = new ProductDiscount(_product01, _flatDiscount);
console.log(discount01.getPrice())
const discount02 = new ProductDiscount(_product02, _persentDiscount);
console.log(discount02.getPrice())
const discount03 = new ProductDiscount(_product01, _flatPersentDiscount);
console.log(discount03.getPrice())