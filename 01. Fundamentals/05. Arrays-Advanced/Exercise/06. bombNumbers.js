function bombNumbers(numbersArr, bombArr){
    let specialBomb = bombArr[0]
    let bombPower = bombArr[1]
    let findBomb = numbersArr.indexOf(specialBomb)
    
    while (findBomb != -1){
        let start = Math.max(0, findBomb - bombPower)
        let explosionLength = bombPower * 2 + 1
        numbersArr.splice(start, explosionLength)
        findBomb = numbersArr.indexOf(specialBomb)
    }
    
    let sumOfArr = numbersArr.reduce( (x, y) => x + y)
    console.log(sumOfArr)
}


bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    )
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    )
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
    )

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    )