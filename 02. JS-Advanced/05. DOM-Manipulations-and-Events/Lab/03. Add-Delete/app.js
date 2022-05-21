function addItem() {
    let itemsElements = document.getElementById('items')
    let inputElement = document.getElementById('newItemText')

    let newLiElement = document.createElement('li')
    newLiElement.textContent = inputElement.value
 
    let ahrefElement = document.createElement('a')
    ahrefElement.href = '#'
    ahrefElement.textContent = '[Delete]'
    ahrefElement.addEventListener('click', (event) => {
        event.currentTarget.parentElement.remove()
    })

    newLiElement.appendChild(ahrefElement)
    itemsElements.appendChild(newLiElement)
}