function revealWords(words, sentence){
    words = words.split(', ')
    for (let word of words){
        sentence = sentence.replace(word, "*".repeat(word.length))
    }

    console.log(sentence)
}

revealWords('great',
'softuni is ***** place for learning new programming languages'
)

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)