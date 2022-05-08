function addressBook(arr){
    let result = {}
    for (let data of arr){
        let tokens = data.split(':')
        let name = tokens[0]
        let address = tokens[1]

        result[name] = address
    }

    let sorted = Object.entries(result)
    sorted.sort( (a, b) => a[0].localeCompare(b[0]))
    for (let data of sorted){
        console.log(`${data[0]} -> ${data[1]}`)
    }
}


addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)