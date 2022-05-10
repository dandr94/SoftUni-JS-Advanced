function matchDates(strDates){
    let regex = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g
    let result = strDates.matchAll(regex)
    
    for (let res of result){
        let day = res.groups['day']
        let month = res.groups['month']
        let year = res.groups['year']
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }

}

matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")