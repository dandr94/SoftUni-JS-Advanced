function wordsUppercase(str){
    let regex = /\w+/g
    let result = str.match(regex).join(', ').toUpperCase()
    console.log(result)
    
}


wordsUppercase('Hi, how are you?')
wordsUppercase('hello')