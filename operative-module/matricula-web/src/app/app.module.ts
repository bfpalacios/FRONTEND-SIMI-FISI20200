import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
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
import { registerLocaleData } from '@angular/common';

import localePe from '@angular/common/locales/es-PE';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './services/data-service.service';

registerLocaleData(localePe, 'es');
const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'profile',
    loadChildren: './modules/profile/profile.module#ProfileModule'
  },
  {
    path: 'centro-idiomas',
    loadChildren: './modules/centro-idiomas/centro-idiomas.module#CentroIdiomasModule'
  },
  {
    path: 'periodo-academico',
    loadChildren: './modules/periodo-academico/periodo-academico.module#PeriodoAcademicoModule'
  },
  {
    path: 'reportes',
    loadChildren: './modules/reports/reports.module#ReportsModule'
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

export function get_settings(dataService: DataServiceService) {
  return () => dataService.accederSistema();
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
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
    HttpClientModule
  ],
  providers: [
  { provide: LOCALE_ID, useValue: 'es-PE' },
  { provide: APP_INITIALIZER, useFactory: get_settings, deps: [DataServiceService], multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
