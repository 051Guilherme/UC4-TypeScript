//Variaveis

import { Dog } from "./Dog";

//String
let nome:string = 'Guilherme';
//Number
let idade:number = 21;
// Boolean
let deMaior:boolean = true;

// Arrays
let numeros: Array<number> = [1,2,3];
let nomes: string[] = ['Gui','Bernabei','Borre']

// Objetos
let pessoa: {nome:string, idade:number} = 
{
    nome: 'Gui',
    idade: 21
}

//Funçao
function calcula(num:number, num2:number):number{
    return num + num2
}
console.log(calcula(800,64))

function mensagem(meuNome:string):string{
    return `Ola ${meuNome}, tudo bem com voce`
}

function frase():void{
    console.log('eae')
}

// Funçao com parametros opcionais 
function digaOla(name?:string,):void{
console.log('Ola,',name || 'Mundo')
}
digaOla('Guilherme')
digaOla()

//
function applyDiscount(price:number, discount:number = 0.05):number{
    return price * (1 - discount)
}
console.log(
    applyDiscount(100),
    applyDiscount(100,0.9)
)

// crio objetos a partir da classe dog
let myDog:Dog = new Dog('Bob',25,"Golden-Retriever")
let myOtherDog:Dog = new Dog('Caramelo', 7, 'vira-lata')

// assim eu acesso seus atributos
console.log(myDog.breed) // Golden-Retriever
console.log(myOtherDog.name) // Caramelo

// assim eu chamo os metodos
myDog.bark()
myOtherDog.eat()

// atividades

//1
function escola(nomeAluno:string, idadeAluno:number, estaMatriculado:boolean):void{
    console.log(`aluno:${nomeAluno}, ${idadeAluno}anos, ${estaMatriculado}`)
}
console.log(escola('Guilherme', 21, true))

//2
let alunos:string[] = ['Guilherme', 'Arthur', 'Pedro', 'Leo']
function nomesAlunos(alunos:string[]):string{
    let lista:string = 'Alunos'
    for(let i = 0; i < alunos.length; i++){
        lista += "\n" + alunos[i]
    }
    return lista 
}
console.log(nomesAlunos(alunos))

//3
function saudacao(name:string):string {
    return `Ola, ${name}! seja bem vindo a turma`
}
console.log(saudacao('Guilherme'))

//4
function calcularMedia(nume1:number, nume2:number, nume3:number):number {
    return (nume1+nume2+nume3) / 3
}
console.log('Nota Final:' + calcularMedia(7,7,7))

//5
function contarAlunos(turma:string[]):void {
    console.log('Total de alunos', turma.length)
}
contarAlunos(['Guilherme','Arthur','Pedro','Leo'])