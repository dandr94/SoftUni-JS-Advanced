function solve(n){
    n = n.toString()
    let sum_of_digits = 0

    for (let i = 0 ; i < n.length; i++){
        sum_of_digits += Number(n[i])
    }
    console.log(sum_of_digits)
}

solve(97561)