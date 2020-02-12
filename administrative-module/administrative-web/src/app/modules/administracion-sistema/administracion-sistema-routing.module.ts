import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaGeneralComponent } from './sistema-general/sistema-general.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';


const routes: Routes = [{
  path: 'sistemaGeneral',
  component: SistemaGeneralComponent,
},
{
  path: 'configuracion',
  component: ConfiguracionComponent,
},
{
  path: '**',
  redirectTo: 'sistemaGeneral'
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionSistemaRoutingModule { }
