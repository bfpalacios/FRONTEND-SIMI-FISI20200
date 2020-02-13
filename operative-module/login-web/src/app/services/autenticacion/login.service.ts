import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Path } from 'src/app/constants/Path';
import { Authentication } from 'src/app/domain/Authentication';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  verificarSiExisteUsuario(email: string) {
    return this.http.get<Authentication>
    (Path.url + '/authentication/findUserByEmail/' + email);
  }
  ingresarConEmailYContraseña(auth: Authentication) {
    return this.http.post<Authentication>(Path.url + '/authentication/withEmailAndPassword', auth);
  }
}
