<<<<<<< HEAD
function moneyNeededForFruit(fruit, grams, pricePerKg) {
  let kg = grams / 1000;
  let finalSum = kg * pricePerKg;
  console.log(
    `I need $${finalSum.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`
  );
}

moneyNeededForFruit("orange", 2500, 1.8);
moneyNeededForFruit("apple", 1563, 2.35);
=======
function moneyNeededForFruit(fruit, grams, pricePerKg){
    let kg = grams / 1000
    let finalSum = kg * pricePerKg
    console.log(`I need $${finalSum.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}


moneyNeededForFruit('orange', 2500, 1.80)
moneyNeededForFruit('apple', 1563, 2.35)
>>>>>>> 0b992c5d917b20698a798617415d11d3e9ac0ed4
