function Cart() {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
};

Cart.prototype.calculateGoodsPrice = function(price) {
    this.totalPrice = this.totalPrice + price;
}

Cart.prototype.addGoods = function(good) {
    this.goods.push(good);
    this.increaseCount();
    this.calculateGoodsPrice(good.price)
}

Cart.prototype.getTotalPrice = function() {
    return this.totalPrice;
}

Cart.prototype.increaseCount = function() {
    this.count = this.count + 1;
}

Cart.prototype.clear = function() {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
}

Cart.prototype.print = function() {
    const arr = [];
    this.goods.forEach(el => {
        arr.push(el.title);
    });
    console.log(JSON.stringify(arr));
    console.log(this.totalPrice);
}

function Goods(price, title, discont) {
    this.price = price;
    this.title = title;
    this.discont = discont;
}

const TechnicsGoods = function(price, title, discont, material = 'metal') {
    Goods.call(this, price, title, discont);
    this.material = material;
}
const FoodGoods = function(price, title, discont, calories = 0) {
    Goods.call(this, price, title, discont);
    this.calories = calories;
}
const СlothingGoods = function(price, title, discont, typeTechnique = 'smartphone') {
    Goods.call(this, price, title, discont);
    this.typeTechnique = typeTechnique;
}


const newCart = new Cart();
newCart.addGoods(new TechnicsGoods(10, 'Лопатка', 9, 'plastic'));
newCart.addGoods(new FoodGoods(15, 'Сосиськи', 7, 14));
newCart.addGoods(new СlothingGoods(50, 'Asus', 10, 'notebook'));


newCart.print()



