function parkingLot(arr){
    let result = new Set()

    for (let data of arr){
        let [cmd, carNumber] = data.split(', ')
        
        if (cmd == 'IN'){
            result.add(carNumber)
        } else {
            result.delete(carNumber)
        }
    }

    let sorted = Array.from(result)
    sorted.sort()

    for (let car of sorted){
        console.log(car)
    }

    
}


parkingLot(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)