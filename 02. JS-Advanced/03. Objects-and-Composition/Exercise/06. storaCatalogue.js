function solve(arr) {
  arr = arr.sort((a, b) => a.localeCompare(b));
  let result = {};

  for (const data of arr) {
     let [item, price] = data.split(' : ')
     let first_letter = item[0]
    if (!result.hasOwnProperty(first_letter)) {
      result[first_letter] = [];
    }

    result[first_letter].push(`${item}: ${price}`);
  }
  let entries = Object.entries(result).sort();
  for (const [key, value] of entries) {
    console.log(`${key}`);
    value.forEach((element) => {
      console.log(`  ${element}`);
    });
  }
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
