import { Pagamento } from "./Pagamento";

export class CartaoCredito extends Pagamento{
    processar(){
        console.log(`O pagamento esta sendo via cartao de credito`)
    }
}