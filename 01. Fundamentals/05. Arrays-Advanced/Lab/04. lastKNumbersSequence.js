function lastKNumbers(n, k){
    let myNumbers = [1]

    for (let i = 0 ; i < n -1 ; i ++){
        let lastKNumbers = myNumbers.slice(-k)
        let sumOfLastK = lastKNumbers.reduce((a,b) => a + b)
        myNumbers.push(sumOfLastK)
    }

    console.log(myNumbers.join(' '))
}


lastKNumbers(6, 3)
lastKNumbers(8, 2)