function solve(arr){
    let oldArr = arr
    let sumOldArr = 0
    let sumNewArr = 0

    for (let i = 0; i < arr.length; i++){
        sumOldArr += arr[i]
        if (arr[i] % 2 == 0){
            arr[i] += i
        }else{
            arr[i] -= i
        }

        sumNewArr += arr[i]
    }

    console.log(oldArr)
    console.log(sumOldArr)
    console.log(sumNewArr)
}


solve([-5, 11, 3, 0, 2])