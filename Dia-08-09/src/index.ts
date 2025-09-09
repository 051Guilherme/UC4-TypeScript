function retornaItem<T>(item: T): T {
    return item;
  }
  
             (retornaItem<number>(10),     // ✅ retorna um número
              retornaItem<string>("oi"),   // ✅ retorna uma string
              retornaItem<boolean>(true))  // ✅ retorna um boolean

function pegaPrimeiro<T>(lista: T[]): T {
    return lista[0];
}
              
const numeros = [1, 2, 3];
const palavras = ["a", "b", "c"];
              
pegaPrimeiro(numeros);  // 1
pegaPrimeiro(palavras); // "a"

// restringindo os tipos que aceitamos

/* 
<T extends { length: number } 
indica que a funçao aceita apenas algo que contenha a propriedade length
*/

function mostraTamanho<T extends { length: number }>(item: T): number {
    return item.length;
  }
  
  mostraTamanho("Oi");        // ✅ funciona (string tem length)
  mostraTamanho([1, 2, 3]);   // ✅ funciona (array tem length)
  //mostraTamanho(123);         // ❌ erro (number não tem length)

// <T extends string | number>
// so aceita algo que pode ser de um tipo OU de outro, nesse caso, string OU number
// se for de qualquer outro tipo, nao aceita

function mostraValor<T extends string | number>(valor: T): T {
 return valor;
  }
  
mostraValor("Olá");  // ✅ string permitido
mostraValor(123);    // ✅ number permitido
//mostraValor(true);   // ❌ boolean não é aceito

interface TemNome {
    nome: string;
  }
  
  function mostraNome<T extends TemNome>(obj: T): string {
    return obj.nome;
  }
  
  mostraNome({ nome: "Ana" });             // ✅ ok
  mostraNome({ nome: "João", idade: 20 }); // ✅ ok
  //mostraNome({ idade: 20 });               // ❌ erro, não tem nome

  class Animal {
    mover() {
      console.log("Movendo...");
    }
  }
  
  class Cachorro extends Animal {
    latir() {
      console.log("Au au!");
    }
  }
  
  function fazMover<T extends Animal>(animal: T) {
    animal.mover(); // ✅ garantido que existe
  }
  
  fazMover(new Animal());   // ✅
  fazMover(new Cachorro()); // ✅
  //fazMover({});             // ❌ erro

  function corEscolhida<T extends "vermelho" | "azul" | "verde">(cor: T): T {
    return cor;
  }
  
  corEscolhida("vermelho"); // ✅
  corEscolhida("azul");     // ✅
  //corEscolhida("preto");    // ❌ não permitido

  import { Estoque } from "./Estoque";
  import { Livro } from "./Livro";
  import { Roupa } from "./Roupa";

  const estoqueRoupas = new Estoque<Roupa>()
  estoqueRoupas.adicionar(new Roupa("Camisa Preta", "M"))

  const estoqueLivro = new Estoque<Livro>()
  estoqueLivro.adicionar(new Livro("O Principe","Maquiavel"))

  // exercicios

  