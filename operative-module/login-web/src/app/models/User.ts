export class User {
    id: string;
    email: string;
    password: string;
    rolId: string;

    public setUserInvited() {
        this.id = '0';
        this.email = 'invitado@unmsm.edu.pe';
        this.password = '';
        this.rolId = '0';
    }
}