import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosComponent } from './alumnos/alumnos.component';
import { AulasComponent } from './aulas/aulas.component';
import { CursosComponent } from './cursos/cursos.component';
import { DocentesComponent } from './docentes/docentes.component';
import { HorariosComponent } from './horarios/horarios.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { SedesComponent } from './sedes/sedes.component';
import { CreateAlumnoComponent } from './alumnos/create-alumno/create-alumno.component';
import { EditarAlumnoComponent } from './alumnos/editar-alumno/editar-alumno.component';
import { CreateAulaComponent } from './aulas/create-aula/create-aula.component';
import { EditarAulaComponent } from './aulas/editar-aula/editar-aula.component';
import { CreateSedeComponent } from './sedes/create-sede/create-sede.component';
import { EditarSedeComponent } from './sedes/editar-sede/editar-sede.component';
import { CreateIdiomaComponent } from './idiomas/create-idioma/create-idioma.component';
import { EditarIdiomaComponent } from './idiomas/editar-idioma/editar-idioma.component';
import { CreateHorarioComponent } from './horarios/create-horario/create-horario.component';
import { EditarHorarioComponent } from './horarios/editar-horario/editar-horario.component';
import { CreateCursoComponent } from './cursos/create-curso/create-curso.component';
import { EditarCursoComponent } from './cursos/editar-curso/editar-curso.component';
import { CreateDocenteComponent } from './docentes/create-docente/create-docente.component';
import { EditarDocenteComponent } from './docentes/editar-docente/editar-docente.component';

const routes: Routes = [
{  path: 'alumnos',  component: AlumnosComponent},
{  path: 'alumnos/crear',  component: CreateAlumnoComponent},
{  path: 'alumnos/editar',  component: EditarAlumnoComponent},
{  path: 'aulas',  component: AulasComponent},
{  path: 'aulas/crear',  component: CreateAulaComponent},
{  path: 'aulas/editar',  component: EditarAulaComponent},
{  path: 'cursos',  component: CursosComponent},
{  path: 'cursos/crear',  component: CreateCursoComponent},
{  path: 'cursos/editar',  component: EditarCursoComponent},
{  path: 'docentes',  component: DocentesComponent},
{  path: 'docentes/crear',  component: CreateDocenteComponent},
{  path: 'docentes/editar',  component: EditarDocenteComponent},
{  path: 'horarios',  component: HorariosComponent},
{  path: 'horarios/crear',  component: CreateHorarioComponent},
{  path: 'horarios/editar',  component: EditarHorarioComponent},
{  path: 'idiomas',  component: IdiomasComponent},
{  path: 'idiomas/crear',  component: CreateIdiomaComponent},
{  path: 'idiomas/editar',  component: EditarIdiomaComponent},
{  path: 'sedes',  component: SedesComponent},
{  path: 'sedes/crear',  component: CreateSedeComponent},
{  path: 'sedes/editar',  component: EditarSedeComponent},

{  path: '**',  redirectTo: 'alumnos'},
{  path: '**',  redirectTo: 'aulas'},
{  path: '**',  redirectTo: 'sedes'},
{  path: '**',  redirectTo: 'idiomas'},
{  path: '**',  redirectTo: 'horarios'},
{  path: '**',  redirectTo: 'cursos'},
{  path: '**',  redirectTo: 'docentes'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionInstitucionalRoutingModule { }
