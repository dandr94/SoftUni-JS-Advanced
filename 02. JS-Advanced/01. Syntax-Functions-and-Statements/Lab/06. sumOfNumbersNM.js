function sum(n, m){
    let result = 0
    n = Number(n)
    m = Number(m)

    for (let i = n; i <= m; i++){
        result += i
    }

    console.log(result)
}

sum('1', '5' )
sum('-8', '20')