import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatriculaComponent } from './matricula/matricula.component';
import { MonitoreoMatriculaComponent } from './monitoreo-matricula/monitoreo-matricula.component';

const routes: Routes = [{
  path: 'matricula',
  component: MatriculaComponent,
},
{
  path: 'monitoreoMatricula',
  component: MonitoreoMatriculaComponent,
},
{
  path: '**',
  redirectTo: 'matricula'
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionMatriculaRoutingModule { }
