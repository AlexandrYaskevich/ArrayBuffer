const players = new Map;

export default class Character {
    constructor(attack, wayattack) { 
        this.attack = attack;
        this.wayattack = wayattack;
        players.set(this, {
            attack,
            wayattack
        })    
    }
    normalAttack() {
        if(players.get(this).wayattack > 1) {
            return players.get(this).attack - ((players.get(this).wayattack - 1) * 10);
        }
        return players.get(this).attack;
    }
    stonedAttack() {
        if(players.get(this).wayattack > 1) {
            return players.get(this).attack - ((players.get(this).wayattack - 1) * 10) - (Math.log2(players.get(this).wayattack) * 5);
        }
        return players.get(this).attack - 5;
    }
}

const Magician = new Character(100, 3);
const Daemon = new Character(100, 0);


