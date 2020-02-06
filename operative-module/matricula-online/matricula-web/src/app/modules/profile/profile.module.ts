import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { HistorialAcademicoComponent } from './historial-academico/historial-academico.component';



@NgModule({
  declarations: [HistorialAcademicoComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
