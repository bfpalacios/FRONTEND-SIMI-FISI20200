import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocenteUP } from 'src/app/domain/DocenteUP';

@Injectable({
  providedIn: 'root'
})
export class DocenteUPService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/docenteusuariopersona';
  }

  getDocentesUP() {
    return this.http.get<DocenteUP[]>(this.url + '/' + 'listDocenteUsuarioPersona');
  }
  
  public getDocenteUPById(id: number) {
    return this.http.get<DocenteUP>(this.url + '/' + 'obtenerDocenteUsuarioPersonaById' + '/' + id);
  }
/*
   public crearDocente(docente: Docente) {
     return this.http.post<Docente>(this.url + '/' + 'crearDocenteUsuarioPersona', docente);
   }


   public editarDocenteById(docente: Docente,id: number) {
     return this.http.put<Docente>(this.url + '/' + 'actualizarDocenteUsuarioPersona'+ '/' + id, docente);
   }

   public deleteDocenteById(id: number) {
     return this.http.delete<boolean>(this.url + '/' + 'eliminarDocenteUsuarioPersonaById' + '/' + id);
   }*/

}
