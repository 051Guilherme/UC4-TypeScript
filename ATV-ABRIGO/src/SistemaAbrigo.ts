import { Abrigo } from "./Abrigo";
import * as readline from 'readline-sync'

export class SistemaAbrigo {
    private abrigos: Abrigo[] = [new Abrigo(500, 5, "Abrigo 1", "Rua tal 2", "Novo Hamburgo", "555"),
    new Abrigo(500, 5, "Abrigo 2", "Rua tal 33", "Novo Hamburgo", "222"),
    new Abrigo(500, 5, "Abrigo 3", "Rua tal 7", "Sao Leopoldo", "655")]

    //funçao para cadastrar o abrigo
    cadastrarAbrigo(): void {
        let capacidade = Number(readline.question("Capacidade do abrigo: "))
        let VagasOcupadas = Number(readline.question("Vagas ocupadas: "))

        let nome = readline.question("Nome: ")
        let endereco = readline.question("Endereço: ")
        let cidade = readline.question("Cidade: ")
        let telefone = readline.question("Telefone: ")

        const abrigo: Abrigo = new Abrigo(capacidade, VagasOcupadas, nome, endereco, cidade, telefone)
        this.abrigos.push(abrigo)

    }

    //funçao para listar os abrigos
    listarAbrigos(): void {
        if (this.abrigos.length === 0) {

            console.log("Nenhum abrigo cadastrado.")

        }
        console.log(`
--------------------
LISTAGEM DE ABRIGOS:
--------------------
CÓDIGO|NOME|ENDEREÇO|CIDADE|TELEFONE|CAPACIDADE|VAGAS OCUPADAS|VAGAS DISPONÍVEIS|`)

        this.abrigos.forEach((abrigo, index) => {
            
            console.log(
                `---------------------------------------------------------------------------------
${index + 1} | ${abrigo.getNome()} | ${abrigo.getEndereco()} | ${abrigo.getCidade()} | ${abrigo.getTelefone()} | ${abrigo.getCapacidade()} | ${abrigo.getVagasOcupadas()} | ${abrigo.getVagasDisponiveis()} |
--------------------------------------------------------------------------------- `);
        })
    }
    //funçao para procurar abrigos por cidades
   procurarAbrigos(): void {
    const pergunta = readline.question("Digite a cidade que você está: ")
    let encontrou:boolean = false
    console.log(`
--------------------
 ABRIGOS NA CIDADE:
--------------------
CÓDIGO | NOME | ENDEREÇO | TELEFONE | CAPACIDADE | CIDADE |
`)

    for (let i = 0; i < this.abrigos.length; i++) {
        if (pergunta.toLowerCase() === this.abrigos[i].getCidade().toLowerCase()) {
            encontrou = true
            console.log(`------------------------------------------------
${i + 1} | ${this.abrigos[i].getNome()} | ${this.abrigos[i].getEndereco()} | ${this.abrigos[i].getTelefone()} | ${this.abrigos[i].getCapacidade()} | ${this.abrigos[i].getCidade()}
------------------------------------------------`)
        }
    }

    if (!encontrou) {
        console.log("Cidade não encontrada")
    }
}}