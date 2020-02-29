import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NotaDTO } from 'src/app/domain/NotaDTO';
import { DetalleNota } from 'src/app/domain/DetalleNota';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/administracionNota/nota';
  }

  public getNotabyID(id : number){
    return this.http.get<NotaDTO[]>(this.url + '/listNota' + '/' + id);
  }

  public getDetallebyID(id : number){
    return this.http.get<DetalleNota[]>(this.url + '/listDetalle/' + id);
  }

  public editPromedio(id : number){
    return this.http.post<Boolean>(this.url + '/actualizarPromedio' + '/' + id);
  }

  public crearDetalle(detalle : DetalleNota[]){
    return this.http.post<Boolean>(this.url + '/crearDetalle/' + detalle);
  }

  public editDetalle(detalle : DetalleNota, id: number){
    return this.http.put<DetalleNota>(this.url + '/actualizarDetalle/' + detalle, id);
  }

  public deleteDetalle(id : number){
    return this.http.delete<Boolean>(this.url + '/eliminarDetalleById/' + id);
  }

}
