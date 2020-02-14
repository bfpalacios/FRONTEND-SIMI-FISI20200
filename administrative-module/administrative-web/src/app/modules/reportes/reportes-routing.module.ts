import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportesPagosComponent } from './reportes-pagos/reportes-pagos.component';
import { ReportesInstitucionalesComponent } from './reportes-institucionales/reportes-institucionales.component';
import { ImportarReportesPagosComponent } from './reportes-pagos/importar-reportes-pagos/importar-reportes-pagos.component';

const routes: Routes = [{
  path: 'pagos',
  component: ReportesPagosComponent,
},
{
  path: 'pagos/importarPagos',
  component: ImportarReportesPagosComponent
},
{
  path: 'institucionales',
  component: ReportesInstitucionalesComponent,
},
{
  path: '**',
  redirectTo: 'pagos'
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
