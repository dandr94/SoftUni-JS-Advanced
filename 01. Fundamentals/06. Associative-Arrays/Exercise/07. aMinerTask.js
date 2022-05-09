function resources(arr){
    let allResources = {}


    for (let i = 0; i < arr.length; i+=2){
        let resource = arr[i]
        let quantity = Number(arr[i + 1])

        if (!(allResources[resource])){
            allResources[resource] = 0
        }

        allResources[resource] += quantity

    }

    for (let [key, value] of Object.entries(allResources)){
        console.log(`${key} -> ${value}`)
    }
}


resources([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )