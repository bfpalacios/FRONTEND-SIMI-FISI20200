import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptoPagoComponent } from './concepto-pago/concepto-pago.component';
import { CentroIdiomasRoutingModule } from './centro-idiomas-routing.module';



@NgModule({
  declarations: [ConceptoPagoComponent],
  imports: [
    CommonModule,
    CentroIdiomasRoutingModule
  ]
})
export class CentroIdiomasModule { }
