function solve(arr1, arr2){
    arr1 = Array.from(arr1, Number)
    arr2 = Array.from(arr2, Number)
    let finalSum = 0
    let failed = false

    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            failed = true
            break
        }
        else{
            finalSum += arr1[i]
        }
    }

    if (failed == false){
        console.log(`Arrays are identical. Sum: ${finalSum}`)
    }

    

}

solve(['1'], ['10'])