export class Dog{
    //atributos de um cachorro
    name:string
    weight:number
    breed:string
    
    // o constructor é um metodo chamado automaticamente quando crimamos um objeto a partir dessa classe. Nele, normalmente, vamos passar valores para os atributos.
    constructor(dogName:string, dogWeight:number, dogBreed:string){
        this.name = dogName
        this.weight = dogWeight
        this.breed = dogBreed
    }

    bark():void {
        console.log(`${this.name} is barking!`)
    }

    eat():void {
        console.log(`${this.breed} is eating!`)
    }
}