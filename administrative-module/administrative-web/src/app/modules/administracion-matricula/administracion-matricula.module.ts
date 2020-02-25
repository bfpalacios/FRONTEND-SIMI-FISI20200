import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionMatriculaRoutingModule } from './administracion-matricula-routing.module';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { MonitoreoMatriculaComponent } from './monitoreo-matricula/monitoreo-matricula.component';
import { CreateMatriculaaComponent } from './matriculas/create-matricula/create-matricula.component';



@NgModule({
  declarations: [MatriculasComponent, MonitoreoMatriculaComponent,CreateMatriculaaComponentg],
    imports: [
    CommonModule,
    AdministracionMatriculaRoutingModule
  ]
})
export class AdministracionMatriculaModule { }
