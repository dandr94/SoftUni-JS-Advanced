function add(num){
    let sum = 0

    function innerSum(n){
        sum += n
        return innerSum
    }

    innerSum.toString = () => sum
    return innerSum(num)
}


console.log(add(1).toString())
console.log(add(1)(6)(-3).toString())