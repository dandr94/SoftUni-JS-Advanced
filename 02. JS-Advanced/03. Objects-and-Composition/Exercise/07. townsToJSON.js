function solve(arr) {
  let result = [];
  let formater = (str) =>
    str
      .split("|")
      .filter((x) => x != "")
      .map((x) => x.trim());

  let [colOne, colTwo, colThree] = formater(arr.shift());

  for (const data of arr) {
    let [town, latitude, longitude] = formater(data);
    latitude = Number(latitude).toFixed(2)
    longitude = Number(longitude).toFixed(2)
    let obj = {};
    obj[colOne] = town;
    obj[colTwo] = Number(latitude);
    obj[colThree] = Number(longitude);
    result.push(obj);
  }

  console.log(JSON.stringify(result));
}

solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
