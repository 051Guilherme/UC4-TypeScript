import * as readline from 'readline-sync';
import { Cachorro } from './Cachorro';
import { Calculadora } from './Calculadora';
// para podermos criar um objeto da nossa classe "Cachorro", primeiro uma variavel deve ser do tipo cachorro
//depois atribuimos valores a essa variavel usando a palavra reservada "new" seguida do nome da classe junto de parenteses. assim chamamos o construtor da classe e devemos, dentro dos parenteses, passar todos os valores que nos definimos

//quando criamos um objeto, chamamos isso de INSTANCIAR O OBJETO DA CLASSE
const meuCachorro:Cachorro = new Cachorro("Bob", "Vira-Lata", 5)
const meuOutroCachorro:Cachorro = new Cachorro("Tobby", "Pinscher", 2)

// para chamarmos os metodos deste objetos, chamamos o nome da variavel + . + o nome do metodo
meuCachorro.correr()
meuCachorro.latir()
meuOutroCachorro.correr()
meuOutroCachorro.latir()

// para acerssarmos o valor do atributo de um onjeto, chamamos o nome da variavel + . + o nome do atributo
console.log(meuOutroCachorro.idade)

// para trocarmos o valor de um atributo de um objeto chamamos o nome da varivel + . + o nome do atributo, depois '=' e passamos o novo valor
meuCachorro.nome = 'Bobbyson'
console.log(meuCachorro.nome)




// crie um novo arquivo chamado Calculadora
// dentro deste novo arquivo crie a classe  Calculadora
// crie os atributos numeroUm e numeroDois
//faça o contrutor
//depois faça os metodos somar, subtrair, multiplicar e dividir
//apos isso no arquivo index.ts instancie a calculadora e chame seus metodos

const minhaCalculadora:Calculadora = new Calculadora(5,5)
console.log(minhaCalculadora.soma())
console.log(minhaCalculadora.dividir())
console.log(minhaCalculadora.multiplicar())
console.log(minhaCalculadora.substrair())