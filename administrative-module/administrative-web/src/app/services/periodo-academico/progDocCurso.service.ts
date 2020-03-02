import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProgDocCurso } from 'src/app/domain/ProgDocCurso';
import { ProgDocCursoDTO } from 'src/app/domain/ProgDocCursoDTO';

@Injectable({
  providedIn: 'root'
})
export class ProgDocCursoService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/v1/programacionCurso/progdoccurso';  }

  getProgDocCurso() {
    return this.http.get<ProgDocCursoDTO[]>(this.url + '/' + 'listProgDocCursos');
  }

  getProgDocCursoByPeriodo(id: number) {
    return this.http.get<ProgDocCursoDTO[]>(this.url + '/' + 'listProgDocCursosByPeriodo' + '/' + id);
  }

  
  public getProgDocCursoById(id: number) {
    return this.http.get<ProgDocCursoDTO>(this.url + '/' + 'obtenerProgDocCursoById' + '/' + id);
  }

   public crearProgDocCurso(pa: ProgDocCurso) {
     return this.http.post<ProgDocCurso>(this.url + '/' + 'crearProgDocCurso', pa);
   }


   public editarProgDocCursoById(pa: ProgDocCurso,id: number) {
     return this.http.put<ProgDocCurso>(this.url + '/' + 'actualizarProgDocCurso'+ '/' + id, pa);
   }

   public deleteProgDocCursoById(id: number) {
     return this.http.delete<boolean>(this.url + '/' + 'eliminarProgDocCursoById' + '/' + id);
   }

}
