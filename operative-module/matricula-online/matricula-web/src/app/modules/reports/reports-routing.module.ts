import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporteMatriculaComponent } from './reporte-matricula/reporte-matricula.component';
import { ReporteEvaluacionesComponent } from './reporte-evaluaciones/reporte-evaluaciones.component';
import { ReportePagosComponent } from './reporte-pagos/reporte-pagos.component';

const routes: Routes = [
  {
    path: 'reporteMatricula',
    component: ReporteMatriculaComponent,
  },
  {
    path: 'reporteEvaluaciones',
    component: ReporteEvaluacionesComponent,
  },
  {
    path: 'reportePagos',
    component: ReportePagosComponent,
  },
  {
    path: '**',
    redirectTo: 'reporteMatricula'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
