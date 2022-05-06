function sumFirstAndLastNum(arr){
    arr = arr.map(Number)
    let firstNum = arr.shift()
    let lastNum = arr.pop()
    let result = firstNum + lastNum
    console.log(result)
}

sumFirstAndLastNum(['20', '30', '40'])