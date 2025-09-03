export abstract class AFuncionarios {

    nome:string
    
    constructor(nome:string){
        this.nome = nome
    }
     abstract calcularSalario():Number

}