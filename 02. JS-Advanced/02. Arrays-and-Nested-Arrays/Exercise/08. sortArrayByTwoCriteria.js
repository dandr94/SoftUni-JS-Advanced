function sort(arr) {
  arr = arr.sort((x, y) => x.length - y.length || x.localeCompare(y));
  console.log(arr.join("\n"));
}

sort(["alpha", "beta", "gamma"]);

sort(["Isacc", "Theodor", "Jack", "Harrison", "George"]);

sort(["test", "Deny", "omen", "Default"]);
