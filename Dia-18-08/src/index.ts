import { Animal } from "./Animal";
import { Crocodile } from "./Crocodile";
import { Dog } from "./Dog";
import { Owl } from "./Owl";

const myDog:Dog = new Dog('Bob', 10)

console.log(myDog.name , myDog.weigth)
myDog.bark()
myDog.eat()

const myOwl:Owl = new Owl('Chica', 15)
console.log(myOwl.name, myOwl.weigth)
myOwl.eat()
myOwl.fly()

const myCrocodile:Crocodile = new Crocodile('JeffBala', 30)
console.log(myCrocodile.name, myCrocodile.weigth)
myCrocodile.eat()
myCrocodile.swim()

const animais:Animal[] = [myCrocodile, myDog, myOwl];

for (let i = 0; i < animais.length; i++) {
    animais[i].eat();
  }
