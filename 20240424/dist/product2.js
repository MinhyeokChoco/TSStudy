class FlatDiscount {
    constructor(amount) {
        this.amount = amount;
    }
    getDisCountPrice(price) {
        return price - this.amount;
    }
}
class PercentDiscount {
    constructor(amount) {
        this.amount = amount;
    }
    getDisCountPrice(price) {
        return price * (1 - this.amount / 100);
    }
}
class FlatPersent {
    constructor(flatAmount, persentAmount) {
        this.flatAmount = flatAmount;
        this.persentAmount = persentAmount;
    }
    getDisCountPrice(price) {
        const flatDiscount = price - this.flatAmount;
        return flatDiscount * (1 - this.persentAmount / 100);
    }
}
class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
class ProductDiscount {
    constructor(product, discount) {
        this.product = product;
        this.discount = discount;
    }
    getPrice() {
        return this.discount.getDisCountPrice(this.product.getPrice());
    }
}
const _product01 = new Products("Mac", 100000);
const _product02 = new Products("Window", 20000);
const _flatDiscount = new FlatDiscount(10000);
const _persentDiscount = new PercentDiscount(10);
const _flatPersentDiscount = new FlatPersent(10000, 10);
const discount01 = new ProductDiscount(_product01, _flatDiscount);
console.log(discount01.getPrice());
const discount02 = new ProductDiscount(_product02, _persentDiscount);
console.log(discount02.getPrice());
const discount03 = new ProductDiscount(_product01, _flatPersentDiscount);
console.log(discount03.getPrice());
