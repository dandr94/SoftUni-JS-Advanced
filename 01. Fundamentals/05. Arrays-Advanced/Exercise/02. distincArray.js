function removeRepeatingElements(arr){
    let nonDuplicateArray = [...new Set(arr)].join(' ')
    console.log(nonDuplicateArray)
  
}


removeRepeatingElements([1, 2, 3, 4])
removeRepeatingElements([7, 8, 9, 7, 2, 3, 4, 1, 2])
removeRepeatingElements([20, 8, 12, 13, 4, 4, 8, 5])