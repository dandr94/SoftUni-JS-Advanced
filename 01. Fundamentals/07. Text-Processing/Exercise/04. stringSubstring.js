function substring(word, text){
    word = word.toLowerCase()
    text = text.split(' ')
    for (let w of text){
        w = w.toLowerCase()

        if (w == word){
            return console.log(w)
        }
    } 
    console.log(`${word} not found!`)
    
}

substring('javascript',
'JavaScript is the best programming language'
)

substring('python',
'JavaScript is the best programming language'
)