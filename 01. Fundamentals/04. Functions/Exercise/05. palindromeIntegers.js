function palindromeInteger(arr){  
    function isPalindrome(num){
        let start = num
        let oposite = Number(num.toString().split('').reverse().join(''))
        if (start == oposite){
            return true
        } else {
            return false
        }
    }

    for (let i = 0; i < arr.length; i++){
        let currentNum = arr[i]
        console.log(isPalindrome(currentNum))

    }
}


palindromeInteger([123,323,421,121])
palindromeInteger([32,2,232,1010])