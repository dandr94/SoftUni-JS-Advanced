function biggestElement(arr){
    let result = 0
    for (const data of arr){
        let max = Math.max(...data)

        if (max > result){
            result = max
        }
    }
    console.log(result)
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]
   )

biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )