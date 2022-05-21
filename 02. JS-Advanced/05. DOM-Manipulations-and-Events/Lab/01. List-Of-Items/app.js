function addItem() {
    let newItem = document.getElementById('newItemText').value
    let newLi = document.createElement('li')
    if (newItem){
        newLi.appendChild(document.createTextNode(newItem))
        let allItems = document.getElementById('items')
        allItems.appendChild(newLi)
        document.getElementById('newItemText').value = ''
    }
}