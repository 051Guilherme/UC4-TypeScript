import { Circulo } from "./Circulo";
import { IFormaGeometrica } from "./IFormaGeometrica";
import { IFuncionario } from "./IFuncionario";
import { ILivro } from "./ILivro";
import { IProduto } from "./IProduto";
import { IUsuario } from "./IUsuario";
import { Quadrado } from "./Quadrado";
import { SistemaLogin } from "./SistemaLogin";

// Aqui criamos um objeto do tipo IUsuario, ou seja, um objeto que segue as regras da interface
const meuUsuario:IUsuario = {
   nome: "Guilherme",
   idade: 21
   
}

//Interfaces podem ser usadas para tipar parametros de funçao
//Assim garanto que o objeto que eu usar  tera tudo que eu preciso
function mostrarProduto(produto:IProduto) {
    console.log(`${produto.nome} custa R$ ${produto.preco}`);
  }

  const produto:IProduto = {
    nome:"Camiseta",
    preco:99.99

  }
  mostrarProduto(produto)
  mostrarProduto({nome:"Tenis", preco:120.00})

  const livro1:ILivro = {
    titulo:"O Principe",
    autor:"Maquiavel",
    anoPublicacao:1990
  }

  function mostrarLivro(livro:ILivro):void{
    console.log(`Titulo: ${livro.titulo}\nAutor: ${livro.autor}\nAno: ${livro.anoPublicacao}`)
  }

  mostrarLivro(livro1)

  const funcionario:IFuncionario = {
    nome:"Jose",
    cargo:"Gestor",
    salario: 2600

  }

  function calcularBonus(bonus:IFuncionario):void{
        console.log(`O Bonus é de  R$${(10 / 100) * bonus.salario}`)
  }
  calcularBonus(funcionario)

const circulo = new Circulo(7)
const quadrado = new Quadrado(20)
console.log(quadrado.calcularArea())
console.log(circulo.calcularArea())

const login = new SistemaLogin()
console.log(login.autenticar("admin", "1234"))
