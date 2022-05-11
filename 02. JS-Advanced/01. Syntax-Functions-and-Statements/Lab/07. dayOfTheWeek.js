function dayOfTheWeek(str){
    let days = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    }

    if (days.hasOwnProperty(str)){
        console.log(days[str])
    } else {
        console.log('error')
    }
}

dayOfTheWeek('Monday')
dayOfTheWeek('Friday')
dayOfTheWeek('Invalid')