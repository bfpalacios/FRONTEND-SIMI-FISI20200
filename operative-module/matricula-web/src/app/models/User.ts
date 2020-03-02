export class User {
    email: string;
    codigo: number;
    codPerona: number;
    tipo: number;
    id: string;
    password: string;
    rolId: string;

    public setUserInvited() {
        this.id = '0';
        this.email = 'invitado@unmsm.edu.pe';
        this.password = '';
        this.rolId = '0';
    }

    public setUser(id: number, email: string, tipo: number) {
        this.codigo = id;
        this.email = email;
        this.tipo = tipo;
    }
}