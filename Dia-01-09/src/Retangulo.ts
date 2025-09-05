import { AForma } from "./AForma";

export class Retangulo extends AForma{
    largura:number
    altura:number

    constructor(base:number,altura:number){
        super()
        this.largura = base
        this.altura = altura
    }

    calcularArea(): number {
        return this.largura * this.altura
    }
}