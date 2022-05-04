function solve(arr){
    let finalSum = 0

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            finalSum += arr[i]
        }else{
            finalSum -= arr[i]
        }

    }

    console.log(finalSum)
}

solve([2,4,6,8,10])