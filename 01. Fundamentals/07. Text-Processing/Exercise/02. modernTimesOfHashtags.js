function hashtag(str){
    let myWords = []
    str = str.split(' ')
    for (let word of str){
        if (word[0] == '#' && word.length > 1){
            myWords.push(word.slice(1,))
        }
    }

    console.log(myWords.join('\n'))
}


hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')
hashtag('The symbol # is known #variously in English-speaking #regions as the #number sign')