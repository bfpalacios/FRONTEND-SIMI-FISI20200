import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatriculaOnlineComponent} from './matricula-online/matricula-online.component';

const routes: Routes = [{
  path: '',
  component: MatriculaOnlineComponent,
},
/*{
  path: 'feed',
  component: FeedComponent,
},
{
  path: '**',
  redirectTo: ''
},*/
];

@NgModule({
  imports: [/* RouterModule.forChild(routes) */],
  exports: [RouterModule]
})
export class PeriodoAcademicoRoutingModule { }
