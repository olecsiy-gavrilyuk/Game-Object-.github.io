function Class (Class,Damage,Life,Morality) {
    this.Class = Class;
    this.Damage = Damage;
    this.Life = Life;
    this.Morality = Morality;
}

function enemy (Сhance,Damage,Life) {
    this.Chance = Сhance;
    this.Damage = Damage;
    this.Life = Life;
}

/*let Warrior = {
    Name: "Unknown", 
    Class: "Warrior", 
    Damage: 10, 
    Life: 50,
    Morality: 5
};

let Paladin = {
    Name: "Unknown", 
    Class: "Paladin", 
    Damage: 6, 
    Life: 60,
    Morality: 10
};
*/
let Turn;
let Fight;
let check = 0;
let Warrior = new Class ("Warrior", 10, 50, 5);
let Paladin = new Class ("Paladin", 6, 60, 10);
let Orc = new enemy (randomInteger(0, 70), randomInteger(4, 12),randomInteger(20, 80));
let ForestTroll = new enemy (randomInteger(0, 30), 5 ,20)

let Hero = {};
let Enemy = {};

if (Orc.Chance > ForestTroll.Chance ) {
    Enemy = Orc;
} else {
    Enemy = ForestTroll;
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }



while (check == 0 ) {
    Hero.Class = prompt("Укажиет класс (Warrior,Paladin):");
    if (Hero.Class === Warrior.Class) {
    Hero = Warrior;
    check ++;
    } else if (Hero.Class === Paladin.Class) {
    Hero = Paladin;
    check ++;
    } else if (Hero.Class !== Warrior.Class && Hero.Class !== Paladin.Class) {
    alert ("Неверно указаний клас");
    }
}

Hero.Name = prompt("Укажите имя:");

let hero = [Hero.Name,Hero.Class,Hero.Damage,Hero.Life,Hero.Morality];
alert(hero);

while ((Hero.Morality > 0) && (Hero.Life > 0 && Enemy.Life > 0)) {
    Turn = confirm ("Пойти в лес?(Пойти домой = проиграть)");
    if (Turn == true) {
        Fight = confirm ("Начать бой?(Сбежать -1 ед. морали)");
        if (Fight == true){
            alert("Урон героя:");
            alert(Hero.Damage);
            alert("Урон врага:");
            alert(Enemy.Damage); 
            while (Hero.Life > 0 && Enemy.Life > 0) {
                Enemy.Life = Enemy.Life - Hero.Damage;
                alert("Жизнь врага");
                alert(Enemy.Life);
                Hero.Life = Hero.Life - Enemy.Damage;
                alert("Жизнь героя");
                alert(Hero.Life);
            }
            
        } else if (Fight == false) {
            Hero.Morality--;
        }

    } else if (Turn == false){
        Hero.Morality = 0;
        
    }
}

if (Hero.Life <= 0 || Hero.Morality == 0) {
    alert ("Ви програли!)");
} else if (Enemy.Life <= 0){
    alert("Ви виграли");
}