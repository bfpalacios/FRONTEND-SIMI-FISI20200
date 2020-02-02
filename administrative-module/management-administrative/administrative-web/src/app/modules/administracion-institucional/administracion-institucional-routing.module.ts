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

const routes: Routes = [
{  path: 'alumnos',  component: AlumnosComponent},
{  path: 'alumnos/crear',  component: CreateAlumnoComponent},
{  path: 'alumnos/editar',  component: EditarAlumnoComponent},
{  path: 'aulas',  component: AulasComponent},
{  path: 'cursos',  component: CursosComponent},
{  path: 'docentes',  component: DocentesComponent},
{  path: 'horarios',  component: HorariosComponent},
{  path: 'idiomas',  component: IdiomasComponent},
{  path: 'sedes',  component: SedesComponent},
{  path: '**',  redirectTo: 'alumnos'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionInstitucionalRoutingModule { }
