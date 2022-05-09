function company(arr){
    let companies = {}


    for (let data of arr){
        let [company, employeeId] = data.split(' -> ')

        if (!(companies[company])){
            companies[company] = new Set()
        }

        companies[company].add(employeeId)
    }

    let sorted = Object.entries(companies).sort()

    for (let [company, employees] of sorted){
        console.log(company)
        employees.forEach(element => {
            console.log(`-- ${element}`)
        });
        
    }
    
}


company([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )

