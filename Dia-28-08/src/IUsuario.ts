
// Crio a interface Usuario
// Qualquer objeto ou classe que emplemente/use esta interface PRECISA seguir as regras dela, ou seja, ter todos os seus atributos, tipos e metodos (se houver)
export interface IUsuario {
    nome:string
    idade:number
    falar?():void
}
