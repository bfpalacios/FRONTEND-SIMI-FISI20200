import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hora } from 'src/app/domain/Hora';

@Injectable({
  providedIn: 'root'
})
export class HoraService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/programacionCurso/hora';
  }

  public getHorabyGrupo(id: number) {
    return this.http.get<Hora[]>(this.url + '/' + 'listHora' + '/' + id);
  }
}
