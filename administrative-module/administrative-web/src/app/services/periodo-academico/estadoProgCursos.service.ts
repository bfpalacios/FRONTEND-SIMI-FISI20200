import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatriculaDTO } from 'src/app/domain/MatriculaDTO';
import { Matricula } from 'src/app/domain/Matricula';
import { EstadoProgCurso } from 'src/app/domain/EstadoProgCurso';

@Injectable({
  providedIn: 'root'
})
export class EstadoPCService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/v1/programacionCurso/estadoprogcurso';
  }

  getEstadosPC() {
    return this.http.get<EstadoProgCurso[]>(this.url + '/' + 'listEstadoProgCursos');
  }
  
  public getEstadoPCById(id: number) {
    return this.http.get<EstadoProgCurso>(this.url + '/' + 'obtenerEstadoProgCursoById' + '/' + id);
  }

   public crearEstadoPC(pa: Matricula) {
     return this.http.post<EstadoProgCurso>(this.url + '/' + 'crearEstadoProgCurso', pa);
   }


   public editarEstadoPCById(pa: Matricula,id: number) {
     return this.http.put<EstadoProgCurso>(this.url + '/' + 'actualizarEstadoProgCurso'+ '/' + id, pa);
   }

   public deleteEstadoPCById(id: number) {
     return this.http.delete<boolean>(this.url + '/' + 'eliminarEstadoProgCursoById' + '/' + id);
   }

}
