function solve(name, lastName, hairColor){
    let myData = {
        name,
        lastName,
        hairColor
    }

    let convToJSON = JSON.stringify(myData)
    console.log(convToJSON)
}


solve('George',
'Jones',
'Brown'
)