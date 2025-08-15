export class Calculadora {

    numeroUm:number;
    numeroDois:number;

    constructor(numeroUm:number, numeroDois:number){
        this.numeroUm = numeroUm
        this.numeroDois = numeroDois
    }
    soma():number{
        return (this.numeroUm + this.numeroDois)
    }
    substrair():number{
        return (this.numeroUm - this.numeroDois)
    }
    dividir():number{
        return (this.numeroUm / this.numeroDois)
    }
    multiplicar():number{
        return (this.numeroUm * this.numeroDois)
    }

}