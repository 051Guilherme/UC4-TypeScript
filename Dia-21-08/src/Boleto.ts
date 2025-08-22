import { Pagamento } from "./Pagamento";

export class Boleto extends Pagamento{
    processar(){
        console.log(`O pagamento esta sendo via Boleto`)
    }
}