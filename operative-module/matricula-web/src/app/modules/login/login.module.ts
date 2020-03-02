import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { BannerLoginComponent } from './login/banner-login/banner-login.component';
import { SectionButtonsComponent } from './login/section-buttons/section-buttons.component';
import { SectionButtonsResponsiveComponent } from './login/section-buttons-responsive/section-buttons-responsive.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormRegisterComponent } from './create-account/form-register/form-register.component';



@NgModule({
  declarations: [
    LoginComponent,
    BannerLoginComponent,
    SectionButtonsComponent,
    SectionButtonsResponsiveComponent,
    FormLoginComponent,
    CreateAccountComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
