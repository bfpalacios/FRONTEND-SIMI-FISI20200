import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanEstudioComponent } from './plan-estudio/plan-estudio.component';

 const routes: Routes = [{
  path: '',
  component: PlanEstudioComponent,
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
export class CentroIdiomasRoutingModule { }
