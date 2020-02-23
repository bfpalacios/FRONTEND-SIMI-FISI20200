import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeriodoAcademico } from 'src/app/domain/PeriodoAcademico';

@Injectable({
  providedIn: 'root'
})
export class PeriodoAcademicoService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/periodoacademico';
  }

  getPeriodosAcademicos() {
    return this.http.get<PeriodoAcademico[]>(this.url + '/' + 'listPeriodosAcademicos');
  }
  
  public getPeriodoAcademicoById(id: number) {
    return this.http.get<PeriodoAcademico>(this.url + '/' + 'obtenerPeriodoAcademicoById' + '/' + id);
  }

   public crearPeriodoAcademico(pa: PeriodoAcademico) {
     return this.http.post<PeriodoAcademico>(this.url + '/' + 'crearPeriodoAcademico', pa);
   }


   public editarPeriodoAcademicoById(pa: PeriodoAcademico,id: number) {
     return this.http.put<PeriodoAcademico>(this.url + '/' + 'actualizarPeriodoAcademico'+ '/' + id, pa);
   }

   public deletePeriodoAcademicoById(id: number) {
     return this.http.delete<boolean>(this.url + '/' + 'eliminarPeriodoAcademicoById' + '/' + id);
   }

}
