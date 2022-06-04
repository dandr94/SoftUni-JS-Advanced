class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (!model || horsepower < 0 || price < 0 || mileage < 0) {
      throw new Error("Invalid input!");
    }

    this.availableCars.push({ model, horsepower, price, mileage });
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    const car = this.availableCars.find((c) => c.model === model);

    if (!car) {
      throw new Error(`${model} was not found!`);
    }

    const difference = car.mileage - desiredMileage;
    let soldPrice = car.price;

    if (difference > 0 && difference <= 40000) {
      soldPrice -= car.price * 0.05;
    } else if (difference > 40000) {
      soldPrice -= car.price * 0.1;
    }
    this.totalIncome += soldPrice;
    this.availableCars = this.availableCars.filter((c) => c.model !== model);
    this.soldCars.push({ model, horsepower: car.horsepower, soldPrice });

    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length === 0) {
      return "There are no available cars";
    }

    let result = ["-Available cars:"];

    this.availableCars.forEach((c) =>
      result.push(
        `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(
          2
        )} km - ${c.price.toFixed(2)}$`
      )
    );

    return result.join("\n");
  }

  salesReport(criteria) {
    if (criteria !== "horsepower" && criteria !== "model") {
      throw new Error("Invalid criteria!");
    }
    let result = [
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
      `-${this.soldCars.length} cars sold:`,
    ];

    let sortedCars =
      criteria === "horsepower"
        ? this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
        : this.soldCars.sort((a, b) => a.model.localeCompare(b.model));

    sortedCars.forEach((c) => {
      result.push(
        `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`
      );
    });

    return result.join("\n");
  }
}

