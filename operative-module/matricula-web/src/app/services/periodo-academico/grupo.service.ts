import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Grupo } from 'src/app/domain/Grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/programacionCurso/grupoHorario';
  }
  getGrupo(){
    return this.http.get<Grupo[]>(this.url + '/listGrupo');
  }
}
