function meetings(arr){
    let result = {}
    for (let data of arr){
        let tokens = data.split(' ')
        let day = tokens[0]
        let name = tokens[1]

        if (result.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        } else {
            result[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }
    for (let key in result){
        console.log(`${key} -> ${result[key]}`)
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)