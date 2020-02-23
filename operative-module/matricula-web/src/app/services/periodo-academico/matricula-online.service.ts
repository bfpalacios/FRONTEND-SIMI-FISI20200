import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class MatriculaOnlineService {

 
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = 'simi/matricula/api/v1';
  }

  public getPagosSinUsar(codUser: number) {
    return this.http.get<any[]>(this.url + '/matriculaOnline/pagosSinUsar/' + codUser);
  }
}
