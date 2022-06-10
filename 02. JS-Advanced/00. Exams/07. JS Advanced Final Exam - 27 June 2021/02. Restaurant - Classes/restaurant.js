class Restaurant {
  constructor(budget) {
    this.budgetMoney = budget;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  isInStock = (n) => this.stockProducts.hasOwnProperty(n);
  isInMenu = (m) => this.menu.hasOwnProperty(m);
  isValid = (p, q) => this.stockProducts[p] >= q;

  loadProducts(products) {
    for (let data of products) {
      let [name, quantity, price] = data.split(" ");
      quantity = Number(quantity);
      price = Number(price);

      if (price > this.budgetMoney) {
        this.history.push(
          `There was not enough money to load ${quantity} ${name}`
        );
        continue;
      }
      if (!this.isInStock(name)) {
        this.stockProducts[name] = 0;
      }

      this.stockProducts[name] += quantity;

      this.budgetMoney -= price;
      this.history.push(`Successfully loaded ${quantity} ${name}`);
    }
    return this.history.join("\n");
  }

  addToMenu(meal, neededProducts, price) {
    if (this.isInMenu(meal)) {
      return `The ${meal} is already in the our menu, try something different.`;
    }

    this.menu[meal] = { neededProducts, price };

    const size = Object.keys(this.menu).length;

    if (size === 1) {
      return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
    }

    return `Great idea! Now with the ${meal} we have ${size} meals in the menu, other ideas?`;
  }

  showTheMenu() {
    if (Object.keys(this.menu).length === 0) {
      return "Our menu is not ready yet, please come later...";
    }

    let result = [];

    for (const meal in this.menu) {
      result.push(`${meal} - $ ${this.menu[meal].price}`);
    }

    return result.join("\n");
  }

  makeTheOrder(meal) {
    if (!this.isInMenu(meal)) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    let usedProducts = {};

    for (let data of this.menu[meal].neededProducts) {
      let [product, quantity] = data.split(" ");
      if (!this.isValid(product, Number(quantity))) {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
      }
      usedProducts[product] = this.menu[meal].neededProducts[product];
    }

    for (let product in usedProducts) {
      this.stockProducts[product] -= usedProducts[product];
    }
    this.budgetMoney += this.menu[meal].price;

    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
  }
}

