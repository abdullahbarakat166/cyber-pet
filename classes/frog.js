import Animal from "./animal.js";

class Frog extends Animal {
    constructor(name) {
        super(name)
    }
    play() {
        this.boredom += 6
        this.hunger -= 8
        this.thirst -= 8
        console.log(`${this.name} is happy`)
        return this
    }
    activity() {
        console.log(`${this.name} is very chill right now`)
        this.health += 10
        return this
    }
}

export default Frog
