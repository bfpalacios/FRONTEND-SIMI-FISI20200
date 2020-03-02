import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionMatriculaRoutingModule } from './administracion-matricula-routing.module';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { CreateMatriculaComponent } from './matriculas/create-matricula/create-matricula.component';
import { EditarMatriculaComponent } from './matriculas/editar-matricula/editar-matricula.component';
import { MonitoreoMatriculaComponent } from './monitoreo-matricula/monitoreo-matricula.component';

import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { Select2Module } from 'ng2-select2';

@NgModule({
  declarations: [MatriculasComponent, MonitoreoMatriculaComponent, CreateMatriculaComponent, EditarMatriculaComponent],
    imports: [ 
    CommonModule,
    AdministracionMatriculaRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    Select2Module
  ]
})
export class AdministracionMatriculaModule { }