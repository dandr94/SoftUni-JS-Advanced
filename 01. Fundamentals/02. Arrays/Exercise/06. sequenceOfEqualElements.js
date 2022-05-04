function solve(arr){
    let finalResult = []
    while (arr.length > 0){
        let dummy = []
        let currElement = arr.shift()
        dummy.push(currElement)
        for (let i = 0; i < arr.length; i++){
            if (currElement == arr[i]){
                dummy.push(arr[i])
            }
            else{
                break
            }
        }if (dummy.length > finalResult.length){
            finalResult = dummy
        }              
    }
    console.log(finalResult.join(' '))
}   
solve([0, 1, 1, 5, 2, 2, 6, 3, 3])