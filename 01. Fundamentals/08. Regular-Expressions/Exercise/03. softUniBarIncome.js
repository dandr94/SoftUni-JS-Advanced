function income(arr){
    let totalIncome = 0

    for (const data of arr){
        if (data == 'end of shift'){
            break
        }

        let pattern = /\%(?<customer>[A-Z][a-z]+)\%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.]*?(?<price>\d+([.]\d+)?)\$/gm
        let result = pattern.exec(data)
        if (result){
            let customer = result.groups.customer
            let product = result.groups.product
            let price = Number(result.groups.price)
            let quantity = Number(result.groups.quantity)
            let totalSum = price * quantity
            totalIncome += totalSum
            console.log(`${customer}: ${product} - ${totalSum.toFixed(2)}`)
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}

income(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
)

income(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)