import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nivel } from 'src/app/domain/Nivel';

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/programacionCurso/nivel';
  }

  public getNivelbyIdioma(id: number) {
    return this.http.get<Nivel[]>(this.url + '/' + 'listNivel' + '/' + id);
  }
}
