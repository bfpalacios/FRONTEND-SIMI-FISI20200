import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idioma } from 'src/app/domain/Idioma';
@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/v1/programacionCurso/idioma';
  }

  getIdiomas() {
    return this.http.get<Idioma[]>(this.url + '/' + 'listIdiomas');
  }
  deProgCursosBySedePeriodo(ids: number,idp: number) {
    return this.http.get<Idioma[]>(this.url + '/' + 'listIdiomasPCSedePeriodo'+ '/' + ids+ '/' + idp);
  }
 
  public crearIdioma(idioma: Idioma) {
    return this.http.post<Idioma>(this.url + '/' + 'crearIdioma', idioma);
  }

  public getIdiomaById(id: number) {
    return this.http.get<Idioma>(this.url + '/' + 'obtenerIdiomaById' + '/' + id);
  }

  public editarIdiomaById(idioma: Idioma,id: number) {
    return this.http.put<Idioma>(this.url + '/' + 'actualizarIdioma'+ '/' + id, idioma);
  }

  public deleteIdiomaById(id: number) {
    return this.http.delete<String>(this.url + '/' + 'eliminarIdiomaById' + '/' + id);
  }

  
}
