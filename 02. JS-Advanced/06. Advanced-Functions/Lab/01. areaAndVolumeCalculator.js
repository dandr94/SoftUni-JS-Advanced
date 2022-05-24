function solve(area, vol, input) {
    return JSON.parse(input).reduce( (a, v) => {
        a.push({
            area: area.call(v),
            volume: vol.call(v)
        })
        return a 
    }, [])   
}



