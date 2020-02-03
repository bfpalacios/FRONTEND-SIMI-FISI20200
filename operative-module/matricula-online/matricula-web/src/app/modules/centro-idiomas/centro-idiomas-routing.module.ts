import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConceptoPagoComponent } from './concepto-pago/concepto-pago.component';



const routes: Routes = [{
  path: 'conceptoPago',
  component: ConceptoPagoComponent,
},
{
  path: '**',
  redirectTo: ''
},
]; 

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class CentroIdiomasRoutingModule { }
