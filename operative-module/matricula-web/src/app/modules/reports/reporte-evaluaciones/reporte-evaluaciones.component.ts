import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-reporte-evaluaciones',
  templateUrl: './reporte-evaluaciones.component.html'
})
export class ReporteEvaluacionesComponent implements OnInit {

  public load: boolean;
  public cursos: any[];
  constructor(private dateService: DataServiceService) {
    this.load = true;
   }

  ngOnInit() {
    this.getCursosDelAlumno();
  }

  public getCursosDelAlumno() {
    this.dateService.getCursosDelAlumno().subscribe(data => {
      this.cursos = data;
      this.load = false;
    });

  }

}
