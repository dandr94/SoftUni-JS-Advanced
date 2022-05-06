function negativeOrPositive(arr){
    arr = arr.map(Number)
    let myArr = []

    for (let num of arr){
        if(num < 0){
            myArr.unshift(num)
        } else {
            myArr.push(num)
        }
    }

    myArr.forEach( x => console.log(x))
    
}


negativeOrPositive(['7', '-2', '8', '9'])
negativeOrPositive(['3', '-2', '0', '-1'])