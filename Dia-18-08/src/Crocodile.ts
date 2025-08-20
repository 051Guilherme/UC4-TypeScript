import { Animal } from "./Animal";

export class Crocodile extends Animal {

    constructor(name:string, weigth:number){
        super(name,weigth)
    }

    swim():void{
        console.log(`${this.name} is swiming`)
    }
}