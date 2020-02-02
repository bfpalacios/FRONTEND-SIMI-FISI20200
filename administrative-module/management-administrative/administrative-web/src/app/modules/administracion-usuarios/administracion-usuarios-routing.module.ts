import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './usuarios/list/list.component';
import { TipoUsuariosComponent } from './tipo-usuarios/tipo-usuarios.component';
import { PermisosComponent } from './permisos/permisos.component';

const routes: Routes = [{
  path: 'listUsuarios',
  component: ListComponent,
},
{
  path: 'tipoUsuarios',
  component: TipoUsuariosComponent,
},{
  path: 'permisos',
  component: PermisosComponent,
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
