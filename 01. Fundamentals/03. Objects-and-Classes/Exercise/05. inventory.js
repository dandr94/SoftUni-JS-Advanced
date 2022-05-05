function solve(arr){
    let heroes = []
    for (const currentLine of arr){
        let [heroName, heroLevel, heroItems] = currentLine.split(' / ')
        heroLevel = Number(heroLevel)
        heroItems = heroItems.split(', ').sort( (a,b) => a.localeCompare(b)).join(', ')
        
        let hero = {
            'heroName': heroName,
            'heroLevel': heroLevel,
            'heroItems': heroItems
        }
        heroes.push(hero)
    }
    heroes.sort( (a, b) => a.heroLevel - b.heroLevel)
    .forEach( hero => {
        console.log(`Hero: ${hero.heroName}`)
        console.log(`level => ${hero.heroLevel}`)
        console.log(`items => ${hero.heroItems}`)
    })
}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )