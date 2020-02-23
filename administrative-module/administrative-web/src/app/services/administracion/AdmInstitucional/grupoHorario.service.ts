import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GrupoHorario } from 'src/app/domain/GrupoHorario';

@Injectable({
  providedIn: 'root'
})
export class GrupoHorarioService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/grupoHorario';
  }

  getGrupoHorarios() {
    return this.http.get<GrupoHorario[]>(this.url + '/' + 'listGrupoHorario');
  }
  
  public getGrupoHorarioById(id: number) {
    return this.http.get<GrupoHorario>(this.url + '/' + 'obtenerCursoById' + '/' + id);
  }

  public deleteGrupoHorarioById(id: number) {
    return this.http.delete<boolean>(this.url + '/' + 'eliminarCursoById' + '/' + id);
  }

/*
   public crearCurso(curso: Curso) {
     return this.http.post<Curso>(this.url + '/' + 'crearCurso', curso);
   }


   public editarCursoById(curso: Curso,id: number) {
     return this.http.put<Curso>(this.url + '/' + 'actualizarCurso'+ '/' + id, curso);
   }

   public deleteCursoById(id: number) {
     return this.http.delete<boolean>(this.url + '/' + 'eliminarCursoById' + '/' + id);
   }
   
   */

}
