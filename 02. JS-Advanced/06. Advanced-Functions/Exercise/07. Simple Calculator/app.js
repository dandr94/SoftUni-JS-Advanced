function calculator() {
    let s1 = ''
    let s2 = ''
    let result = ''

    const calc = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    }


    function calcResult (numOne, numTwo, operator){
        return calc[operator](Number(numOne), Number(numTwo))
    }

    return {
        init: (selector1, selector2, resultSelector) => {
            s1 = document.querySelector(selector1)
            s2 = document.querySelector(selector2)
            result = document.querySelector(resultSelector)
        },
        add: () => {
            result.value = calcResult(s1.value, s2.value, '+') 
        },
        subtract: () => {
            result.value = calcResult(s1.value, s2.value, '-')
        }
    }
}




