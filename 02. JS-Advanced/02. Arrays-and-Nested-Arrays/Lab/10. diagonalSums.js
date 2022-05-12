function diagonalSums(arr){
    let primaryDiagonalSum = 0
    let secondaryDiagonalSum = 0

    for (let i = 0; i < arr.length; i++){
        primaryDiagonalSum += arr[i][i]
        secondaryDiagonalSum += arr[i][arr.length - i - 1]
    }
    console.log(primaryDiagonalSum + ' ' + secondaryDiagonalSum)
    
}


diagonalSums([[20, 40], [10, 60]])
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])