import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AulaDTO } from 'src/app/domain/AulaDTO';
import { Aula } from 'src/app/domain/Aula';
import { Hora } from 'src/app/domain/Hora';
@Injectable({
  providedIn: 'root'
})
export class HoraService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/horasclase';
  }

  getHoras() {
    return this.http.get<Hora[]>(this.url + '/' + 'listHorasClase');
  }

  // public crearAula(aula: Aula) {
  //   return this.http.post<Aula>(this.url + '/' + 'crearAula', aula);
  // }

  public getHoraById(id: number) {
    return this.http.get<Hora>(this.url + '/' + 'obtenerHorasClaseById' + '/' + id);
  }

  // public editarAulaById(aula: Aula,id: number) {
  //   return this.http.put<Aula>(this.url + '/' + 'actualizarAula'+ '/' + id, aula);
  // }

  // public deleteAulaById(id: number) {
  //   return this.http.delete<boolean>(this.url + '/' + 'eliminarAulaById' + '/' + id);
  // }

}
