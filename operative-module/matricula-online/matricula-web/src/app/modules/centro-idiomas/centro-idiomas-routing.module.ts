import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanEstudioComponent } from './plan-estudio/plan-estudio.component';

 const routes: Routes = [{
  path: 'conceptoPago',
  component: ConceptoPagosComponent
 },{
   path: 'planEstudios',
   component: PlanEstudioComponent,
},
{
  path: '**',
  redirectTo: ''
},
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentroIdiomasRoutingModule { }
