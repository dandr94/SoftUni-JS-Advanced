function solve(string, char, string2){
    result = string.replace('_', char)
    if (result == string2){
        console.log('Matched')
    }
    else {
        console.log('Not Matched')
    }
}

solve('Str_ng', 'i', 'String')