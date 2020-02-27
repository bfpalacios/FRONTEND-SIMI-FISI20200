import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Apertura } from 'src/app/domain/Apertura';
import { AperturaDTO } from 'src/app/domain/AperturaDTO';

@Injectable({
  providedIn: 'root'
})
export class SolicitudAperturaService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/programacionCurso/apertura';
  }
  getAperturabyID(id : number){
    return this.http.get<AperturaDTO[]>(this.url + '/listApertura' +'/'+id);
  }

  getApertura(){
    return this.http.get<AperturaDTO[]>(this.url + '/listApertura');
  }

  public crearApertura(apertura: Apertura){
    return this.http.post<Apertura>(this.url + '/' + 'crearApertura', apertura);
  }

}
