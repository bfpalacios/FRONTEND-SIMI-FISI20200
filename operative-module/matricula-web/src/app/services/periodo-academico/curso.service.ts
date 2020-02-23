import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from 'src/app/domain/Curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/programacionCurso/curso';
  }
  public getCursobyNivel(idCurso: number, idNivel: number) {
    return this.http.get<Curso[]>(this.url + '/' + 'listCurso' + '/' + idCurso+ '/'+idNivel);
  }
}
