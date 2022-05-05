function orders(product, quantity){
    let productPrices = {
        'coffee': 1.50,
        'water': 1,
        'coke': 1.40,
        'snacks': 22
    }

    if (product in productPrices){
        let finalPrice = (productPrices[product] * quantity).toFixed(2)
        console.log(finalPrice)
    }


    
}

orders("water", 5)
orders("coffee", 2)