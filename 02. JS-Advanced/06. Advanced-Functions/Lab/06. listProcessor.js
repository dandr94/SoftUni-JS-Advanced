function listProcessor(arr){
    let result = []

    let listOfCmds = {
        add: s => result.push(s),
        remove: s => result = result.filter(x => x != s),
        print: () => console.log(result.join())
    }

    arr.forEach(element => {
        let [cmd, value] = element.split(' ')
        listOfCmds[cmd](value)
    });
}


listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])
