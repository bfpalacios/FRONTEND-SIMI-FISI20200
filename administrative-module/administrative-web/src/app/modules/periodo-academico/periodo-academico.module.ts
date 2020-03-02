import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodoAcademicoRoutingModule } from './periodo-academico-routing.module';
import { ProgramacionCursosComponent } from './programacion-cursos/programacion-cursos.component';
import { MatriculadosComponent } from './matriculados/matriculados.component';
import { CicloAcademicoComponent } from './ciclo-academico/ciclo-academico.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { CreateCicloComponent } from './ciclo-academico/create-ciclo/create-ciclo.component';
import { EditarCicloComponent } from './ciclo-academico/editar-ciclo/editar-ciclo.component';
import { DocenteCursoComponent } from './docente-curso/docente-curso.component';
import { CrearDocenteCursoComponent } from './docente-curso/crear-docente-curso/crear-docente-curso.component';
import { EditarDocenteCursoComponent } from './docente-curso/editar-docente-curso/editar-docente-curso.component';
import { CreateProgramacionCursosComponent } from './programacion-cursos/create-programacion-cursos/create-programacion-cursos.component';
import { EditarProgramacionCursosComponent } from './programacion-cursos/editar-programacion-cursos/editar-programacion-cursos.component';


@NgModule({
  declarations: [CicloAcademicoComponent, MatriculadosComponent , ProgramacionCursosComponent, CreateCicloComponent, 
    EditarCicloComponent, DocenteCursoComponent, CrearDocenteCursoComponent, EditarDocenteCursoComponent, 
    CreateProgramacionCursosComponent, EditarProgramacionCursosComponent] ,
  imports: [
    CommonModule,
    PeriodoAcademicoRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ]
})
export class PeriodoAcademicoModule { }
