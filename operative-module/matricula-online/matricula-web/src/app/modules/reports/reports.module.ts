import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReporteMatriculaComponent } from './reporte-matricula/reporte-matricula.component';
import { ReporteEvaluacionesComponent } from './reporte-evaluaciones/reporte-evaluaciones.component';
import { ReportePagosComponent } from './reporte-pagos/reporte-pagos.component';



@NgModule({
  declarations: [ReporteMatriculaComponent, ReporteEvaluacionesComponent, ReportePagosComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule  
  ]
})
export class ReportsModule { }
