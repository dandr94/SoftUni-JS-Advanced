function solve(arr, n){

    while (arr.length > 0){
        let currElement = arr.shift()
        for (let i = 0 ; i < arr.length; i++){
            if (currElement + arr[i] === n){
                console.log(currElement, arr[i])
            }
        }
    }
}


solve([1, 2, 3, 4, 5, 6],
    6
    
    
    )