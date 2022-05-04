function solve(arr1, arr2){
    let newArr = []
    for (let i = 0; i < arr1.length; i++){
        if (i % 2 == 0){
            let n1 = Number(arr1[i])
            let n2 = Number(arr2[i])
            let sumOf = n1 + n2
            newArr.push(sumOf)
        }
        else{
            let concStr = arr1[i] + arr2[i]
            newArr.push(concStr)
        }

    }
    console.log(newArr.join(' - '))
}

solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)