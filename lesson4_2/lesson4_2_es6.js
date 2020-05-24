'use strict';

class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    make25PercentDiscount(discount) {
      this.price = this.price - (this.price/100 * discount);
    }
  }

let product1 = new Product('Яблоко',150);
let product2 = new Product('Гранат',300);
let product3 = new Product('Апельсин',200);

product1.make25PercentDiscount(25);