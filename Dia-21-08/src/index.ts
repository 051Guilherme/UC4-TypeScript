import { Bicicleta } from "./Bicicleta";
import { Boleto } from "./Boleto";
import { Cachorro } from "./Cachorro";
import { Carro } from "./Carro";
import { CartaoCredito } from "./CartaoCredito";
import { Gato } from "./Gato";
import { Pagamento } from "./Pagamento";
import { Veiculo } from "./Veiculo";
/*
const meuAnimal:Cachorro = new Cachorro()
const meuOutroAnimal:Gato = new Gato()
meuAnimal.falar()
meuOutroAnimal.falar()
*/

const veiculos:Veiculo[] = [new Carro(), new Bicicleta()]

veiculos.forEach(vec =>{
    vec.mover()
})

const pagamento:Pagamento[] = [new CartaoCredito(), new Boleto()]

pagamento.forEach(pag => {
    pag.processar()
})