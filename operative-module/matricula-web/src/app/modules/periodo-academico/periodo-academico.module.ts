import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodoAcademicoRoutingModule } from './periodo-academico-routing.module';
import { MatriculaOnlineComponent } from './matricula-online/matricula-online.component';
import { MatricularComponent } from './matricula-online/matricular/matricular.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { VerificarMatriculaComponent } from './matricula-online/matricular/verificar-matricula/verificar-matricula.component';
import { ProgramacionCursoComponent } from './programacion-curso/programacion-curso.component';
import { SolicitarAperturaCursoComponent } from './programacion-curso/solicitar-apertura-curso/solicitar-apertura-curso.component';

@NgModule({
  declarations: [MatriculaOnlineComponent, MatricularComponent, VerificarMatriculaComponent, ProgramacionCursoComponent, SolicitarAperturaCursoComponent],
  imports: [
    CommonModule,
    PeriodoAcademicoRoutingModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ]
})
export class PeriodoAcademicoModule { }
