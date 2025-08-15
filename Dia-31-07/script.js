"use strict";
//Variaveis
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./Dog");
//String
var nome = 'Guilherme';
//Number
var idade = 21;
// Boolean
var deMaior = true;
// Arrays
var numeros = [1, 2, 3];
var nomes = ['Gui', 'Bernabei', 'Borre'];
// Objetos
var pessoa = {
    nome: 'Gui',
    idade: 21
};
//Funçao
function calcula(num, num2) {
    return num + num2;
}
console.log(calcula(800, 64));
function mensagem(meuNome) {
    return "Ola ".concat(meuNome, ", tudo bem com voce");
}
function frase() {
    console.log('eae');
}
// Funçao com parametros opcionais 
function digaOla(name) {
    console.log('Ola,', name || 'Mundo');
}
digaOla('Guilherme');
digaOla();
//
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100), applyDiscount(100, 0.9));
// crio objetos a partir da classe dog
var myDog = new Dog_1.Dog('Bob', 25, "Golden-Retriever");
var myOtherDog = new Dog_1.Dog('Caramelo', 7, 'vira-lata');
// assim eu acesso seus atributos
console.log(myDog.breed); // Golden-Retriever
console.log(myOtherDog.name); // Caramelo
// assim eu chamo os metodos
myDog.bark();
myOtherDog.eat();
