import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HorarioDTO } from 'src/app/domain/HorarioDTO';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/v1/programacionCurso/horario';
  }

  getHorarios() {
    return this.http.get<HorarioDTO[]>(this.url + '/' + 'listHorarios');
  }
  
  public getHorarioById(id: number) {
    return this.http.get<HorarioDTO>(this.url + '/' + 'obtenerHorarioById' + '/' + id);
  }

  public deleteHorarioById(id: number) {
    return this.http.delete<boolean>(this.url + '/' + 'eliminarCursoById' + '/' + id);
  }

/*
   public crearCurso(curso: Curso) {
     return this.http.post<Curso>(this.url + '/' + 'crearHorario', curso);
   }


   public editarCursoById(curso: Curso,id: number) {
     return this.http.put<Curso>(this.url + '/' + 'actualizarHorario'+ '/' + id, curso);
   }

   public deleteCursoById(id: number) {
     return this.http.delete<boolean>(this.url + '/' + 'eliminarHorarioById' + '/' + id);
   }
   
   */

}
