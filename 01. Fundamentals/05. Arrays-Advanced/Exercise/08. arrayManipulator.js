function arrayManipulator(numbersArr, cmdsArr){
    for (let i = 0; i < cmdsArr.length; i ++){
        let tokens = cmdsArr[i].split(' ')  
        let command = tokens[0]
        switch(command) {
            case 'add':
                let index = Number(tokens[1])
                let element = Number(tokens[2])
                numbersArr.splice(index, 0, element)
                break
            
            case 'addMany':
                let index = tokens[1]
                let numbers = tokens.slice(2).map(Number)
                console.log(numbers)

        }
    }            
    
}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    
    )