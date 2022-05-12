function withinSpeedLimit(speed, area){
    let speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    let speedLimit = speedLimits[area]
    if (speed > speedLimits[area]){
        let difference = speed - speedLimit
        
        if (difference <= 20){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`)
        } else if (difference <= 40){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
        } else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
        }
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)    }
    
}


withinSpeedLimit(40, 'city')
withinSpeedLimit(21, 'residential')
withinSpeedLimit(120, 'interstate')
withinSpeedLimit(200, 'motorway')