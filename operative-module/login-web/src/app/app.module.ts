import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';/* 
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree'; */
const appRoutes: Routes = [

  {
    path: '',
    loadChildren: './modulos/modulo-login/modulo-login.module#ModuloLoginModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    /* CdkStepperModule,
    CdkTableModule,
    CdkTreeModule, */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
