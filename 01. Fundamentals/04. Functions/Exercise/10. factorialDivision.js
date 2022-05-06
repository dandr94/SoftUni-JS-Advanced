function factorialDivision(numOne, numTwo){
    
    function calculator(num){
        let result = 1
        while (num != 1){
            result *= num
            num -= 1
        }
        return result
    }

    let finalResult = (calculator(numOne) / calculator(numTwo)).toFixed(2)
    
    console.log(finalResult)

}

factorialDivision(5, 2)
factorialDivision(6, 2)