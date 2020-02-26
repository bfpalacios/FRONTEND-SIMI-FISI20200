import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptoPagoComponent } from './concepto-pago/concepto-pago.component';
import { CentroIdiomasRoutingModule } from './centro-idiomas-routing.module';
import { PlanEstudioComponent } from './plan-estudio/plan-estudio.component';
import { DocentesComponent } from './docentes/docentes.component';



@NgModule({
  declarations: [ConceptoPagoComponent, 
                 PlanEstudioComponent, DocentesComponent],
  imports: [
    CommonModule,
    CentroIdiomasRoutingModule
  ]
})
export class CentroIdiomasModule { }
