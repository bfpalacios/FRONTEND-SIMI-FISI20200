import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocenteUP } from 'src/app/domain/DocenteUP';

@Injectable({
  providedIn: 'root'
})
export class DocenteUPService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/v1/programacionDocente/docenteusuariopersona';
  }

  getDocentesUP() {
    return this.http.get<DocenteUP[]>(this.url + '/' + 'listDocenteUsuarioPersona');
  }

  getDocentesUPByCursoPeriodo(idCurso: number,idPeriodo: number) {
    return this.http.get<DocenteUP[]>(this.url + '/' + 'listDocentesByCursoPeriodo'+ '/' + idCurso+ '/' + idPeriodo);
  }
  
  public getDocenteUPById(id: number) {
    return this.http.get<DocenteUP>(this.url + '/' + 'obtenerDocenteUsuarioPersonaById' + '/' + id);
  }


   public crearDocente(docente: DocenteUP) {
     return this.http.post<DocenteUP>(this.url + '/' + 'crearDocenteUsuarioPersona', docente);
   }


   public editarDocenteById(docente: DocenteUP,id: string) {
     return this.http.put<DocenteUP>(this.url + '/' + 'actualizarDocenteUsuarioPersona'+ '/' + id, docente);
   }

   public deleteDocenteById(id: number) {
     return this.http.delete<String>(this.url + '/' + 'eliminarDocenteUsuarioPersonaById' + '/' + id);
   }

}
