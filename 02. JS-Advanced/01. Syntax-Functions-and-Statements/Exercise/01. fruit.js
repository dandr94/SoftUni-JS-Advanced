function moneyNeededForFruit(fruit, grams, pricePerKg) {
  let kg = grams / 1000;
  let finalSum = kg * pricePerKg;
  console.log(
    `I need $${finalSum.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`
  );
}

moneyNeededForFruit("orange", 2500, 1.8);
moneyNeededForFruit("apple", 1563, 2.35);
