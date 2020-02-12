import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionServiceService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'simi/ api/v1/autorizacion';
  }

  public accederSistema(codigo: string, tipo: string) {
    return this.http.get<boolean>(this.url + '/' + codigo + '/' + tipo);
  }
}
