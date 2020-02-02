import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './usuarios/list/list.component';
import { AdministracionUsuariosRoutingModule } from './administracion-usuarios-routing.module';
import { TipoUsuariosComponent } from './tipo-usuarios/tipo-usuarios.component';



@NgModule({
  declarations: [ListComponent, TipoUsuariosComponent],
  imports: [
    CommonModule,
    AdministracionUsuariosRoutingModule
  ]
})
export class AdministracionUsuariosModule { }
