function guestsGoingToAParty(arr){
    let myGuest = []
    for (let guest of arr){
        let guestName = guest.split(' ')[0]
        if (guest.includes('is going')){
            if (inGuestList(guestName)){
                console.log(`${guestName} is already in the list!`)
            }
            else {
                myGuest.push(guestName)
            }
        } else {
            if (inGuestList(guestName)){
                myGuest = myGuest.filter( x => x != guestName)
            }
            else{
                console.log(`${guestName} is not in the list!`)
            }
        }
    }

    function inGuestList(name){
        if (myGuest.includes(name)){
            return true
        }
        return false
    }
    console.log(myGuest.join('\n'))
}


guestsGoingToAParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)

guestsGoingToAParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)