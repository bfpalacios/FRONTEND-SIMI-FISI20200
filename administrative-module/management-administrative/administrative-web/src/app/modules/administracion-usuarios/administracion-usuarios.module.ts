import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './usuarios/list/list.component';
import { AdministracionUsuariosRoutingModule } from './administracion-usuarios-routing.module';
import { TipoUComponent } from './tipo-usuarios/tipo-u/tipo-u.component';
import { TipoUsuariosComponent } from './tipo-usuarios/tipo-usuarios.component';



@NgModule({
  declarations: [ListComponent, TipoUComponent, TipoUsuariosComponent],
  imports: [
    CommonModule,
    AdministracionUsuariosRoutingModule
  ]
})
export class AdministracionUsuariosModule { }
