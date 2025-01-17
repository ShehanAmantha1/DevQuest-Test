class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getItems() {
        return this.items;
    }
}

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Example usage:
const cart = new ShoppingCart();
cart.addItem(new Item('Apple', 1.00));
cart.addItem(new Item('Banana', 0.50));
console.log(cart.getItems()); // [ { name: 'Apple', price: 1 }, { name: 'Banana', price: 0.5 } ]
console.log(cart.getTotal()); // 1.5
cart.removeItem('Apple');
console.log(cart.getItems()); // [ { name: 'Banana', price: 0.5 } ]
console.log(cart.getTotal()); // 0.5