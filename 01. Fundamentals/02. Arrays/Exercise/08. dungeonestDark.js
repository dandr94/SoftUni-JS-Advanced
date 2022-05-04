function solve(arr){
    let myArr = arr.join('').split('|')
    let hp = 100
    let coins = 0
    let isAlive = true
    for (let i = 0; i < myArr.length; i++){
        let splitElement = myArr[i].split(' ')
        let firstElement = splitElement[0]
        let secondElement = Number(splitElement[1])

        if (firstElement === 'potion'){
            hp += secondElement
            
            if (hp > 100){
                let needed = secondElement - (hp - 100)
                hp = 100
                console.log(`You healed for ${needed} hp.`)
            }else{
                console.log(`You healed for ${secondElement} hp.`)
            }
            console.log(`Current health: ${hp} hp.`)
        }
        else if (firstElement === 'chest'){
            coins += secondElement
            console.log(`You found ${secondElement} coins.`)
        }
        else{
            if (hp - secondElement <= 0){
                console.log(`You died! Killed by ${firstElement}.`)
                console.log(`Best room: ${i + 1}`)
                isAlive = false
                break
            }
            hp -= secondElement
            console.log(`You slayed ${firstElement}.`)

        }

    }
    if (isAlive == true){
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${hp}`)
    }
}

solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])