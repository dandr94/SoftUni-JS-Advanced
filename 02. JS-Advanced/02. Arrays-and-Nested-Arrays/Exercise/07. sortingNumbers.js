function sortNumbers(arr) {
  arr = arr.sort((x, y) => y - x);
  let result = [];

  while (arr.length > 0) {
    let maxNum = arr.shift();
    let minNum = arr.pop();
    result.push(minNum);
    result.push(maxNum);
  }

  let finalResult = result.filter((e) => {
    return typeof e != "undefined";
  });

  return finalResult;
}

sortNumbers([1, 65, 3]);
