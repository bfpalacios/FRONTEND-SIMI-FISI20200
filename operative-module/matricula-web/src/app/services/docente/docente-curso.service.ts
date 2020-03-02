import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocenteCursoService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/programacionDocente/curso';
  }
  public getCursobyDocente(idDocente: number) {
    return this.http.get<any[]>(this.url + '/' + 'listCurso' + '/' + idDocente);
  }
}
