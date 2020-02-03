import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionSistemaRoutingModule } from './administracion-sistema-routing.module';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { SistemaGeneralComponent } from './sistema-general/sistema-general.component';



@NgModule({
  declarations: [ConfiguracionComponent, SistemaGeneralComponent],
  imports: [
    CommonModule,
    AdministracionSistemaRoutingModule
  ]
})
export class AdministracionSistemaModule { }
