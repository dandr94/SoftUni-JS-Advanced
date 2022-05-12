function calculateWalkTime(steps, lengthMeters, speedKmh){
    let distance = steps * lengthMeters
    let movespeed = speedKmh * 1000 / 3600
    let restTime = Math.floor(distance / 500) * 60
    let timeToComplete = (distance / movespeed) + restTime

    let hours = Math.floor(timeToComplete / 3600).toFixed(0).padStart(2, '0')
    let minutes = Math.floor(timeToComplete / 60).toFixed(0).padStart(2, '0')
    let seconds = (timeToComplete % 60).toFixed(0).padStart(2, '0')

    console.log(`${hours}:${minutes}:${seconds}`)
}


calculateWalkTime(4000, 0.60, 5)
calculateWalkTime(2564, 0.70, 5.5)