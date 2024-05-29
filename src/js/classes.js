export default class Character {
    constructor(type, attacked, wayattack) { 
        this.type = type;
        this.attacked = attacked;
        this.wayattack = wayattack; 
        this.stonedstay = false;
    }
    set attack(attacked) {
        this.attacked = attacked;
    }
    set stoned(value) {
        this.stonedstay = value;
    }
    get attack() {
        if(!this.stonedstay) {
            if(this.wayattack > 1) {
                return this.attacked - ((this.wayattack - 1) * 10);
            }
            else  {
                return this.attacked;
            }
        }
        else {
            if(this.wayattack > 1) {
                return this.attacked - ((this.wayattack - 1) * 10) - (Math.log2(this.wayattack) * 5);
            }
            else {
                return this.attacked - 5;
            }
        }
        
    }
    get stoned() {
        return this.stonedstay;
    }
}

const Magician = new Character("Magician");
const Daemon =new Character("Daemon");




