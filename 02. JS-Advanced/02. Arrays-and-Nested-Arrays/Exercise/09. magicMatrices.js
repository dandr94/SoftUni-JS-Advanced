function solve(matrix) {
  let isMagic = new Set();
  for (let i = 0; i < matrix.length; i++) {
    let rowSum = matrix[i].reduce((a, b) => a + b);
    let colSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      colSum += matrix[j][i];
    }

    isMagic.add(rowSum);
    isMagic.add(colSum);

    if (isMagic.size > 1) {
      return false;
    }
  }
  return true;
}
