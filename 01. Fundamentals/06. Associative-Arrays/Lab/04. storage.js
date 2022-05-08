function storage(arr){
    let result = new Map()
    for (let data of arr){
        let tokens = data.split(' ')
        let product = tokens[0]
        let quantity = Number(tokens[1])
        if (result.has(product)){
            let productQuantity = result.get(product)
            let newQuantity = quantity + productQuantity
            result.set(product, newQuantity)
        } else {
            result.set(product, quantity)
        }

    }
    for (let [product, quantity] of result){
        console.log(`${product} -> ${quantity}`)
    }   
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
)