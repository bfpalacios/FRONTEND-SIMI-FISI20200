import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { registerLocaleData } from '@angular/common';
import localePe from '@angular/common/locales/es-PE';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
// import { HttpModule} from '@angular/http';
// import {NgxPaginationModule} from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
registerLocaleData(localePe, 'es');
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
  }, {
    path: 'administracionInstitucional',
    loadChildren: './modules/administracion-institucional/administracion-institucional.module#AdministracionInstitucionalModule'
  },
  {
    path: 'administracionMatricula',
    loadChildren: './modules/administracion-matricula/administracion-matricula.module#AdministracionMatriculaModule'
  },
  {
    path: 'periodoAcademico',
    loadChildren: './modules/periodo-academico/periodo-academico.module#PeriodoAcademicoModule'
  },
  {
    path: 'reportes',
    loadChildren: './modules/reportes/reportes.module#ReportesModule'
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
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSliderModule,
    MatFormFieldModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-PE' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
