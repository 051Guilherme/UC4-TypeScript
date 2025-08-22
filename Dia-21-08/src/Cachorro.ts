import { Animal } from "./Animal";

export class Cachorro extends Animal{
// Sobreescrevendo um metodo que foi criado na classe pai
    falar():void{
        console.log(`O cachorro esta latindo!`)
    }
}