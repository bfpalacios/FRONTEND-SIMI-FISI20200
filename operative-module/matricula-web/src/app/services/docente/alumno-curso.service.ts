import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoCursoService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/programacionDocente/alumno';
  }
  public getAlumnobyCurso(idCurso: number) {
    return this.http.get<any[]>(this.url + '/' + 'listAlumnoCurso' + '/' + idCurso);
  }
}
