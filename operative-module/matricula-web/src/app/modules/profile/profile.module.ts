import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { HistorialAcademicoComponent } from './historial-academico/historial-academico.component';
import { InformacionAcademicaComponent } from './informacion-academica/informacion-academica.component';
import { CuentaUsuarioComponent } from './cuenta-usuario/cuenta-usuario.component';
import { InformacionAlumnoComponent } from './informacion-academica/informacion-alumno/informacion-alumno.component';
import { InformacionPersonalComponent } from './informacion-academica/informacion-personal/informacion-personal.component';
import { HistorialDatosAlumnoComponent } from './historial-academico/historial-datos-alumno/historial-datos-alumno.component';



@NgModule({
  declarations: [HistorialAcademicoComponent, InformacionAcademicaComponent, CuentaUsuarioComponent, HistorialDatosAlumnoComponent, InformacionAlumnoComponent, InformacionPersonalComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
