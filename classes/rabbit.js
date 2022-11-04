import Animal from "./animal.js";

class Rabbit extends Animal {
    constructor(name){
        super(name)
    }
    play() {
        this.boredom += 10
        this.hunger -= 7
        this.thirst -= 7
        console.log(`${this.name} is a good rabbit`)
        return this
    }
    activity() {
        this.health += 10
        console.log(`taking ${this.name} for a walk`)
        return this
    }
}
export default Rabbit