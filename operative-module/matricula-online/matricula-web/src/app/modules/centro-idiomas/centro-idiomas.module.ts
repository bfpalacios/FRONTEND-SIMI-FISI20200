import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentroIdiomasRoutingModule } from './centro-idiomas-routing.module';
import { PlanEstudioComponent } from './plan-estudio/plan-estudio.component';



@NgModule({
  declarations: [PlanEstudioComponent],
  imports: [
    CommonModule,
    CentroIdiomasRoutingModule
  ]
})
export class CentroIdiomasModule { }
