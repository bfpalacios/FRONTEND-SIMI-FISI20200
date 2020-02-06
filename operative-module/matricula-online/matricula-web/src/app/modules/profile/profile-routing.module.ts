import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialAcademicoComponent } from './historial-academico/historial-academico.component';

 const routes: Routes = [{
  path: 'historialAcademico',
  component: HistorialAcademicoComponent,
},
{
  path: '**',
  redirectTo: 'HistorialAcademicoComponent'
},
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
