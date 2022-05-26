function solution(){
    function microElements(protein, carbohydrate, fat, flavour){
        return {
        protein,
        carbohydrate,
        fat,
        flavour
        }
    }

    const recipes = {
        apple: microElements(0, 1, 0, 2),
        lemonade: microElements(0, 10, 0, 20),
        burger: microElements(0, 5, 7, 3),
        eggs: microElements(5, 0, 1, 1),
        turkey: microElements(10, 10, 10, 10)
    }

    const availableMicroElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0

    }

    function restock(microElement, quantity){
        availableMicroElements[microElement] += quantity
        return 'Success'
    }

    function prepare(recipe, quantity){
        const neededForRecipe = Object.entries(recipes[recipe]).map(e => [
            e[0],
            e[1] * quantity,
        ])

        for (let data of neededForRecipe) {
            let [microElement, quantity] = data
            if (availableMicroElements[microElement] - quantity < 0){
                return `Error: not enough ${microElement} in stock`
            }
        }

        neededForRecipe.forEach( ([microElement, quantity]) => 
            availableMicroElements[microElement] -= quantity)
        return 'Success'
    }

    function report(){
        return Object.entries(availableMicroElements)
        .map( ([microElement, quantity]) => `${microElement}=${quantity}`)
        .join(' ')

    }

    return (str) => {
        let [cmd, recipe, quantity] = str.split(' ')
        quantity = Number(quantity)
        if (cmd == 'restock'){
            return restock(recipe, quantity)
        } else if (cmd == 'prepare'){
            return prepare(recipe, quantity)
        } else {
            return report()
        }
    }
}


let manager = solution (); 
console.log (manager ("restock flavour 50"))
console.log (manager ("prepare lemonade 4"))
console.log (manager ("restock carbohydrate 10"))
console.log (manager ("restock flavour 10"))
console.log (manager ("prepare apple 1"))
console.log (manager ("restock fat 10"))
console.log (manager ("prepare burger 1"))
console.log (manager ("report"))

