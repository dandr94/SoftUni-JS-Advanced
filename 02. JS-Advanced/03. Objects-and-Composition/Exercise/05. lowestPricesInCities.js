function solve(arr){
    let result = {}

    for (let data of arr){
        let [townName, productName, productPrice] = data.split(' | ')
        productPrice = Number(productPrice)

        if (!(result.hasOwnProperty(productName))){
            result[productName] = [productPrice, townName]
        } else if (result[productName][0] > productPrice) {
                result[productName][0] = productPrice
                result[productName][1] = townName
            }
        }
    let entries = Object.entries(result)
    for (let [key, value] of entries){
        console.log(`${key} -> ${value[0]} (${value[1]})`)
    }
}



solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)