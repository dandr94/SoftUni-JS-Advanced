function occurrences(arr){
    let result = {}

    for (let data of arr){
        if(!(result.hasOwnProperty(data))){
            result[data] = 0
        } 
        result[data] += 1
    }

    let sortedResult = Object.entries(result).sort( (a, b) => b[1] - a[1])

    for (let [word, quantity] of sortedResult){
        console.log(`${word} -> ${quantity} times`)
    }
}


occurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])