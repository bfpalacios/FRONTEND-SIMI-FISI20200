export class User {
    email: string;
    codPerona: number;
    tipo: number;
    id: number;
    password: string;
    rolId: string;

    public setUserInvited() {
        this.id = 0;
        this.email = 'invitado@unmsm.edu.pe';
        this.password = '';
        this.rolId = '0';
    }

    public setUser(id: number, email: string, tipo: number) {
        this.id = id;
        this.email = email;
        this.tipo = tipo;
    }
}