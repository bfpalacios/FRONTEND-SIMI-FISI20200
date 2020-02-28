import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { HistorialAcademicoComponent } from './historial-academico/historial-academico.component';
import { InformacionAcademicaComponent } from './informacion-academica/informacion-academica.component';
import { CuentaUsuarioComponent } from './cuenta-usuario/cuenta-usuario.component';
import { HistorialDatosAlumnoComponent } from './historial-academica/historial-datos-alumno/historial-datos-alumno.component';



@NgModule({
  declarations: [HistorialAcademicoComponent, InformacionAcademicaComponent, CuentaUsuarioComponent, HistorialDatosAlumnoComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
