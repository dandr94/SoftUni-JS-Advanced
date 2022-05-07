function solve(arr){
    let myWagon = arr.shift().split(' ').map(Number)
    let maxCapacity = Number(arr.shift())

    for (let el of arr){
        if (el.includes('Add')){
            let passengers = el.split(' ')[1]
            myWagon.push(Number(passengers))    
        } else {
            for (let i = 0; i < myWagon.length; i++){
                let passengers = Number(el)
                if (myWagon[i] + passengers <= maxCapacity){
                    myWagon[i] += passengers
                    break
                }
            }
        }
    }
    console.log(myWagon.join(' '))
}


solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)

solve(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)