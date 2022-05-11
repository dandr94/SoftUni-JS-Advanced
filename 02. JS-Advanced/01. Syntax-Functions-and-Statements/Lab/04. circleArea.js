function circleArea(input){
    if (isNaN(input)){
        return console.log(`We can not calculate the circle area, because we receive a ${input}.`)
    }

    let area = (Math.PI * Math.pow(input, 2)).toFixed(2)

    console.log(area)
}


circleArea(5)
circleArea('name')