function arrayManipulation(arr){
    let myNumbers = (arr[0].split(' ')).map(Number)
    
    for (let i = 1; i < arr.length; i++){
        let [cmd, numOne, numTwo] = arr[i].split(' ')
        
        if (cmd == 'Add'){
            myNumbers.push(numOne)
        } else if (cmd == 'Remove'){
            myNumbers = myNumbers.filter(el => el != numOne)
        } else if (cmd == 'RemoveAt'){
            myNumbers.splice(numOne, 1)
        } else if (cmd == 'Insert'){
            myNumbers.splice(numTwo, 0, numOne)
        }
    }
    
    console.log(myNumbers.join(' '))

    
}

arrayManipulation(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)

arrayManipulation(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)