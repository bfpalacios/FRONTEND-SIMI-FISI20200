import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ModuleLoginRoutingModule } from './modulo-login-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { BannerLoginComponent } from './login/banner-login/banner-login.component';
import { SectionButtonsComponent } from './login/section-buttons/section-buttons.component';
import { SectionButtonsResponsiveComponent } from './login/section-buttons-responsive/section-buttons-responsive.component';



@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    BannerLoginComponent,
    SectionButtonsComponent,
    SectionButtonsResponsiveComponent
  ],
  imports: [
    CommonModule,
    ModuleLoginRoutingModule,
  ]
})
export class ModuloLoginModule { }
