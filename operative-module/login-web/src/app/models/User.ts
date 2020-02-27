export class User {
    id: string;
    email: string;
    password: string;
    rol: string;

    public setUserInvited() {
        this.id = '0';
        this.email = 'invitado@unmsm.edu.pe';
        this.password = '';
        this.rol = '0';
    }
}