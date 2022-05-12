function processOddPositions(arr){
    let myArr = []

    for (let i = 0; i < arr.length; i++){
        if (i % 2 != 0){
            myArr.unshift(arr[i] * 2)
        }
    }

    console.log(myArr.join(' '))
}

processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])