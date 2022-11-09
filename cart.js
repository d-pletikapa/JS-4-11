'use strict';
console.log('Задание 1:');

// Задание 1
// Установить и настроить ESLint
// Проверьте файл cart.js на ошибки
// Сделайте скриншот и пришлите его
// Исправить все ошибки на которые укажет ESLint


const cart = {
  items: [],
  count: 0,
  // totalPrice: 0,
  // getTotalPrice() {
  // console.log('cart.totalPrice = ', cart.totalPrice);
  // return cart.totalPrice;
  // },

  get totalPrice() {
    return this.calculateItemPrice();
  },

  calculateItemPrice() {
    let totalPrice = 0;
    this.items.forEach(item => {
      const itemPrice = item.productPrice * item.productCount;
      totalPrice += itemPrice;
      // console.log(totalPrice);
    });
    return totalPrice;
  },

  add(productName, productPrice, productCount = 1) {
    const newItem = {productName, productPrice, productCount};
    this.items.push(newItem);
    this.increaseCount(productCount);
    cart.totalPrice;
  },

  increaseCount(counter) {
    return this.count += counter;
  },
  print() {
    const resultItems = JSON.stringify(cart.items);
    const resultPrice = JSON.stringify(cart.totalPrice);
    console.log(`result: ${resultItems}\ntotalPrice: ${resultPrice}`);
  },
  clear() {
    // this.items = [];
    // this.items.splice(0, cart.items.length);
    this.items.length = 0;
    this.count = 0;
    // this.totalPrice = 0;
  },
};

// Performing tests for methods of cart object:

cart.add('Banana', 100, 2);
cart.add('Apple1', 50, 1);
cart.add('Apple2', 60, 1);
cart.add('Orange', 200, 3);
console.log('🚀 ~ file: cart.js ~ line 60 ~ add ~ items', cart.items);
cart.totalPrice;
cart.print();
cart.clear();


