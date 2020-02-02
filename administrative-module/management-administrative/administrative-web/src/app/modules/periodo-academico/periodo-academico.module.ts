import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodoAcademicoRoutingModule } from './periodo-academico-routing.module';
import { ProgramacionCursosComponent } from './programacion-cursos/programacion-cursos.component';
import { MatriculadosComponent } from './matriculados/matriculados.component';
import { CicloAcademicoComponent } from './ciclo-academico/ciclo-academico.component';



@NgModule({
  declarations: [CicloAcademicoComponent, MatriculadosComponent , ProgramacionCursosComponent],
  imports: [
    CommonModule,
    PeriodoAcademicoRoutingModule
  ]
})
export class PeriodoAcademicoModule { }
