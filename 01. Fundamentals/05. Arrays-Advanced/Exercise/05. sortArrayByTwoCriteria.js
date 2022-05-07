function sortArray(arr){
    arr = arr.sort( (x, y) => x.length - y.length || x.localeCompare(y))
    console.log(arr.join('\n'))
}


sortArray(['alpha', 'beta', 'gamma'])
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])