function solve(n, arr){
    let result = []
    for (let i = n - 1; i >= 0; i--){
        result.push(arr[i])
    }

    console.log(result.join(' '))

}

solve(4, [-1, 20, 99, 5])