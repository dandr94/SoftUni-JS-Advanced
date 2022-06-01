class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable - spaceRequired < 0) {
      throw "Not enough space in the garden.";
    }

    this.spaceAvailable -= spaceRequired;

    this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    const findPlant = this.plants.find((p) => p.plantName === plantName);

    if (!findPlant) {
      throw `There is no ${plantName} in the garden.`;
    } else if (findPlant.ripe == true) {
      throw `The ${plantName} is already ripe."`;
    } else if (quantity <= 0) {
      throw "The quantity cannot be zero or negative.";
    }

    findPlant.ripe = true;
    findPlant.quantity += quantity;

    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    const findPlant = this.plants.find((p) => p.plantName === plantName);

    if (!findPlant) {
      throw `There is no ${plantName} in the garden.`;
    } else if (!findPlant.ripe) {
      throw `The ${plantName} cannot be harvested before it is ripe.`;
    } else {
      this.plants = this.plants.filter((p) => p.plantName !== plantName);
      this.spaceAvailable += findPlant.spaceRequired;
      const quantity = findPlant.quantity;
      this.storage.push({ plantName, quantity });
      return `The ${plantName} has been successfully harvested.`;
    }
  }

  generateReport() {
    let result = [];
    result.push(`The garden has ${this.spaceAvailable} free space left.`);
    let sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b));
    let plants = []
    sortedPlants.map((p) => {
        plants.push(p.plantName)

    })
    result.push(`Plants in the garden: ${plants.join(', ')}`)

    if (!this.storage){
        result.push('Plants in storage: The storage is empty')
    } else {
        let storage = []
        this.storage.map( (p) => {
            storage.push(`${p.plantName} (${p.quantity})`)
        })
        result.push(`Plants in storage: ${storage.join(', ')}`)
    }
    return result.join('\n')
  }
  
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

