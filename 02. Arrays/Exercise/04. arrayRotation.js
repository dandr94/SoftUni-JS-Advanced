function solve(arr, n){

    for (let i = 0; i < n; i++){
        let shiftElement = arr.shift()
        arr.push(shiftElement)
    }

    console.log(arr.join(' '))

}


solve([2, 4, 15, 31], 5)