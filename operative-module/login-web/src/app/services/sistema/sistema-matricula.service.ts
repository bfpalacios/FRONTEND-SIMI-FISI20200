import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Path } from 'src/app/constants/Path';

@Injectable({
  providedIn: 'root'
})
export class SistemaMatriculaService {

  constructor(private http: HttpClient) {
   }

  verificarSistemaMatricula() {
    return this.http.get<boolean>(Path.url + '/' + 'verificarSistemaMatricula');
  }
}
