import { AFuncionarios } from "./AFuncionarios"

export class FuncionarioCLT extends AFuncionarios{
    salario:number

    constructor(nome:string,salario:number){
        super(nome)
        this.salario = salario
        
    }

    calcularSalario(): number {
        return  this.salario
    }
}