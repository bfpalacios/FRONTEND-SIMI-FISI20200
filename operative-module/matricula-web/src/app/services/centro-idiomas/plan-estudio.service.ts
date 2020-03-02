import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanEstudioService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/programacionCurso/plan';
   }

   getPlanDeEstudios(){
     return this.http.get<any[]>(this.url + '/listPlan');
   }
}
