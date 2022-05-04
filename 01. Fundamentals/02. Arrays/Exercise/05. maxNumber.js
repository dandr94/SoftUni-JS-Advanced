function solve(arr){
    let myArr = []
    
    while (arr.length > 0){
        let currElement = arr.shift()
        let isBigger = true
        for (let i = 0; i < arr.length; i++){
            if (arr[i] >= currElement){
                isBigger = false
                break
            }
        }if (isBigger == true){
            myArr.push(currElement)
        }
    }
    console.log(myArr.join(' '))
}   

solve([27, 19, 42, 2, 13, 45, 48])