function solve(arr) {
    let myArr = []

    for (const num of arr){
        let currMaxNum = Math.max(...myArr)
        if (num >= currMaxNum){
            myArr.push(num)
        }
    }

    console.log(myArr)
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);

solve([1, 2, 3, 4]);

solve([20, 3, 2, 15, 6, 1]);
