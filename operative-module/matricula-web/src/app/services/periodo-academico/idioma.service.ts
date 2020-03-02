import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IdiomaDTO } from 'src/app/domain/IdiomaDTO';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/programacionCurso/idioma';
  }

  getIdioma(){
    return this.http.get<IdiomaDTO[]>(this.url + '/listIdioma');
  }
}
