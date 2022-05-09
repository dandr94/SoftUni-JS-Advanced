function wordsTracker(arr){
    let myWords = arr.shift().split(' ')
    let words = {}
    
    for (let word of myWords){
        words[word] = 0
    }

    for (let word of arr){
        if (words.hasOwnProperty(word)){
            words[word] += 1
        }
    }
    

    let sortedWords = Object.entries(words).sort( (a, b) => b[1] - a[1])
    for (let word of sortedWords){
        console.log(`${word[0]} - ${word[1]}`)
    }
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )

wordsTracker([
'is the', 
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)