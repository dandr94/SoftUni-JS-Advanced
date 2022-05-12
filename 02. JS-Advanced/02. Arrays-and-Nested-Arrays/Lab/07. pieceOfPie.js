function solve(arr, flavorOne, flavorTwo){
    let flavorOneIndex = arr.indexOf(flavorOne)
    let flavorTwoIndex = arr.indexOf(flavorTwo)
    let newArr = arr.slice(flavorOneIndex, flavorTwoIndex + 1)
    console.log(newArr)
}

solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)

solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)