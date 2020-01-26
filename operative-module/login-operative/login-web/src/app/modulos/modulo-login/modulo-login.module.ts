import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ModuleLoginRoutingModule } from './modulo-login-routing.module';
import { LoginLoadingComponent } from './login-loading/login-loading.component';



@NgModule({
  declarations: [LoginComponent, LoginLoadingComponent],
  imports: [
    CommonModule,
    ModuleLoginRoutingModule,
  ]
})
export class ModuloLoginModule { }
