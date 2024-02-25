// tania schulz

class Ninja {
    // ninja with 10 health as default
    constructor(name, health = 10){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log("Name: "+this.name+"\nStrength: "
        +this.strength+"\nSpeed: "+this.speed+"\nHealth:"+this.health);
    }

    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const ninja2 = new Ninja("Ninja2", 30);
ninja2.showStats();