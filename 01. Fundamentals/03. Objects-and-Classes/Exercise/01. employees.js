function solve(arr){
    class Employee{
        constructor(name){
            this.name = name
            this.personalNumber = name.length
        }
        info(){
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`)
        }
    }

    
    for (let employee of arr){
        let employeeObj = new Employee(employee)
        employeeObj.info()
    }


}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )