import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import { Path } from 'src/app/Path';
@Injectable({
  providedIn: 'root'
})
export class SistemaMatriculaService {

  private url: string;
  constructor(
    private http: HttpClient,
    private _injector: Injector) {
    this.url = 'api/v1';
   }

   private get _toastService() { return this._injector.get(ToastrService); }

  verificarSistemaMatricula(): Promise<any> {
    return Observable.create(
      (observer: Observer<any>) => {
     this.http.get<boolean>(Path.BASE_PATH +this.url + '/sistema/verificarSistemaMatricula').subscribe(data => {
       console.log('data -> ', data);
      observer.next('');
      observer.complete();
     }, () => {
       this._toastService.error('No se encontró el Servidor');
       console.log('No se encontró el Servidor');
     });
   }).toPromise();
  }
}
