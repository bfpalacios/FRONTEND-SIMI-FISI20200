import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerNotFoundComponent } from './server-not-found/server-not-found.component';

const routes: Routes = [
{
  path: 'ServerNotFound',
  component: ServerNotFoundComponent,
},
{
  path: '**',
  redirectTo: ''
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
