function partyTime(arr){
    let vipInvites = new Set()
    let normalInvites = new Set()
    while (arr[0] != 'PARTY'){
        let guest = arr.shift()

        if (Number.isNaN(Number(guest[0]))){
            normalInvites.add(guest)
        } else {
            vipInvites.add(guest)
        }
    }

    for (let guest of arr){
        normalInvites.delete(guest)
        vipInvites.delete(guest)
    }

    let countOfGuests = vipInvites.size + normalInvites.size
    console.log(countOfGuests)

    for (let guest of vipInvites){
        console.log(guest)
    }

    for (let guest of normalInvites){
        console.log(guest)
    }
    
}


partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

)