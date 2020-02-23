import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { User } from '../models/User';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';
import { InformacionPersonalService } from './data-user/informacion-personal.service';
import { MatriculaOnlineService } from './periodo-academico/matricula-online.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public user: User;
  private url: string;

  private get _toastService() { return this._injector.get(ToastrService); }
  private get router() { return this._injector.get(Router); }

  constructor(
    private http: HttpClient,
    private _injector: Injector,
    private infPersonalService: InformacionPersonalService,
    private matricula: MatriculaOnlineService) {
    this.url = 'simi/matricula/api/v1';
  }

  public accederSistema(): Promise<any> {
    return Observable.create(
      (observer: Observer<any>) => {
        this.http.get<User>(this.url + '/autorizacion').subscribe(data => {
          this.user = data;
          console.log('Usuario ->', this.user);
          observer.next('');
          observer.complete();
        }, () => {
         // this.router.navigate(['home/feed']);
          this._toastService.error('No se encontró el Servidor');
          console.log('No se encontró el Servidor');
        });
      }).toPromise();
  }

  public obtenerDatosUsuario() {
    return this.infPersonalService.obtenerDatosUsuario(this.user);
  }

  public getPagosSinUsar() {
    return this.matricula.getPagosSinUsar(this.user.codigo);
  }
}
