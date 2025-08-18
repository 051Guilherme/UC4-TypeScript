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