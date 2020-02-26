import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConceptoPagoComponent } from './concepto-pago/concepto-pago.component';
import { PlanEstudioComponent } from './plan-estudio/plan-estudio.component';
import { DocentesComponent} from './docentes/docentes.component';

const routes: Routes = [{
  path: 'conceptoPago',
  component: ConceptoPagoComponent
},{
  path: 'planEstudio',
  component: PlanEstudioComponent,
},{
  path: "docentes",
  component: DocentesComponent,
},
{
  path: '**',
  redirectTo: 'conceptoPago'
}
]; 

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class CentroIdiomasRoutingModule { }
