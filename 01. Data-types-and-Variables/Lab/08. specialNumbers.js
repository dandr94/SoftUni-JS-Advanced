function solve(num){
    for (let i = 1; i <= num; i++){
        let sum_of_digits = 0
        let digits = i

        while (digits > 0){
            sum_of_digits += digits % 10
            digits = parseInt(digits/10)
        }

        if (sum_of_digits == 5 || sum_of_digits == 7 || sum_of_digits == 11){
            console.log(`${i} -> True`)
        } else{
            console.log(`${i} -> False`)
        }
        
    }
}

solve(15)