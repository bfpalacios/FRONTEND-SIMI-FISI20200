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
// import { CicloAcademicoComponent } from './modules/periodo-academico/ciclo-academico/ciclo-academico.component';
// import { MatriculadosComponent } from './modules/periodo-academico/matriculados/matriculados.component';
// import { ProgramacionCursosComponent } from './modules/periodo-academico/programacion-cursos/programacion-cursos.component';
// import { ReportesInstitucionalesComponent } from './modules/reportes/reportes-institucionales/reportes-institucionales.component';
// import { ReportesPagosComponent } from './modules/reportes/reportes-pagos/reportes-pagos.component';
// import { MatriculaComponent } from './modules/administracion-matricula/matricula/matricula.component';
// import { MonitoreoMatriculaComponent } from './modules/administracion-matricula/monitoreo-matricula/monitoreo-matricula.component';
// import { IdiomasComponent } from './modules/administracion-institucional/idiomas/idiomas.component';
// import { HorariosComponent } from './modules/administracion-institucional/horarios/horarios.component';
// import { CursosComponent } from './modules/administracion-institucional/cursos/cursos.component';
// import { DocentesComponent } from './modules/administracion-institucional/docentes/docentes.component';
// import { AlumnosComponent } from './modules/administracion-institucional/alumnos/alumnos.component';
// import { SedesComponent } from './modules/administracion-institucional/sedes/sedes.component';
// import { AulasComponent } from './modules/administracion-institucional/aulas/aulas.component';
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
  },{
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
    // CicloAcademicoComponent,
    // MatriculadosComponent,
    // ProgramacionCursosComponent,
    // ReportesInstitucionalesComponent,
    // ReportesPagosComponent,
    // MatriculaComponent,
    // MonitoreoMatriculaComponent,
    // IdiomasComponent,
    // HorariosComponent,
    // CursosComponent,
    // DocentesComponent,
    // AlumnosComponent,
    // SedesComponent,
    // AulasComponent,
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
