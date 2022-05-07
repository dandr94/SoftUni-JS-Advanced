function searchForANumber(numbersArr, specialNumbers){
    let takeElements = specialNumbers[0]
    let deleteElements = specialNumbers[1]
    let searchNumber = specialNumbers[2]
    let myArr = numbersArr.slice(0, takeElements)

    myArr = myArr.slice(deleteElements)

    let elementOccurence = [myArr.indexOf(searchForANumber)].length

    console.log(`Number ${searchNumber} occurs ${elementOccurence} times.`)
    



}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    
    )