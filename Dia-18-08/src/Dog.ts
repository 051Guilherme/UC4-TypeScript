import { Animal } from "./Animal";

// Usamos a palavra reservada 'extends' para identificar que uma classe é filha da outra
export class Dog extends Animal {
// Dog, come é filho da classe Animal, ja herda os atributos 'name' e 'weigth'

    constructor(name:string,weigth:number){
        // o metodo 'super' chama o construtor da classe pai
        // assim, reutilizamos ele na classe filha
        super(name,weigth)
    }

    bark():void{
        console.log(`${this.name} is barking.`)
    }
}