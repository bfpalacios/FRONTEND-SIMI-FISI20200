import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from 'src/app/domain/Curso';
import { CursoDTO } from 'src/app/domain/CursoDTO';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/v1/programacionCurso/curso';
  }

  getCursos() {
    return this.http.get<CursoDTO[]>(this.url + '/' + 'listCursos');
  }
  
  public getCursoById(id: number) {
    return this.http.get<CursoDTO>(this.url + '/' + 'obtenerCursoById' + '/' + id);
  }

   public crearCurso(curso: Curso) {
     return this.http.post<Curso>(this.url + '/' + 'crearCurso', curso);
   }


   public editarCursoById(curso: Curso,id: number) {
     return this.http.put<Curso>(this.url + '/' + 'actualizarCurso'+ '/' + id, curso);
   }

   public deleteCursoById(id: number) {
     return this.http.delete<String>(this.url + '/' + 'eliminarCursoById' + '/' + id);
   }
   getCursosByIdioma(id: number) {
    return this.http.get<CursoDTO[]>(this.url + '/' + 'listCursosByIdioma'+ '/' + id);
  }
  getCursosByPeriodo(id: number) {
    return this.http.get<CursoDTO[]>(this.url + '/' + 'listCursosByPeriodo'+ '/' + id);
  }


  

}
