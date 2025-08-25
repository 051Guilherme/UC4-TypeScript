import { Abrigo } from "./Abrigo";
import { Local } from "./Local";
import * as readline from 'readline-sync'

export class SistemaAbrigo {
    private abrigos: Abrigo[] = []

    constructor(){
    
    }
    
    cadastrarAbrigo():void{
        let capacidade = Number(readline.question("Capacidade do abrigo: "))
        let VagasOcupadas = Number(readline.question("Vagas ocupadas: "))
 
        let nome = readline.question("Nome: ") 
        let endereco = readline.question("Endereço: ")
        let cidade = readline.question("Cidade: ")
        let telefone = readline.question("Telefone: ")
        
        const abrigo:Abrigo = new Abrigo(capacidade, VagasOcupadas, nome, endereco, cidade, telefone)
        this.abrigos.push(abrigo)
        console.log(`Abrigo cadastrado`)
        
     }
     
 
     listarAbrigos(): void {

        if (this.abrigos.length === 0) {

            console.log("Nenhum abrigo cadastrado.")

        }
        console.log(`

        --------------------

        LISTAGEM DE ABRIGOS

        --------------------

        CÓDIGO | NOME | ENDEREÇO | CIDADE | TELEFONE | CAPACIDADE | VAGAS OCUPADAS | VAGAS DISPONÍVEIS

        ------------------------------------------------------------------------------------------------

        `);

        this.abrigos.forEach((abrigo, index) => {

            console.log(`${index + 1} | ${abrigo.getNome()} | ${abrigo.getEndereco()} | ${abrigo.getCidade()} | ${abrigo.getTelefone()} | ${abrigo.getCapacidade()} | ${abrigo.getVagasOcupadas()} | ${abrigo.getVagasDisponiveis()}`);

        });

    }
 
     procurarAbrigos():void{
         const pergunta = readline.question("Digite a cidade que você está: ")
         for (let i = 0; i < this.abrigos.length; i++) {
         if (pergunta === this.abrigos[i].getCidade()){
             console.log(`
             
             
             --------------------
             LISTAGEM DE ABRIGOS:
             --------------------
             CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE
             ---------------------------------------------------------------------------------------------------------
               001  | ${this.abrigos[i].getNome()}      | ${this.abrigos[i].getEndereco()}      |  ${this.abrigos[i].getTelefone()}  |  ${this.abrigos[i].getCapacidade()}  | ${this.abrigos[i].getCidade()}
             ---------------------------------------------------------------------------------------------------------`)
         }
     }
 
     
 }
 }