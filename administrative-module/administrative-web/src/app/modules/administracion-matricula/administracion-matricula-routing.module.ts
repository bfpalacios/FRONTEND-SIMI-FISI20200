import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { MonitoreoMatriculaComponent } from './monitoreo-matricula/monitoreo-matricula.component';
import { CreateMatriculaComponent } from './matriculas/create-matricula/create-matricula.component';
import { EditarMatriculaComponent } from './matriculas/editar-matricula/editar-matricula.component';

const routes: Routes = [
{  path: 'matricula',  component: MatriculasComponent},
{  path: 'matricula/crear',  component: CreateMatriculaComponent},
{  path: 'matricula/editar/:id',  component: EditarMatriculaComponent},
{  path: 'monitoreoMatricula',  component: MonitoreoMatriculaComponent},

{  path: '**',  redirectTo: 'matricula'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionMatriculaRoutingModule { }
