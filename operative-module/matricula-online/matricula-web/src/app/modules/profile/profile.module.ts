import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { HistorialAcademicoComponent } from './historial-academico/historial-academico.component';
import { InformacionAcademicaComponent } from './informacion-academica/informacion-academica.component';



@NgModule({
  declarations: [HistorialAcademicoComponent, InformacionAcademicaComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
