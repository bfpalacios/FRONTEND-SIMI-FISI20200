import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AdministracionInstitucionalRoutingModule } from './administracion-institucional-routing.module';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AulasComponent } from './aulas/aulas.component';
import { CursosComponent } from './cursos/cursos.component';
import { DocentesComponent } from './docentes/docentes.component';
import { HorariosComponent } from './horarios/horarios.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { SedesComponent } from './sedes/sedes.component';
import { AdministracionInstitucionalRoutingModule } from './administracion-institucional-routing.module';



@NgModule({
  declarations: [AlumnosComponent, AulasComponent, CursosComponent, DocentesComponent,
    HorariosComponent, IdiomasComponent , SedesComponent ],
    imports: [
    CommonModule,
   AdministracionInstitucionalRoutingModule
  ]
})
export class AdministracionInstitucionalModule { }
