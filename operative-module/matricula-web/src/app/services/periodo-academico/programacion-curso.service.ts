import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionCursoService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/programacionCurso/programacion';
   }

   getProgramacion(){
     return this.http.get<any[]>(this.url + '/listProgramacion');
   }

   getProgramacionbyID(id: number){
    return this.http.get<any[]>(this.url + '/listProgramacionbyID'+'/'+ id);
  }
}
