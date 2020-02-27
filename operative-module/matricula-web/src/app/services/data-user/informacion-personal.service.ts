import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { PersonaUsuario } from 'src/app/models/PersonaUsuario';

@Injectable({
  providedIn: 'root'
})
export class InformacionPersonalService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = 'simi/matricula/api/v1';
  }

  public obtenerDatosUsuario(user: User) {
    return this.http.get<any>(this.url + '/persona/datosUsuario/' + user.codigo);
  }

  public obtenerInformacionAcademica(user: User) {
    return this.http.get<PersonaUsuario>(this.url + '/persona/informacionAcademica/' + user.codigo);
  }
}
