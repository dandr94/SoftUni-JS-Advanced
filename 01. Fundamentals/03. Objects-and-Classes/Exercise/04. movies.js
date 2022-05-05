function solve(arr){
    let movies = []
    let addMovie = 'addMovie'
    let directedBy = ' directedBy '
    let onDate = ' onDate '
    for (const currentLine of arr){
        if (currentLine.includes(addMovie)){
            let movie = {}
            let movieName = currentLine.substring(9)
            movie['name'] = movieName
            movies.push(movie)
        }else if (currentLine.includes(directedBy)){
            let [movieName, director] = currentLine.split(directedBy)
            let findMovie = movies.find(x => x.name === movieName)
            
            if (findMovie){
                findMovie['director'] = director
            }
        }else if (currentLine.includes(onDate)){
            let [movieName, movieDate] = currentLine.split(onDate)
            let findMovie = movies.find(x => x.name === movieName)         
            if (findMovie){
                findMovie['date'] = movieDate
            }
        }

    }
    movies.forEach( movie => {
        if(movie['name'] && movie['director'] && movie['date']){
            console.log(JSON.stringify(movie))
        }
    })
}


solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )