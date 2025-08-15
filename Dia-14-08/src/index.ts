import { Entregador } from "./Entregador";
import { Pacote } from "./Pacote";
import { Pessoa } from "./Pessoa";

/*
const pessoa:Pessoa = new Pessoa('Guilherme',21)

console.log(pessoa.apresentar())
pessoa.setNome("Guilherme Pereira")
console.log(pessoa.getNome())
pessoa.setIdade(-21)
console.log(pessoa.getIdade())

*/
const entregador:Entregador = new Entregador("Bob")
const pacote:Pacote = new Pacote("Novo Hamburgo", 5)

entregador.entregarPacote(pacote)
pacote.setDestino("Sao Leopoldo")
entregador.entregarPacote(pacote)