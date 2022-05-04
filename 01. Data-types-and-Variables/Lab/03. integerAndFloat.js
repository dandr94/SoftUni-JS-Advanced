function solve(num1, num2, num3){
    let result = num1 + num2 + num3
    
    if (Number.isInteger(result)) {
        console.log(`${result} - Integer`)
    }
    else {
        console.log(`${result} - Float`)
    }

}

solve(100, 200, 303)