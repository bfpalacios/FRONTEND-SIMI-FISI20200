import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
// import { SistemaGeneralComponent } from './modules/administracion-sistema/sistema-general/sistema-general.component';
// import { ConfiguracionComponent } from './modules/administracion-sistema/configuracion/configuracion.component';

const appRoutes: Routes = [
  {

    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'administracionUsuarios',
    loadChildren: './modules/administracion-usuarios/administracion-usuarios.module#AdministracionUsuariosModule'
  }, {
    path: 'administracionSistema',
    loadChildren: './modules/administracion-sistema/administracion-sistema.module#AdministracionSistemaModule'
  },
  {
    path: '**',
    redirectTo: 'home',

  },
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    // SistemaGeneralComponent,
    // ConfiguracionComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
