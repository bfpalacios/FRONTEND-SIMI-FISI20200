import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionCursoService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/programacion';
   }

   getProgramacion(){
     return this.http.get<any[]>(this.url + '/listProgramacion');
   }
}
