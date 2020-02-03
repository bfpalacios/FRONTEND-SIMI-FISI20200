import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodoAcademicoRoutingModule } from './periodo-academico-routing.module';
import { MatriculaOnlineComponent } from './matricula-online/matricula-online.component';
import { MatricularComponent } from './matricula-online/matricular/matricular.component';



@NgModule({
  declarations: [MatriculaOnlineComponent, MatricularComponent],
  imports: [
    CommonModule,
    PeriodoAcademicoRoutingModule
  ]
})
export class PeriodoAcademicoModule { }
