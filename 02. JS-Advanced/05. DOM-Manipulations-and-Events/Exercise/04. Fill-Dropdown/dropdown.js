function addItem() {
    function eFactory(id) {
        return document.getElementById(id);
    }

    let itemText = eFactory('newItemText')
    let itemValue = eFactory('newItemValue')
    let optionMenu = eFactory('menu')

    let optionElement = document.createElement('option')
    optionElement.textContent = itemText.value
    optionElement.value = itemValue.value
    itemText.value = ''
    itemValue.value = ''

    optionMenu.appendChild(optionElement)
}
       