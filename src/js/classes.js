export default class Character {
    constructor(type, attacked, wayattack) { 
        this.type = type;
        this.attacked = attacked;
        this.wayattack = wayattack; 
        this.stonedstay = false;
    }
    set attack(attacked) {
        if(this.wayattack > 1) {
            return this.attacked - ((this.wayattack - 1) * 10);
        }
        else {
           return this.attacked;
        }
    }
    set stoned(attacked) {
        if(this.stonedstay) {
            return this.attacked - ((this.wayattack - 1) * 10) - (Math.log2(this.wayattack) * 5);
        }
        else {
            return this.attacked - 5;
        }
    }
    get attack() {
        if(this.wayattack > 1) {
            return this.attacked - ((this.wayattack - 1) * 10);
        }
        else {
           return this.attacked;
        }
    }
    get stoned() {
        if(this.stonedstay) {
            return this.attacked - ((this.wayattack - 1) * 10) - (Math.log2(this.wayattack) * 5);
        }
        else {
            return this.attacked - 5;
        }
    }
}

const Magician = new Character("Magician");
const Daemon =new Character("Daemon");




