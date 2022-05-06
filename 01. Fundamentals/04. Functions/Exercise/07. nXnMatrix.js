function printNxNMatrix(num){
    let myMatrix = ((num+ ' ').repeat(num) + '\n').repeat(num)
    console.log(myMatrix)
}


printNxNMatrix(3)
printNxNMatrix(7)
printNxNMatrix(2)