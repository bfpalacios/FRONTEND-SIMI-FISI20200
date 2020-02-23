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
import { CreateAlumnoComponent } from './alumnos/create-alumno/create-alumno.component';
import { EditarAlumnoComponent } from './alumnos/editar-alumno/editar-alumno.component';
import { CreateAulaComponent } from './aulas/create-aula/create-aula.component';
import { EditarAulaComponent } from './aulas/editar-aula/editar-aula.component';
import { CreateSedeComponent } from './sedes/create-sede/create-sede.component';
import { EditarSedeComponent } from './sedes/editar-sede/editar-sede.component';
import { CreateIdiomaComponent } from './idiomas/create-idioma/create-idioma.component';
import { EditarIdiomaComponent } from './idiomas/editar-idioma/editar-idioma.component';
import { CreateHorarioComponent } from './horarios/create-horario/create-horario.component';
import { EditarHorarioComponent } from './horarios/editar-horario/editar-horario.component';
import { CreateCursoComponent } from './cursos/create-curso/create-curso.component';
import { EditarCursoComponent } from './cursos/editar-curso/editar-curso.component';
import { CreateDocenteComponent } from './docentes/create-docente/create-docente.component';
import { EditarDocenteComponent } from './docentes/editar-docente/editar-docente.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [AlumnosComponent, AulasComponent, CursosComponent, DocentesComponent,
    HorariosComponent, IdiomasComponent , SedesComponent, CreateAlumnoComponent,
    EditarAlumnoComponent ,CreateAulaComponent,EditarAulaComponent,
    CreateSedeComponent,EditarSedeComponent,CreateIdiomaComponent,EditarIdiomaComponent,
    CreateHorarioComponent,EditarHorarioComponent,CreateCursoComponent,
    EditarCursoComponent,CreateDocenteComponent,EditarDocenteComponent],
    imports: [
    CommonModule,
   AdministracionInstitucionalRoutingModule,
   FormsModule,
   Ng2SearchPipeModule,
   NgxPaginationModule,
  //  MatSliderModule,
  //  MatFormFieldModule
  //  NgbModule
  ]
})
export class AdministracionInstitucionalModule { }
