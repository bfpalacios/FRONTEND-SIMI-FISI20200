import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstudianteUP } from 'src/app/domain/EstudianteUP';

@Injectable({
  providedIn: 'root'
})
export class EstudianteUPService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/v1/procesomatricula/estudianteusuariopersona';
  }

  getEstudianteUP() {
    return this.http.get<EstudianteUP[]>(this.url + '/' + 'listEstudianteUsuarioPersonas');
  }

  public getEstudianteUPMatriculadosByProgCurso(id: number) {
    return this.http.get<EstudianteUP>(this.url + '/' + 'listEstudiantesMatriculadosByProgCurso' + '/' + id);
  }

  public getEstudianteUPByTipoEstudiante(id: number) {
    return this.http.get<EstudianteUP>(this.url + '/' + 'listEstudiantesByTipoEstudiante' + '/' + id);
  }

  getestudianteUPByCursoPeriodo(idCurso: number,idPeriodo: number) {
    return this.http.get<EstudianteUP[]>(this.url + '/' + 'listEstudiantesByCursoPeriodo'+ '/' + idCurso+ '/' + idPeriodo);
  }
  


  public getEstudianteUPById(id: number) {
    return this.http.get<EstudianteUP>(this.url + '/' + 'obtenerEstudianteUsuarioPersonaById' + '/' + id);
  }


   public crearEstudianteUP(docente: EstudianteUP) {
     return this.http.post<EstudianteUP>(this.url + '/' + 'crearEstudianteUsuarioPersona', docente);
   }


   public editarEstudianteUPById(docente: EstudianteUP,id: string) {
     return this.http.put<EstudianteUP>(this.url + '/' + 'actualizarEstudianteUsuarioPersona'+ '/' + id, docente);
   }

   public deleteEstudianteUPById(id: number) {
     return this.http.delete<String>(this.url + '/' + 'eliminarEstudianteUsuarioPersonaById' + '/' + id);
   }

}
