function simpleCalculator(numOne, numTwo, operator){
    let result = numOne

    switch(operator){
        case 'multiply':
            result *= numTwo
            break
        case 'divide':
            result /= numTwo
            break
        case 'add':
            result += numTwo
            break
        case 'subtract':
            result -= numTwo
            break
    }
    console.log(result);
}

simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')
   