function validate() {
    let emailElement = document.getElementById('email')

    
    function checkIfValid({target}) {
        let regexPattern = /^[a-z]+@[a-z]+\.[a-z]+$/

        if (regexPattern.test(target.value)){
            target.classList.remove('error')
        } else {
            target.classList.add('error')
        }
    }

    emailElement.addEventListener('change', checkIfValid)
}