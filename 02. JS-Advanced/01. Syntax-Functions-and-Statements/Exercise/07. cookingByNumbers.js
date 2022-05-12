function solve(strN, operationOne, operationTwo, operationThree, operationFour, operationFive){
    strN = Number(strN)
    let operations = [operationOne, operationTwo, operationThree, operationFour, operationFive]

    for (const operation of operations){
        
        switch (operation){
            case 'chop':
                strN /= 2
                break
            case 'dice':
                strN = Math.sqrt(strN)
                break
            case 'spice':
                strN += 1
                break
            case 'bake':
                strN *= 3
                break
            case 'fillet':
                strN *= 0.8
        }
        console.log(strN)
    }

}


solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')