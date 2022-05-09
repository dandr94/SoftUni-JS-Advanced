function cardGame(arr){
    let players = {}

    let cardSuits = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4
    }

    let cardPower = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }


    for (let data of arr){
        let [playerName, playerCards] = data.split(': ')
        playerCards = playerCards.split(', ')
        
        if (!(players.hasOwnProperty(playerName))){
            players[playerName] = new Set()
        }

        for (let card of playerCards){
            players[playerName].add(card)
        }
    }

    for (let [playerName, playerCards] of Object.entries(players)){
        let sumPower = 0


        for (let card of playerCards){
            let suitPower = cardSuits[card.slice(-1)]
            let numPower = cardPower[card[0]]


            sumPower += suitPower * numPower
                        
        }
        console.log(`${playerName}: ${sumPower}`)
    }
}


cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    )