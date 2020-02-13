import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nivel } from 'src/app/domain/Nivel';
@Injectable({
  providedIn: 'root'
})
export class NivelService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/nivel';
  }

  getNiveles() {
    return this.http.get<Nivel[]>(this.url + '/' + 'listNiveles');
  }

   public getNivelById(id: number) {
    return this.http.get<Nivel>(this.url + '/' + 'obtenerNivelById' + '/' + id);
  }

  // public editarIdiomaById(idioma: Idioma,id: number) {
  //   return this.http.put<Idioma>(this.url + '/' + 'actualizarIdioma'+ '/' + id, idioma);
  // }

  // public deleteIdiomaById(id: number) {
  //   return this.http.delete<boolean>(this.url + '/' + 'eliminarIdiomaById' + '/' + id);
  // }
  // public crearIdioma(idioma: Idioma) {
  //   return this.http.post<Idioma>(this.url + '/' + 'crearIdioma', idioma);
  // }


}
