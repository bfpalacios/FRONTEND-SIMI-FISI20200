import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ModuleLoginRoutingModule } from './modulo-login-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { BannerLoginComponent } from './login/banner-login/banner-login.component';
import { SectionButtonsComponent } from './login/section-buttons/section-buttons.component';
import { SectionButtonsResponsiveComponent } from './login/section-buttons-responsive/section-buttons-responsive.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { FormsModule } from '@angular/forms';
import { FormRegisterComponent } from './create-account/form-register/form-register.component';
import { FormDatosPesonalesComponent } from './create-account/form-datos-pesonales/form-datos-pesonales.component';


@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    BannerLoginComponent,
    SectionButtonsComponent,
    SectionButtonsResponsiveComponent,
    FormLoginComponent,
    FormRegisterComponent,
    FormDatosPesonalesComponent,
  ],
  imports: [
    CommonModule,
    ModuleLoginRoutingModule,
    FormsModule
  ]
})
export class ModuloLoginModule { }
