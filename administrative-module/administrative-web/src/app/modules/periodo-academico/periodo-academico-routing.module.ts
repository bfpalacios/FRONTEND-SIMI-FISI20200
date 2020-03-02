import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { MatriculadosComponent } from './matriculados/matriculados.component';
import { CicloAcademicoComponent } from './ciclo-academico/ciclo-academico.component';
import { ProgramacionCursosComponent } from './programacion-cursos/programacion-cursos.component';
import { DocenteCursoComponent } from './docente-curso/docente-curso.component';
import { CrearDocenteCursoComponent } from './docente-curso/crear-docente-curso/crear-docente-curso.component';
import { EditarDocenteCursoComponent } from './docente-curso/editar-docente-curso/editar-docente-curso.component';
import { EditarCicloComponent } from './ciclo-academico/editar-ciclo/editar-ciclo.component';
import { CreateCicloComponent } from './ciclo-academico/create-ciclo/create-ciclo.component';
import { CreateProgramacionCursosComponent } from './programacion-cursos/create-programacion-cursos/create-programacion-cursos.component';
import { EditarProgramacionCursosComponent } from './programacion-cursos/editar-programacion-cursos/editar-programacion-cursos.component';

const routes: Routes = [
{  path: 'cicloAcademico', component: CicloAcademicoComponent},
{  path: 'cicloAcademico/crear',  component: CreateCicloComponent},
{  path: 'cicloAcademico/editar/:id',  component: EditarCicloComponent},

{  path: 'matriculados',  component: MatriculadosComponent},

{  path: 'programacionCursos',  component: ProgramacionCursosComponent},
{  path: 'programacionCursos/crear',  component: CrearDocenteCursoComponent},
{  path: 'programacionCursos/editar/:id',  component: EditarDocenteCursoComponent},

{  path: 'programacionDocente', component: DocenteCursoComponent},
{  path: 'programacionDocente/crear',  component: CreateProgramacionCursosComponent},
{  path: 'programacionDocente/editar/:id',  component: EditarProgramacionCursosComponent},


{  path: '**',  redirectTo: 'programacionCursos'},

/*
{  path: 'alumnos',  component: AlumnosComponent},
{  path: 'alumnos/crear',  component: CreateAlumnoComponent},
{  path: 'alumnos/editar/:id',  component: EditarAlumnoComponent},
{  path: 'aulas',  component: AulasComponent},
{  path: 'aulas/crear',  component: CreateAulaComponent},
{  path: 'aulas/editar/:id',  component: EditarAulaComponent},
{  path: 'cursos',  component: CursosComponent},
{  path: 'cursos/crear',  component: CreateCursoComponent},
{  path: 'cursos/editar/:id',  component: EditarCursoComponent},
{  path: 'docentes',  component: DocentesComponent},
{  path: 'docentes/crear',  component: CreateDocenteComponent},
{  path: 'docentes/editar/:id',  component: EditarDocenteComponent},
{  path: 'horarios',  component: HorariosComponent},
{  path: 'horarios/crear',  component: CreateHorarioComponent},
{  path: 'horarios/editar/:id',  component: EditarHorarioComponent},
{  path: 'idiomas',  component: IdiomasComponent},
{  path: 'idiomas/crear',  component: CreateIdiomaComponent},
{  path: 'idiomas/editar/:id',  component: EditarIdiomaComponent},
{  path: 'sedes',  component: SedesComponent},
{  path: 'sedes/crear',  component: CreateSedeComponent},
{  path: 'sedes/editar',  component: EditarSedeComponent}, */


];

@NgModule({
   imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodoAcademicoRoutingModule { }
