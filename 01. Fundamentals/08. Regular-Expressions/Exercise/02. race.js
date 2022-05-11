function race(arr){
    let racers = {}
    let name = arr.shift().split(', ')

    for (const data of arr){
        if (data != 'end of race'){
            let namePattern = /[A-Z]+/gi
            let distancePattern = /\d/g
            let racerName = data.match(namePattern).join('')
            let distance = data.match(distancePattern).map(Number).reduce( (a, b) => a + b)
            
            if (name.includes(racerName)){
                if (racers.hasOwnProperty(racerName)){
                    racers[racerName] += distance
                } else {
                    racers[racerName] = distance
                }
            }
        }

        
    }
    let sorted = Object.keys(racers).sort( (a, b) => racers[b] - racers[a])
    console.log(`1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`)
    
}


race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
)