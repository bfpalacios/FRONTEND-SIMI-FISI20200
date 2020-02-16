import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private user: User;
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'simi/api/v1';
  }

  public accederSistema(): Promise<any> {
    return Observable.create(
      (observer: Observer<any>) => {
        this.http.get<User>(this.url + '/autorizacion').subscribe(data => {
          this.user = data;
          console.log('Usuario ->', this.user);
          observer.next('');
          observer.complete();
        }, err => {
          observer.error(err);
        });
      }).toPromise();
  }

  public obtenerDatosEstudiante() {
    return this.get<Alumno>(this.url + '/alumno/' + this.user.codPerona);
  }
}
