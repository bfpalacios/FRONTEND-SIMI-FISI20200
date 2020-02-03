import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatriculaOnlineComponent} from './matricula-online/matricula-online.component';

const routes: Routes = [{
  path: 'matriculaOnline',
  component: MatriculaOnlineComponent,
},
{
  path: '**',
  redirectTo: 'matriculaOnline'
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodoAcademicoRoutingModule { }
