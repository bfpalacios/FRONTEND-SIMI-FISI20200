import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Docente } from 'src/app/domain/Docente';
import { DocenteDTO } from 'src/app/domain/DocenteDTO';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/docente';
  }

  getDocentes() {
    return this.http.get<DocenteDTO[]>(this.url + '/' + 'listDocentes');
  }
  
  public getDocenteById(id: number) {
    return this.http.get<DocenteDTO>(this.url + '/' + 'obtenerDocenteById' + '/' + id);
  }

   public crearDocente(docente: Docente) {
     return this.http.post<Docente>(this.url + '/' + 'crearDocente', docente);
   }


   public editarDocenteById(docente: Docente,id: number) {
     return this.http.put<Docente>(this.url + '/' + 'actualizarDocente'+ '/' + id, docente);
   }

   public deleteDocenteById(id: number) {
     return this.http.delete<boolean>(this.url + '/' + 'eliminarDocenteById' + '/' + id);
   }

}
