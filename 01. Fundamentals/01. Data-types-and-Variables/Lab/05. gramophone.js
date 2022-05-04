function solve(nameOfBand, album, song){
    len = (album.length * nameOfBand.length) * song.length / 2
    result = Math.ceil(len / 2.5)
    console.log(`The plate was rotated ${result} times.`)
}

solve('Black Sabbath', 'Paranoid', 'War Pigs')