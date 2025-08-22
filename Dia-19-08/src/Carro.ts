import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo{

    constructor(velocidade:number){
        super(velocidade)
    }
    acelerando(){
        this.velocidade +=17        
        console.log(`O carro esta a ${this.velocidade} km/h`)
    }
}