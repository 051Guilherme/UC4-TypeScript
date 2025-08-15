// a classe funciona como um "molde" para um tipo de dado 
// export permite que importemos depois esta classe em qualquer lugar do meu projeto
// class indica que isto é uma classe, depois de class colocamos o nome da classe que deve ser o mesmo do arquivo
export class Cachorro {
//Atributos (coisas que objetos dessa classe tem)
    nome:string;
    raca:string;
    idade:number;

//Construtor da classe (funçao/metodo que é chamado automaticamente quando crio um objeto a partir dessa classe). é nele que eu defino os valores que estes objeto vai ter para seus atributos
    constructor(nome:string, raca:string, idade:number){
        // o atributo 'nome' desta classe vai receber como valor oq o usuario digitar(nomeCachorro)
        this.nome = nome
        this.raca = raca
        this.idade = idade
    }
//Metodo (coisas que objetos desta classe fazem)
//nao usamos a palavra 'function'
    latir():void{
    console.log(`o cachorro de nome ${this.nome} esta latindo! `)
    }
    
    correr():void{
    console.log(`o cachorro de raça ${this.raca} esta correndo`)
    }

}

