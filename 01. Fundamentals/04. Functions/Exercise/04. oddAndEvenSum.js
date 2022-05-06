function oddAndEvenSum(num){
    num = String(num)

    function totalOddSum(num){
        let oddSum = 0
        for (let i = 0; i < num.length; i++){        
            let myNum = Number(num[i])
            if (myNum % 2 != 0){
                oddSum += myNum
            }       
        }
        return oddSum
    }

    function totalEvenSum(num){
        let evenSum = 0
        for (let i = 0; i < num.length; i++){
            let myNum = Number(num[i])
            if (myNum % 2 == 0){
                evenSum += myNum
            }
        }
        return evenSum       
    }

    console.log(`Odd sum = ${totalOddSum(num)}, Even sum = ${totalEvenSum(num)}`)
}


oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)