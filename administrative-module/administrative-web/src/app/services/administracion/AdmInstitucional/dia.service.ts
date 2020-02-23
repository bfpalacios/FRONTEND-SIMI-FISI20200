import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dia } from 'src/app/domain/Dia';
@Injectable({
  providedIn: 'root'
})
export class DiaService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/diasclase';
  }

  getDias() {
    return this.http.get<Dia[]>(this.url + '/' + 'listDiasClase');
  }

 
  public getDiaById(id: number) {
    return this.http.get<Dia>(this.url + '/' + 'obtenerDiasClaseById' + '/' + id);
  }

}
