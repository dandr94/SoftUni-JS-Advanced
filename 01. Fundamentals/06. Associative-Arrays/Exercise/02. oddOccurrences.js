function oddOccurrences(arr){
    let myWords = arr.toLowerCase().split(' ')
    let words = {}
    
    for (let word of myWords){
        if (!(words.hasOwnProperty(word))){
            words[word] = 0
        }
        words[word] += 1
    }

    let data = []
    for (let [word, count] of Object.entries(words)){
        if (count % 2 != 0){
            data.push(word)
        }
    }
    console.log(data.join(' '))
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')