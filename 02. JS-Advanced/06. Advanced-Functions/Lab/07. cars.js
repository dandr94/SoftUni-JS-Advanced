function solve(arr){
    let result = {}

    let listOfCmds = {
        create: (nameOne, inherits, nameTwo) => 
        (result[nameOne] = inherits ? Object.create(result[nameTwo]) : {}),
        set: (name, key, value) => result[name][key] = value,
        print: name => {
            let printResult = []
            for (const key in result[name]){
                printResult.push(`${key}:${result[name][key]}`)
            };
            console.log(printResult.join())
        }
    }

    arr.forEach( element => {
        let [cmd, name, type, value] = element.split(' ')
        listOfCmds[cmd](name, type, value)
    })
}


['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
