import { Pacote } from "./Pacote"

export class Entregador {
    private nome:string

    constructor(nome:string){
        this.nome = nome
    }
    entregarPacote(pacote:Pacote):void{
        console.log(`${this.nome} esta entregando um pagote de ${pacote.getPeso()} kg para ${pacote.getDestino()}`)
    }
    trocarEndereco(pacote:Pacote, novoEndereco:string){
        pacote.setDestino(novoEndereco)
        console.log(`O novo endereço é ${novoEndereco}`)
    }
}