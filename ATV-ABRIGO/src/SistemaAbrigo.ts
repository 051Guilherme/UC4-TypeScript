import { Abrigo } from "./Abrigo";
import { Local } from "./Local";

export class SistemaAbrigo extends Local{
    private abrigos: Abrigo

    constructor(abrigos:Abrigo,nome:string,endereco:string,cidade:string,telefone:string){
        super(nome,endereco,cidade,telefone)
        this.abrigos = abrigos
    }
    cadastrarAbrigo():void{
        
    }

}