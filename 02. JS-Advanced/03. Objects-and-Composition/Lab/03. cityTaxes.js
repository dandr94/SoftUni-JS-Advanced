function cityTaxes(name, population, treasury) {
  class City {
    constructor(name, population, treasury) {
      this.name = name;
      this.population = population;
      this.treasury = treasury;
      this.taxRate = 10;
    }

    collectTaxes() {
      this.treasury += Math.round(this.population * this.taxRate);
    }
    applyGrowth(percentage) {
      this.population += Math.round((this.population * percentage) / 100);
    }

    applyRecession(percentage) {
      this.treasury -= Math.round((this.treasury * percentage) / 100);
    }
  }

  return new City(name, population, treasury);
}

const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
