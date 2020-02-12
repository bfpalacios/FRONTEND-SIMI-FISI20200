import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Path } from 'src/app/constants/Path';
import { User } from 'src/app/domain/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  ingresarAlSistemaPorAutenticacion(user: User) {
    return this.http.post<boolean>(Path.url + '/' + 'ingresarAlSistemaPorAutenticacion', user);
  }
}
