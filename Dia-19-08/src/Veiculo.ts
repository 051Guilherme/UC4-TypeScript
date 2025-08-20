export class Veiculo {

    protected velocidade:number;

    constructor (acelerar:number){
        this.velocidade = acelerar
    }
    protected acelerar():void{
        let v = this.velocidade
        console.log(`Sobe a marcha ai!`)
        console.log(`O carro esta a ${v} km/h`)
    }

}