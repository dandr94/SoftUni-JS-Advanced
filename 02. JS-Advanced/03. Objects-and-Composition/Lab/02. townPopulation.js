function solve(arr){
    let data = {}

    for (const el of arr){
        let [town, population] = el.split(' <-> ')
        
        if (!(data.hasOwnProperty(town))){
            data[town] = 0
        }

        data[town] += Number(population)
    }

    for (let [town, population] of Object.entries(data)){
        console.log(`${town} : ${population}`)
    }
}


solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)