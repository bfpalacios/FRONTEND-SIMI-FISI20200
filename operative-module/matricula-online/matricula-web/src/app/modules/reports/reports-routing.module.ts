import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* const routes: Routes = [{
  path: '',
  component: MainComponent,
},
{
  path: 'feed',
  component: FeedComponent,
},
{
  path: '**',
  redirectTo: ''
},
]; */

@NgModule({
  imports: [/* RouterModule.forChild(routes) */],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }