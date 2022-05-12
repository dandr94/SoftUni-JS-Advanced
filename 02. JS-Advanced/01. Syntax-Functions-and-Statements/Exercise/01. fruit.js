function moneyNeededForFruit(fruit, grams, pricePerKg){
    let kg = (grams / 1000).toFixed(2)
    let finalSum = (kg * pricePerKg).toFixed(2)
    console.log(`I need $${finalSum} to buy ${kg} kilograms ${fruit}.`)
}


moneyNeededForFruit('orange', 2500, 1.80)
moneyNeededForFruit('apple', 1563, 2.35)