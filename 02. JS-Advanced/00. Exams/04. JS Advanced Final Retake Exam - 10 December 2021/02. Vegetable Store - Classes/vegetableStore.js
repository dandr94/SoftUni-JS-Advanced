class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    let result = new Set();
    for (let data of vegetables) {
      let [type, quantity, price] = data.split(" ");
      quantity = Number(quantity);
      price = Number(price);
      const findType = this.availableProducts.find((p) => p.type === type);

      if (findType) {
        findType.quantity += quantity;
        if (price > findType.price) {
          findType.price = price;
        }
      } else {
        this.availableProducts.push({ type, quantity, price });
      }

      result.add(type);
    }

    return `Successfully added ${[...result].join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (let data of selectedProducts) {
      let [type, quantity] = data.split(" ");
      quantity = Number(quantity);
      const findType = this.availableProducts.find((p) => p.type == type);

      if (!findType) {
        throw `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
          2
        )}.`;
      } else if (findType.quantity < quantity) {
        throw `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
          2
        )}.`;
      } else {
        totalPrice += quantity * findType.price;
        findType.quantity -= quantity;
      }
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    const findType = this.availableProducts.find((p) => p.type == type);

    if (!findType) {
      throw `${type} is not available in the store.`;
    } else if (quantity > findType.quantity) {
      findType.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    } else {
      findType.quantity -= quantity;
      return `Some quantity of the ${type} has been removed.`;
    }
  }

  revision() {
    let result = ["Available vegetables:"];
    const sortedProducst = this.availableProducts.sort(
      (a, b) => a.price - b.price
    );

    sortedProducst.map((p) => {
      result.push(`${p.type}-${p.quantity}-$${p.price}`);
    });
    result.push(
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );
    return result.join("\n");
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

