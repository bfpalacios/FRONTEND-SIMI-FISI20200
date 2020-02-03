import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatriculadosComponent } from './matriculados/matriculados.component';
import { CicloAcademicoComponent } from './ciclo-academico/ciclo-academico.component';
import { ProgramacionCursosComponent } from './programacion-cursos/programacion-cursos.component';

const routes: Routes = [{
  path: 'cicloAcademico',
  component: CicloAcademicoComponent,
},
{
  path: 'matriculados',
  component: MatriculadosComponent,
},{
  path: 'programacionCursos',
  component: ProgramacionCursosComponent,
},
{
  path: '**',
  redirectTo: 'programacionCursos'
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodoAcademicoRoutingModule { }
