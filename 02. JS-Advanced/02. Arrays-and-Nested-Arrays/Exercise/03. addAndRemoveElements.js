function addAndRemove(arr){
    let n = 1
    let myNums = []

    for (const cmd of arr){
        if (cmd == 'add'){
            myNums.push(n)
        } else {
            myNums.pop()
        }
        n += 1
    }
    if (myNums.length > 0){
        console.log(myNums)
    } else {
        console.log('Empty')
    }
}


addAndRemove(['add', 
'add', 
'add', 
'add']
)

addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']
)

addAndRemove(['remove', 
'remove', 
'remove']
)