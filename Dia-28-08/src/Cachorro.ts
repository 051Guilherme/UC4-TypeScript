import { IAnimal } from "./IAnimal";

export class Cachorro implements IAnimal {
    nome:string
    raca:string // propriedade que nao tem na interface

    constructor(nome:string, raca:string){
        this.nome = nome
        this.raca = raca
    }

    emitirSom(): void {
        console.log("Au au")
    }
}