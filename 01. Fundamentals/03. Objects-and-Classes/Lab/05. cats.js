function solve(arr){
    class Cat{
        constructor(name, age){
            this.name = name
            this.age = age
            
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let c of arr){
        let [catName, catAge] = c.split(' ')
        let objCat = new Cat(catName, catAge)
        c.meow()
    }
}

solve(['Mellow 2', 'Tom 5'])