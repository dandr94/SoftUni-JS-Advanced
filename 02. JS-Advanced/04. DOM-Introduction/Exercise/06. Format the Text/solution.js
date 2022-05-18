function solve() {
  let text = document.getElementById('input')
  let output = document.getElementById('output')

  textArr = text.value.split('.').filter(x => x.length >= 1)

  while (textArr.length > 0){
    let myText = textArr.splice(0, 3) + '.'
    let paragraph = document.createElement('p')
    paragraph.textContent = myText
    output.appendChild(paragraph)
  }
}