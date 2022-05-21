function focused() {
    let allElements = document.getElementsByTagName('input')
    let arrElements = Array.from(allElements)

    const addFocus = (event) => event.parentNode.className = 'focused'
    const removeFocus = (event) => event.parentNode.className = ''


    arrElements.forEach( x => {
        x.addEventListener('focus', (event) => addFocus(event.currentTarget))
        x.addEventListener('blur', (event) => removeFocus(event.currentTarget))
    })
}