function firstAndLastKNumber(arr){
    let nTimes = arr.shift()
    let firstElements = arr.slice(0, nTimes)
    let lastElements = arr.slice(arr.length - 1 -nTimes + 1)
    console.log(firstElements.join(' '))
    console.log(lastElements.join(' '))
    
}


firstAndLastKNumber([2, 
    7, 8, 9]
    )

firstAndLastKNumber([3,
    6, 7, 8, 9]
   )