class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }

  getClearancePrice() {
    return this.price * 0.5;
  }
}

const product1 = new Product("Coffee Maker", 99.95, false);