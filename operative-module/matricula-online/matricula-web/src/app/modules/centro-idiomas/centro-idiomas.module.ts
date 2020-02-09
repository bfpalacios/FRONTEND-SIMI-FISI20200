import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptoPagoComponent } from './concepto-pago/concepto-pago.component';
import { CentroIdiomasRoutingModule } from './centro-idiomas-routing.module';
import { PlanEstudioComponent } from './plan-estudio/plan-estudio.component';



@NgModule({
  declarations: [ConceptoPagoComponent, 
                 PlanEstudioComponent],
  imports: [
    CommonModule,
    CentroIdiomasRoutingModule
  ]
})
export class CentroIdiomasModule { }
