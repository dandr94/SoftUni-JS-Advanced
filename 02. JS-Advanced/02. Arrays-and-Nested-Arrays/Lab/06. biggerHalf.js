function biggerHalf(arr){
    arr = arr.sort( (a, b) => a - b)
    let middle = Math.floor(arr.length / 2)
    let newArr = arr.slice(middle)
    console.log(newArr)
}

biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])