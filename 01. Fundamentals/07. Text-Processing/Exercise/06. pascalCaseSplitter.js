function pascalCase(text){
    let myWords = []
    let myWord = ''
    for (let i = 0; i < text.length; i++){
        let letter = text[i]

        if (i == 0){
            myWord += letter
        } else if (text[i] == text[i].toLowerCase()){
            myWord += letter
        } else {
            myWords.push(myWord)
            myWord = letter
        }
    }
    myWords.push(myWord)
    console.log(myWords.join(', '))
}


pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCase('HoldTheDoor')
pascalCase('ThisIsSoAnnoyingToDo')