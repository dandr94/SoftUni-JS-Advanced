function passwordValidator(password){
    let isCorrectPasswordLength = password.length >= 6 && password.length <= 10
    let isOnlyLettersAndDigits = (/^[a-zA-Z0-9]+$/.test(password));
    let isAtleastTwoDigits = (/[0-9].*[0-9]/.test(password))
    

    if (isCorrectPasswordLength && isOnlyLettersAndDigits && isAtleastTwoDigits){
        console.log('Password is valid')
    } else {

        if (!isCorrectPasswordLength){
            console.log('Password must be between 6 and 10 characters')
        }

        if (!isOnlyLettersAndDigits){
            console.log('Password must consist only of letters and digits')
        }

        if (!isAtleastTwoDigits){
            console.log('Password must have at least 2 digits')
        }

    }    
}


passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')