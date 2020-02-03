import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionMatriculaRoutingModule } from './administracion-matricula-routing.module';
import { MatriculaComponent } from './matricula/matricula.component';
import { MonitoreoMatriculaComponent } from './monitoreo-matricula/monitoreo-matricula.component';



@NgModule({
  declarations: [MatriculaComponent, MonitoreoMatriculaComponent,],
    imports: [
    CommonModule,
    AdministracionMatriculaRoutingModule
  ]
})
export class AdministracionMatriculaModule { }
