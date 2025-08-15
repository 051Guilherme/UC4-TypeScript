/*for(let voltas:number =0; voltas <= 10; voltas ++){
console.log(`o ciclista deu ${voltas} voltas.`)
}

console.log("o ciclista venceu a corrida!")



//WHILE = ENQUANTO
let voltas:number = 0

while(voltas <= 10){
console.log(`O ciclista deu ${voltas} voltas.`)
voltas ++
}*/

//Posso usar um for para percorrer um array

const numeros:number[] = [10,20,30,30,40,50,60]

/*for (let i:number = 0; i < numeros.length; i++){
console.log("Numero: " + numeros[i])
}
*/
//para cada item do meu array
//para cada número dentro do array numeros
//faça algo
//NÃO FUNCIONA COM OBJETOS

/*
for (let numero of numeros){
console.log("Numero: " + numero)
}




const pessoa:{nome:string, idade:number} = {
    nome:'Guilherme',
    idade: 21
}

for(const chave in pessoa){
    console.log(`${chave}: ${pessoa[chave as keyof typeof pessoa]}`)
}

//typeof descobre o tipo de algo
//keyof nega as chaves de um objeto (exemplo: nome, idade)
//keyof typeof pessoa primeiro descobre o tipo do objeto, depois pega as chaves dele.


// for each
const personagens:string[] = ['Frodo', 'Gandalf', 'Legolas'];
// o forEach é usado em arrays
//ele serve para executar uma funçao para cada item deste array
//essa funçao é chamada como parametro do forEach (callback)
//o primeiro parametro dessa funça é o valor do item e o segundo é o seu indice
personagens.forEach((nome, indice) => {
  console.log(`Personagem ${indice}: ${nome}`);
});



let contador = 0;
//do significa faça
do {
  console.log(`Contador: ${contador}`);
  contador++;
} while (contador < 5);

*/


//Atividades

//1

const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];

for(let i:number = 0; i < sociedade.length; i++){
    if (i == 0 || i == 1 || i == 5 || i == 6) 
        console.log("Hobbit encontrado: " + sociedade[i]
        )
    }


//atividade 2

const jedi = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
  ];

for (const perso of jedi){
    if(perso.jedi === true)
    console.log('sao jedi:' + perso.nome)
}

//atividade 3

const personagens = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake'
  };

  for(const cla in personagens){
    console.log(`${cla}:pertence ao cla ${personagens[cla as keyof typeof personagens]}`)
}

//atividade 4
const personagens2 = [
    { nome: 'Goku', poder: 15000 },
    { nome: 'Vegeta', poder: 14999 },
    { nome: 'Krillin', poder: 7500 },
    { nome: 'Freeza', poder: 20000 },
  ];

  personagens2.forEach((nom) => {
    if (nom.poder > 8000)
    console.log(`o poder de ${nom.nome} é mais que 8000`);
    }
);

//5
const pokemons =['pikachu','charmander','bulbasaur','mewtwo','squirtle'];
let contador = 0
while(contador <pokemons.length){
  if(pokemons[contador] === 'mewtwo'){
    console.log("pokemon lendario encontradro: Mewtwo")
    break
  }console.log (`Capturado ${pokemons[contador]}`)
  contador++
}

//6

let passos = 0
const passosMordor = 5

do{
  console.log(`dando passo ${passos}`)
  passos++
}while(passos < passosMordor){
  console.log('chegamos em mordor')
}
