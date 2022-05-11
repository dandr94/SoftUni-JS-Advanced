function stringLength(strOne, strTwo, strThree){
    let sumOfLength = strOne.length + strTwo.length + strThree.length
    let average = Math.floor(sumOfLength / 3)
    console.log(`${sumOfLength}\n${average}`)

    
    
}


stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')