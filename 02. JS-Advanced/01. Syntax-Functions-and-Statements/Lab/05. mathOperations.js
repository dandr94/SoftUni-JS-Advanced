function mathOperations(numOne, numTwo, operator){
    let result = numOne

    switch (operator){
        case '+':
            result += numTwo
            break
        case '-':
            result -= numTwo
            break
        case '*':
            result *= numTwo
            break
        case '/':
            if (numTwo == 0){
                console.log('Cannot Divide by zero!')
                return
            }
            result /= numTwo
            break
        case '%':
            result %= numTwo
            break
        case '**':
            result **= numTwo
            break
    }
    console.log(result)
}


mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')
mathOperations(3, 0, '/')
mathOperations(5, 5, '**')