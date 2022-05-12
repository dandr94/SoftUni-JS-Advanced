function sumFirstLast(arr){
    let firstNumber = Number(arr.shift())
    let lastNumber = Number(arr.pop())
    let result = firstNumber + lastNumber
    console.log(result)
}

sumFirstLast(['20', '30', '40'])
sumFirstLast(['5', '10'])