import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './usuarios/list/list.component';

const routes: Routes = [{
  path: 'listUsuarios',
  component: ListComponent,
},
{
  path: '**',
  redirectTo: 'listUsuarios'
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionUsuariosRoutingModule { }
