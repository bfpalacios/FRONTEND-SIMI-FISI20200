import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { programacionCursos } from '../models/programacion-cursos';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionCursoService {
    
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/programacion/listProgramacion';
  }

  getProgramacionCursos() {
    return this.http.get<any>(this.url);
  }
  
 

}
