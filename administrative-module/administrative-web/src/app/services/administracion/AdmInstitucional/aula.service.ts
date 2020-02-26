import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AulaDTO } from 'src/app/domain/AulaDTO';
import { Aula } from 'src/app/domain/Aula';
@Injectable({
  providedIn: 'root'
})
export class AulaService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/v1/programacionCurso/aula';
  }

  getAulas() {
    return this.http.get<AulaDTO[]>(this.url + '/' + 'listAulas');
  }
  
  getAulasbySede(id: number) {
    return this.http.get<AulaDTO[]>(this.url + '/' + 'listAulasBySede'+ '/' + id);
  }

  public crearAula(aula: Aula) {
    return this.http.post<Aula>(this.url + '/' + 'crearAula', aula);
  }

  public getAulaById(id: number) {
    return this.http.get<AulaDTO>(this.url + '/' + 'obtenerAulaById' + '/' + id);
  }

  public editarAulaById(aula: Aula,id: number) {
    return this.http.put<Aula>(this.url + '/' + 'actualizarAula'+ '/' + id, aula);
  }

  public deleteAulaById(id: number) {
    return this.http.delete<boolean>(this.url + '/' + 'eliminarAulaById' + '/' + id);
  }

}
