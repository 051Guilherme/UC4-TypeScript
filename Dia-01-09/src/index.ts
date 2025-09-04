import { AForma } from "./AForma"
import { AFuncionarios } from "./AFuncionarios"
import { Administrador } from "./Administrador"
import { Cliente } from "./Cliente"
import { FuncionarioCLT } from "./FuncionarioCLT"
import { FuncionarioPJ } from "./FuncionarioPJ"
import { Retangulo } from "./Retangulo"
import { Triangulo } from "./Triangulo"



const clt:AFuncionarios = new FuncionarioCLT("Guilherme",2500)
console.log(`${clt.nome} seu salario fixo é ` + clt.calcularSalario())

let pj:FuncionarioPJ
pj =  new FuncionarioPJ("Guilherme", 2800, 220)
console.log(`${pj.nome} seu salario por hora é ` + pj.calcularSalario().toFixed(2))



const forma:AForma[] = [new Retangulo(10,20), new Triangulo(10,7)]
forma.forEach(forma => {
    console.log(forma.calcularArea())
    
})
const admin = new Administrador("Guilherme", "admin", "admin");
const cliente = new Cliente("Guilherme", "guisci", "1234");


if (admin.autenticar("admin", "admin")) {
  admin.acessarPainel();
} else {
  console.log("Falha na autenticação do administrador");
}

if (cliente.autenticar("guisci", "1234")) {
  cliente.acessarPainel();
} else {
  console.log("Falha na autenticação do cliente");
}

import { ClaAkimichi } from "./ClaAkimichi";
import { ClaHyuuga } from "./ClaHyuuga";
import { ClaNara } from "./ClaNara";
import { ClaUchiha } from "./ClaUchiha";

const personagemUchiha:ClaUchiha = new ClaUchiha("Uchiha", "Sasuke")

const personagemHyuuga:ClaHyuuga = new ClaHyuuga("Hyuuga", "Hiashi")

const personagemNara:ClaNara = new ClaNara("Nara", "Shikamaru")

const personagemAkimichi:ClaAkimichi = new ClaAkimichi("Akimichi", "Chouza")

personagemUchiha.habilidadeEspecial()

personagemHyuuga.ataqueEspecial()