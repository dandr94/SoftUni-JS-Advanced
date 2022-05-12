function sameNumbers(num){
    num = String(num)
    let arr = []
    for (let i = 0; i < num.length; i++){
        arr.push(Number(num[i]))
    }

    const allEqual = (arr) => arr.every( val => val === arr[0])
    let result = arr.reduce( (a, b) => a + b)

    console.log(allEqual(arr))
    console.log(result)
    
    
    


}

sameNumbers(2222222)
sameNumbers(1234)
sameNumbers(3333)