function solve(arr){
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

solve([7, -2, 8, 9])
solve([3, -2, 0, -1])