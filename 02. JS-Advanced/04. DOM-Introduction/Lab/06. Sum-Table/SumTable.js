function sumTable() {
  let table = document.querySelectorAll('table tr');
  let result = 0;
  for (let i = 1; i < table.length; i++) {
    let col = table[i].children;
    let cost = col[col.length - 1].textContent;
    result += Number(cost);
  }
  document.getElementById("sum").textContent = total;
}
