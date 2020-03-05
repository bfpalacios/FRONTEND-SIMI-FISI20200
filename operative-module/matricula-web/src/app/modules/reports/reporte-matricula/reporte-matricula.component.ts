import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatriculaOnlineService} from 'src/app/services/periodo-academico/matricula-online.service';
import { DataServiceService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-reporte-matricula',
  templateUrl: './reporte-matricula.component.html'
})
export class ReporteMatriculaComponent implements OnInit {
  public load: boolean;
  public matricula: any[];
  public date: number;
  constructor(
    private serviceMatricula: MatriculaOnlineService,
    private serviceData: DataServiceService, ) {
    this.load = true;
    this.date = Date.now();
  }

  ngOnInit() {
    this. getAperturabyID();
  }

  public getAperturabyID() {
    this.serviceMatricula.getMatriculaById(this.serviceData.user.id).subscribe(data => {
      this.matricula = data;
      this.load = false;
    }, error => {
      console.log(error);
    });
  }
}
