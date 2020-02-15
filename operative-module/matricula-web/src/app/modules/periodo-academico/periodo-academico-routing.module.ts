import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatriculaOnlineComponent } from './matricula-online/matricula-online.component';
import { MatricularComponent } from './matricula-online/matricular/matricular.component';
import { VerificarMatriculaComponent } from './matricula-online/matricular/verificar-matricula/verificar-matricula.component';
import { ProgramacionCursoComponent } from './programacion-curso/programacion-curso.component';
import { SolicitarAperturaCursoComponent } from './programacion-curso/solicitar-apertura-curso/solicitar-apertura-curso.component';

const routes: Routes = [
  {
    path: 'matriculaOnline/matricular',
    component: MatricularComponent,
  },
  {
    path: 'matriculaOnline/verificarMatricula',
    component: VerificarMatriculaComponent,
  },
  {
    path: 'matriculaOnline',
    component: MatriculaOnlineComponent,
  },
  {
    path: 'programacionCurso',
    component: ProgramacionCursoComponent,
  },
  {
    path: 'programacionCurso/solicitarAperturaCurso',
    component: SolicitarAperturaCursoComponent,
  },
  {
    path: '**',
    redirectTo: 'matriculaOnline'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodoAcademicoRoutingModule { }
