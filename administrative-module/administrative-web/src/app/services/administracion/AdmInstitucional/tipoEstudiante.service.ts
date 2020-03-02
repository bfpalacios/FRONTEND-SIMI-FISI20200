import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoEstudiante } from 'src/app/domain/TipoEstudiante';

@Injectable({
  providedIn: 'root'
})
export class TipoEstudianteService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/v1/procesomatricula/tipoestudiante';
  }

  getTipoEstudiantes() {
    return this.http.get<TipoEstudiante[]>(this.url + '/' + 'listTipoEstudiante');
  }

   
  public getTipoEstudianteById(id: number) {
    return this.http.get<TipoEstudiante>(this.url + '/' + 'obtenerTipoEstudianteById' + '/' + id);
  }


   public crearTipoEstudiante(docente: TipoEstudiante) {
     return this.http.post<TipoEstudiante>(this.url + '/' + 'crearTipoEstudiante', docente);
   }


   public editarTipoEstudianteById(docente: TipoEstudiante,id: string) {
     return this.http.put<TipoEstudiante>(this.url + '/' + 'actualizarTipoEstudiante'+ '/' + id, docente);
   }

   public eliminarTipoEstudianteById(id: number) {
     return this.http.delete<String>(this.url + '/' + 'eliminarTipoEstudianteById' + '/' + id);
   }

}
