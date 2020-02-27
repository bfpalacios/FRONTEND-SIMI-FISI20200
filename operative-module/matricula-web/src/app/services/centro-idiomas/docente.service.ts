import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { DocenteDTO } from 'src/app/domain/DocenteDTO';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/matricula/api/v1/programacionDocente/docente';
  }
  public getDocentes() {
    return this.http.get<DocenteDTO[]>(this.url + '/' + 'listDocentes');
  }
}
