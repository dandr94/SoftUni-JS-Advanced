function previousDay(year, month, day){
    let dateInput = `${year}-${month}-${day}`
    let yesterday = new Date(dateInput)
    yesterday.setDate(yesterday.getDate() - 1)
    console.log(`${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`)
   
}


previousDay(2016, 9, 30)
previousDay(2016, 10, 1)