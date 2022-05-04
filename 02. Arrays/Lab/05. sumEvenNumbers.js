function solve(arr){
    parsedArr = Array.from(arr, Number)
    let result = 0
    for (let i = 0; i < parsedArr.length; i++){
        if (parsedArr[i] % 2 == 0){
            result += parsedArr[i]
        }
    }

    console.log(result)
}

solve(['3','5','7','9'])