function countStringOccurrences(str, word){
    let count = 0

    for (let w of str.split(' ')){
        if (w == word){
            count += 1
        }
    }
    console.log(count)
}

countStringOccurrences('This is a word and it also is a sentence',
'is'
)
countStringOccurrences('softuni is great place for learning new programming languages',
'softuni'
)