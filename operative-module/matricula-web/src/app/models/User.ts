export class User {
    email: string;
    codigo: number;
    codPerona: number;
    tipo: number;

    public setUser(id: number, email: string, tipo: number) {
        this.codigo = id;
        this.email = email;
        this.tipo = tipo;
    }
}