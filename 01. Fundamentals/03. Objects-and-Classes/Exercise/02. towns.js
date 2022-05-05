function solve(arr){
    for (let i = 0; i < arr.length; i++){
        let [townName, latitude, longitude] = arr[i].split(' | ')
        latitude = Number(latitude)
        longitude = Number(longitude)
        let townData = {
            'town': townName,
            'latitude': latitude.toFixed(2),
            'longitude': longitude.toFixed(2)
        }
        console.log(townData)
    }
}


solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)