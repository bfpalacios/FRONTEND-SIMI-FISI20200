import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plan } from 'src/app/domain/Plan';
@Injectable({
  providedIn: 'root'
})
export class PlanEstudioService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/programacionCurso/plan';
   }

   getPlanDeEstudios(){
     return this.http.get<Plan[]>(this.url + '/listPlan');
   }
}
