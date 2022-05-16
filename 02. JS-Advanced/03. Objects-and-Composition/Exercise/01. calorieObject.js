function solve(arr){
    let data = {}

    for (let i = 0; i < arr.length; i+=2){
        let food = arr[i]
        let calories = Number(arr[i + 1])

        if (!(data.hasOwnProperty(food))){
            data[food] = 0
        }

        data[food] += calories
    }

    console.log(data)
    
}


solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])