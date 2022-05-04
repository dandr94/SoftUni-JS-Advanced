function solve(n, operator, n2){
    let result = n
    if (operator == '+'){
        result += n2
    }
    else if(operator == '-'){
        result -= n2
    }
    else if(operator == '*'){
        result *= n2
    }
    else if(n2 != 0 && operator == '/'){
        result /= n2
    }
    else{
        return console.log('Division by zero')
    }

    console.log(result.toFixed(2))
}

solve(25.5,
    '/',
    2
    
    )