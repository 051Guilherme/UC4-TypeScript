import { IAutenticavel } from "./IAutenticavel";

export class SistemaLogin implements IAutenticavel{
    autenticar(usuario: string, senha: string): boolean {
        return usuario === "admin" && senha === "1234"
    }
}