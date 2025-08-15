import * as readline from 'readline-sync';

let opcao = ''
let n1 = 0
let n2 = 0
  
do{
    console.log("=== MENU ===")
    console.log("1 - Somar")
    console.log("2 - Subtrair")
    console.log("3 - Multiplicar")
    console.log("4 - Dividir")
    console.log("5 - Sair")
    opcao = (readline.question("Escolha uma opcao: "))
    switch(opcao){
      case "1":
        n1 = Number(readline.question("Digite um numero: "));
        n2 = Number(readline.question("Digite um numero: "))
            console.log (adicao(n1,n2))
        break
        case "2":
            n1 = Number(readline.question("Digite um numero: "));
            n2 = Number(readline.question("Digite um numero: "))
            console.log(subtracao(n1,n2))
        break
        case "3":
            n1 = Number(readline.question("Digite um numero: "));
            n2 = Number(readline.question("Digite um numero: "))
        console.log(multiplicaçao(n1,n2))
        break
        case "4":
            n1 = Number(readline.question("Digite um numero: "));
            n2 = Number(readline.question("Digite um numero: "))
            console.log(divisao(n1,n2))
        break
        case "5":
                
                console.log("saindo")
    }
    function adicao(n1:number, n2:number):number{
        return (n1 + n2)
    };
    
    function subtracao(n1:number, n2:number):number{
        return(n1 - n2)
    }
    
    function divisao(n1:number, n2:number):void{
        if(n2 ===0){
            console.log("errado")
        }
        console.log(n1 / n2)
    }
    
    function multiplicaçao(n1:number, n2:number):number{
        return (n1 * n2)
    }
  }  while(opcao !== "5")