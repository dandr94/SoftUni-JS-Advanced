function phoneBook(arr){
    let phoneBookObj = {}
    for (let data of arr){
        let tokens = data.split(' ')
        let name = tokens[0]
        let phoneNumber = tokens[1]
        phoneBookObj[name] = phoneNumber
    }

    for (let key in phoneBookObj){
        console.log(`${key} -> ${phoneBookObj[key]}`)
    }
}


phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
)