function aggregateElements(arr){
    let sumOfElements = arr.reduce( (a, b) => a + b)
    let sumOfInverseElements = arr.reduce( (a, b) => a + 1 / b, 0)
    let concElements = arr.join('')

    console.log(`${sumOfElements}\n${sumOfInverseElements}\n${concElements}`)

    
}

aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])