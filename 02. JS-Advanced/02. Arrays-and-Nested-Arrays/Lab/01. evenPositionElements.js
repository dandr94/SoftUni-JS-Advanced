function evenPositionElements(arr){
    let evenElements = []
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            evenElements.push(arr[i])
        }
    }
    console.log(evenElements.join(' '))
}

evenPositionElements(['20', '30', '40', '50', '60'])
evenPositionElements(['5', '10'])