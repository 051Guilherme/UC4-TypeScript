export class Personagem {

        nome:string;
        classe:string;
        forca:number;
        vida:number;
    
        constructor(nome:string, classe:string, forca:number){
            this.nome = nome
            this.classe = classe;
            this.forca = forca;
            this.vida = 100;
        }

}