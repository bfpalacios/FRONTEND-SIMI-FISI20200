import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
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
import { ToastrModule, ToastrService } from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import localePe from '@angular/common/locales/es-PE';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './services/data-service.service';
import { ErrorInterceptor } from './http-intecepter';
import { ServerNotFoundComponent } from './errors/server-not-found/server-not-found.component';

registerLocaleData(localePe, 'es');
const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'centro-idiomas',
    loadChildren: () => import('./modules/centro-idiomas/centro-idiomas.module').then(m => m.CentroIdiomasModule)
  },
  {
    path: 'periodo-academico',
    loadChildren: () => import('./modules/periodo-academico/periodo-academico.module').then(m => m.PeriodoAcademicoModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: 'errors',
    loadChildren: () => import('./errors/errors.module').then(m => m.ErrorsModule)
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
    MenuComponent,
    ServerNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' },
    { provide: APP_INITIALIZER, useFactory: get_settings, deps: [DataServiceService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true, deps: [ToastrService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
