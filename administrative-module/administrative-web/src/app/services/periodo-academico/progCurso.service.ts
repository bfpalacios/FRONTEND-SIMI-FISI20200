import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProgCursoDTO } from 'src/app/domain/ProgCursoDTO';
import { ProgCurso } from 'src/app/domain/ProgCurso';

@Injectable({
  providedIn: 'root'
})
export class ProgCursoService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/v1/programacionCurso/progcurso';
  }

  getProgCurso() {
    return this.http.get<ProgCursoDTO[]>(this.url + '/' + 'listProgCursos');
  }

  public getProgCursoById(id: number) {
    return this.http.get<ProgCursoDTO>(this.url + '/' + 'obtenerProgCursoById' + '/' + id);
  }
  public getProgCursosPeriodo(idPeriodo: number) {
    return this.http.get<ProgCursoDTO[]>(this.url + '/' + 'listProgCursosByPeriodo' + '/' + idPeriodo);
  }

  public getProgCursosBySedePeriodo(idSede: number,idPeriodo: number) {
    return this.http.get<ProgCursoDTO[]>(this.url + '/' + 'listProgCursosBySedePeriodo' + '/' + idSede+ '/' + idPeriodo);
  }

   public crearProgCurso(pa: ProgCurso) {
     return this.http.post<ProgCurso>(this.url + '/' + 'crearProgCurso', pa);
   }


   public editarProgCursoById(pa: ProgCurso,id: number) {
     return this.http.put<ProgCurso>(this.url + '/' + 'actualizarProgCurso'+ '/' + id, pa);
   }

   public deleteProgCursoById(id: number) {
     return this.http.delete<boolean>(this.url + '/' + 'eliminarProgCursoById' + '/' + id);
   }

}
