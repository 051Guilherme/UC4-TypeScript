import { Carro } from "./Carro";
import { ContaPoupanca } from "./ContaPoupanca";
import { Guerreiro } from "./Guerreiro";

const heroi = new Guerreiro(100);
const vilao = new Guerreiro(80);

heroi.atacar(vilao);  // Atacando outro personagem (usa método público que chama protected)
heroi.treinar();       // Acessando protected na própria instância

const carro = new Carro(90)
carro.acelerando()

const meuBanco:ContaPoupanca = new ContaPoupanca(500)
meuBanco.aplicarJuros(70)