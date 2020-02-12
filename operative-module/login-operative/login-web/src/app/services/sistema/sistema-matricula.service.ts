import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SistemaMatriculaService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'api/v1/';
   }

  verificarSistemaMatricula() {
    return this.http.get<boolean>(this.url + '/' + 'verificarSistemaMatricula');
  }
}
