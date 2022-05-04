function solve(json){
    let convToObj = JSON.parse(json)
    for (let key of Object.keys(convToObj)){
        console.log(`${key}: ${convToObj[key]}`)
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')