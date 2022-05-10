function replaceRepeatingChars(text){
    let result = ''
    let lastChar = ''
    for (let letter of text){
        if (letter != lastChar){
            result += letter
            lastChar = letter
        }
    }
    console.log(result)
}


replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
replaceRepeatingChars('qqqwerqwecccwd')