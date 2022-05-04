function solve(arr){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }
    let nTimes = arr.shift()
    let suffix = arr.pop()
    let songs = []
    for (let i = 0; i < nTimes; i++){
        let [prefix, songName, songDuration] = arr[i].split('_')
        songs.push(new Song(prefix, songName, songDuration))     
    }

    for (let song of songs){
        if (song.typeList == suffix){
            console.log(song.name)
        }
    }
}

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    
    )


