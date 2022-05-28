function search() {
  let searchWord = document.getElementById("searchText").value;
  let towns = document.getElementById("towns").children;
  let result = document.getElementById("result");

  let count = 0

  towns = Array.from(towns)
  
  for (let town of towns){
     if (town.textContent.includes(searchWord)){
        town.style.textDecoration = 'bold underline'
        count += 1
     } else {
      town.style.textDecoration = 'none'
     }
  }
  result.textContent = `${count} matches found`;
}
