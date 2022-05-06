function addAndSubtract(numOne, numTwo, numThree){
    function sum(firstNum, secondNum){
        return firstNum + secondNum
    }
    
    let subtract = (sumResult, thirdNumber) => sumResult - thirdNumber
    let result = sum(numOne, numTwo)
    let final = subtract(result, numThree)
    console.log(final)
}


addAndSubtract(23,
    6,
    10
    )

addAndSubtract(1,
    17,
    30
    )

addAndSubtract(42,
    58,
    100
    )