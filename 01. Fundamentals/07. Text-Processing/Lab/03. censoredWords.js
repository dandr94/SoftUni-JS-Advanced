function solve(str, consoredWord){
    let result = str.replace(consoredWord, '*'.repeat(consoredWord.length))
    console.log(result)
}

solve('A small sentence with some words', 'small')
solve('Find the hidden word', 'hidden')