function sorting(arr){
    arr = arr.sort( (x, y) => y - x)
    let result = []

    while (arr.length > 0){
        let maxNum = arr.shift()
        let minNum = arr.pop()
        result.push(maxNum)
        result.push(minNum)
    }
    console.log(result.join(' '))
}
    

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])