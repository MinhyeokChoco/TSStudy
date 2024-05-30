// 상품을 정의하는 interface

interface IProduct {
    name: string,
    price: number,
    discountAmount: number,
}

class Product implements IProduct {
    name: string;
    price: number;
    discountAmount: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        this.discountAmount = 0;
    }

    getName(): string { // string은 반환받는 타입을 정해준 것
        return this.name;
    }

    getPrice(): number { // get으로 호출할 때 () 있어야 함, get 뒤에 카멜케이스로 대문자
        return this.price - this.discountAmount;
    }

    setDisCountAmount(amount: number): void { // 자료형의 타입을 쓰지 않으면 default값은 void이다.
        this.discountAmount = amount;
    }
}

class ProductManager {
    // Product class로 만든 객체만 담을 수 있는 배열 
    products: Product[];
    constructor() {
        this.products = [];
    }

    setCreateProduct(_product: Product) {
        this.products.push(_product);
    }

    getProduct(index: number): Product {
        return this.products[index];
    }
}

const product01: Product = new Product("Mac", 1000); // Product 타입이 뭔 지 검색해보기
product01.setDisCountAmount(200);
const productManager: ProductManager = new ProductManager();
productManager.setCreateProduct(product01);

console.log(productManager.getProduct(0).getPrice());

// 고정 금액 할인
// 할인율 할인
// 특별 할인