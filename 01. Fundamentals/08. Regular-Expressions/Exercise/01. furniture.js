function solve(arr){
    let totalSum = 0
    console.log('Bought furniture:')

    for (const data of arr){
        if (data == 'Purchase'){
            break
        }
        let pattern = />>(?<furniture>[A-Za-z\s]+)<<(?<price>\d+.\d+)!(?<quantity>\d+)/g
        let result = pattern.exec(data)
        if (result){
            let furniture = result.groups.furniture
            let furniturePrice = Number(result.groups.price)
            let furnitureQuantity = Number(result.groups.quantity)
            totalSum += furniturePrice * furnitureQuantity
            console.log(furniture)

        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}

solve(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)

solve(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
)

solve(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']
)