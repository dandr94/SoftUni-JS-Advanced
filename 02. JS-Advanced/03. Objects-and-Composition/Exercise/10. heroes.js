function solve(){
    class Hero {
        constructor(name){
            this.name = name
            this.stamina = 100
            this.mana = 100
            this.health = 100
        }

        cast (spell) {
            this.mana -= 1
            console.log(`${this.name} cast ${spell}`)
        }

        fight() {
            this.stamina -= 1
            console.log(`${this.name} slashes at the foe!`)
        }
    }



    return {
        mage: name => new Hero(name),
        fighter: name => new Hero(name)
    }
}


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
