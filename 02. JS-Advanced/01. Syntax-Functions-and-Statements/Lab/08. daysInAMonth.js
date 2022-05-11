function daysInAMonth(numberMonth, year){
    let result = new Date(year, numberMonth, 0).getDate()
    console.log(result)
}

daysInAMonth(1, 2012)
daysInAMonth(2, 2021)