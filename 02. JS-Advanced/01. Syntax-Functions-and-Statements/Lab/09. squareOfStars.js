function squareOfStars(n){
    if (!n){
        n = 5
    }
    let star = '* '
    
    for (let i = 0; i < n; i++) {
        console.log(`${(star.repeat(n)).trim()}`)
    }

}



squareOfStars(7)
