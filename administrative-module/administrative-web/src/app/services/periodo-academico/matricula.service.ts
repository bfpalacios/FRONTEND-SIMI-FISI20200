import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatriculaDTO } from 'src/app/domain/MatriculaDTO';
import { Matricula } from 'src/app/domain/Matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/matricula';
  }

  getMatriculas() {
    return this.http.get<MatriculaDTO[]>(this.url + '/' + 'listMatriculas');
  }
  
  public getMatriculaById(id: number) {
    return this.http.get<MatriculaDTO>(this.url + '/' + 'obtenerMatriculaById' + '/' + id);
  }

   public crearMatricula(pa: Matricula) {
     return this.http.post<Matricula>(this.url + '/' + 'crearMatricula', pa);
   }


   public editarMatriculaById(pa: Matricula,id: number) {
     return this.http.put<Matricula>(this.url + '/' + 'actualizarMatricula'+ '/' + id, pa);
   }

   public deleteMatriculaById(id: number) {
     return this.http.delete<boolean>(this.url + '/' + 'eliminarMatriculaById' + '/' + id);
   }

}
