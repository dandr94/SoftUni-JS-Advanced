function schoolGrades(arr){
    let result = new Map()

    for (let data of arr){
        let tokens = data.split(' ')
        let name = tokens.shift()
        let grades = tokens.map(Number)

        if (!(result.has(name))){
            result.set(name, [])
        }

        let getStudent = result.get(name)
        for (let grade of grades){
            getStudent.push(grade)
        }
    }

    let sortedResult = Array.from(result)
    sortedResult.sort()

    for (let [name, grades] of sortedResult){
        let sumOfGrades = grades.reduce( (a, b) => a + b)
        let averageGrade = sumOfGrades / grades.length
        console.log(`${name}: ${averageGrade.toFixed(2)}`)
    }
}


schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
)