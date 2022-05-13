function solve(arr, n){
    let result = []

    for (let i = 0; i < arr.length; i++){
        if (i % n == 0){
            result.push(arr[i])
        }
    }

    console.log(result)
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)

solve(['dsa',
'asd', 
'test', 
'tset'], 
2
)

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
)