import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './usuarios/list/list.component';
import { AdministracionUsuariosRoutingModule } from './administracion-usuarios-routing.module';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    AdministracionUsuariosRoutingModule
  ]
})
export class AdministracionUsuariosModule { }
