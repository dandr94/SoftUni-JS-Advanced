function solve(shopStock, orderedProducts){
    let stock = {}

    for (let i = 0; i < shopStock.length - 1; i+=2){
        let productName = shopStock[i]
        let productQuantity = Number(shopStock[i + 1])
        stock[productName] = productQuantity
    }

    for (let i = 0; i < orderedProducts.length; i+=2){
        let productName = orderedProducts[i]
        let productQuantity = Number(orderedProducts[i + 1])
        if (productName in stock){
            stock[productName] += productQuantity
        }else{
            stock[productName] = productQuantity
        }
    }
    
    for (let product of Object.keys(stock)){
        console.log(`${product} -> ${stock[product]}`)
    }

}



solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )