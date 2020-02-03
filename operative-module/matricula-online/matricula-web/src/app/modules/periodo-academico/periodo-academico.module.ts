import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodoAcademicoRoutingModule } from './periodo-academico-routing.module';
import { MatriculaOnlineComponent } from './matricula-online/matricula-online.component';



@NgModule({
  declarations: [MatriculaOnlineComponent],
  imports: [
    CommonModule,
    PeriodoAcademicoRoutingModule
  ]
})
export class PeriodoAcademicoModule { }
