function solve() {
  let firstPrm = document.getElementById('text').value
  let convention = document.getElementById('naming-convention').value

  if (convention == 'Camel Case'){
     firstPrm = firstPrm.toLowerCase()
     .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => 
     chr.toUpperCase())
  } else if (convention == 'Pascal Case'){
    firstPrm = firstPrm.split(' ')
    .map(chr => chr[0].toUpperCase() + chr.substring(1).toLowerCase())
    .join('')
  } else {
    firstPrm = 'Error!'
  }
  document.getElementById('result').textContent = firstPrm
  
}