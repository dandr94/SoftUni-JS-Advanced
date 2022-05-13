function sortNumbers(arr){
    arr = arr.sort( (x, y) => y - x)
    let result = []

    while (arr.length > 0){
        let maxNum = arr.shift()
        let minNum = arr.pop()
        result.push(minNum)
        result.push(maxNum)
    }
    console.log(result)
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])