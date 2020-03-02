import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { User } from '../models/User';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { InformacionPersonalService } from './data-user/informacion-personal.service';
import { MatriculaOnlineService } from './periodo-academico/matricula-online.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public authenticated: boolean;
  public user: User;
  private url: string;
  private get _toastService() { return this.injector.get(ToastrService); }
  private get router() { return this.injector.get(Router); }

  constructor(
    private http: HttpClient,
    private injector: Injector,
    private infPersonalService: InformacionPersonalService,
    private matricula: MatriculaOnlineService) {
    this.authenticated = false;
    this.url = 'simi/matricula/api/v1';
  }

  public accederSistema(): Promise<any> {
    // tslint:disable-next-line: deprecation
    return Observable.create(
      (observer: Observer<any>) => {
        this.user = this.getSessionStorage();
        this.http.post<User>(this.url + '/autorizacion', this.user).subscribe(data => {
          if (data != null) {
            this.user = data;
            observer.next('');
            observer.complete();
          } else {
            //location.href = 'http://165.227.89.167/';
            this._toastService.error('Usuario autenticado no válido.');
          }
        }, () => {
          this._toastService.error('No se encontró el Servidor');
        });
      }).toPromise();
  }

  public obtenerDatosUsuario() {
    return this.infPersonalService.obtenerDatosUsuario(this.user);
  }

  public obtenerInformacionAcademica() {
    return this.infPersonalService.obtenerInformacionAcademica(this.user);
  }

  public getPagosSinUsar() {
    return this.matricula.getPagosSinUsar(this.user.codigo);
  }

  public matricularOnline(cursos: any[]) {
    return this.matricula.matricularOnline(cursos, this.user.codigo);
  }
  private getSessionStorage() {
    const id = +(sessionStorage.getItem('SIMI-ID'));
    const email = sessionStorage.getItem('SIMI-EMAIL');
    const rol = +(sessionStorage.getItem('SIMI-TYPE'));
    const user = new User();
    if (email != null) {
      this.authenticated = true;
      user.setUser(id, email, rol);
      this.router.navigate(['home']);
    } else {
      this.authenticated = false;
      user.setUser(1, 'nataly@unmsm.edu.pe', 1);
    }
    return user;
  }
}
