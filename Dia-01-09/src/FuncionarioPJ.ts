import { AFuncionarios } from "./AFuncionarios"

export class FuncionarioPJ extends AFuncionarios{
    salario:number
    hora:number
    constructor(nome:string,salario:number,hora:number){
        super(nome)
        this.salario = salario
        this.hora = hora
    }
    calcularSalario(): Number {
      this.salario = 2500
      this.hora = 220
        return 2500 / 220
    }
}