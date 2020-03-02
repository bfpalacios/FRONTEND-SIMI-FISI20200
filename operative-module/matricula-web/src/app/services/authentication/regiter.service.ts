import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { UserDTO } from 'src/app/models/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/authentication';
   }

  public validadUsuario(user: UserDTO) {
    return this.http.post<boolean>(this.url + '/validarUsuario', user);
  }

  public signUpWithEmailAndPassword(user: UserDTO) {
    return this.http.post<UserDTO>(this.url + '/signUpWithEmailAndPassword', user);
  }
}
