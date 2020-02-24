import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sede } from 'src/app/domain/Sede';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/v1/programacionCurso/sede';
  }

  getSedes() {
    return this.http.get<Sede[]>(this.url + '/' + 'listSedes');
  }
  
  public getSedeById(id: number) {
    return this.http.get<Sede>(this.url + '/' + 'obtenerSedeById' + '/' + id);
  }

   public crearSede(idioma: Sede) {
     return this.http.post<Sede>(this.url + '/' + 'crearSede', idioma);
   }


   public editarSedeById(idioma: Sede,id: number) {
     return this.http.put<Sede>(this.url + '/' + 'actualizarSede'+ '/' + id, idioma);
   }

   public deleteSedeById(id: number) {
     return this.http.delete<boolean>(this.url + '/' + 'eliminarSedeById' + '/' + id);
   }

}
