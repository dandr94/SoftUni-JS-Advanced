function search() {
  let searchWord = document.getElementById("searchText").value;
  let towns = document.getElementById("towns").children;
  let result = document.getElementById("result");

  let count = 0
  
  for (let town of towns){
     if (town.textContent.includes(searchWord)){
        town.style.fontweight = 'bold'
        town.style.textDecoration = 'underline'
        count += 1
     } else {
      town.style.fontweight = 'normal'
      town.style.textDecoration = 'none'
     }
  }
  result.textContent = `${count} matches found`;
}
