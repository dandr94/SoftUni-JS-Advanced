function solve(num){
    for (let i = 0; i < num; i++){
        let letter1 = String.fromCharCode(97 + i)
        for (let o = 0; o < num; o++){
            let letter2 = String.fromCharCode(97 + o)
            for (let p = 0; p < num; p++){
                let letter3 = String.fromCharCode(97 + p)
                console.log(`${letter1}${letter2}${letter3}`)
            }
        }
    }
}

solve(3)