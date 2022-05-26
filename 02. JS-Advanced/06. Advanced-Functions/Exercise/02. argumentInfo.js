function solve(...args) {
  const count = {};

  for (let line of args) {
    const type = typeof line;
    if (!count.hasOwnProperty(type)) {
      count[type] = 0;
    }
    count[type] += 1;
    console.log(`${type}: ${line}`);
  }

  let entries = Object.entries(count).sort((a, b) => b[1] - a[1]);

  entries.forEach((element) => console.log(`${element[0]} = ${element[1]}`));
}

solve("cat", 42, function () {
  console.log("Hello world!");
});
