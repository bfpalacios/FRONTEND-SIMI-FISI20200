import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ErrorInterceptor } from './http-intercepter';
import { SistemaMatriculaService } from './services/sistema/sistema-matricula.service';
const appRoutes: Routes = [

  {
    path: '',
    loadChildren: () => import('./modulos/modulo-login/modulo-login.module').then(m => m.ModuloLoginModule)
  }
];

export function sistemaMatriculaDisponible(matriculaOnline: SistemaMatriculaService) {
  return () => matriculaOnline.verificarSistemaMatricula();
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true, deps: [ToastrService] },
  { provide: APP_INITIALIZER, useFactory: sistemaMatriculaDisponible, deps: [SistemaMatriculaService], multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
