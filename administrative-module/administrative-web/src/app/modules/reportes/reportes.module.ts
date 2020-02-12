import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesInstitucionalesComponent } from './reportes-institucionales/reportes-institucionales.component';
import { ReportesPagosComponent } from './reportes-pagos/reportes-pagos.component';
import { ReportesRoutingModule } from './reportes-routing.module';



@NgModule({
  declarations: [ReportesPagosComponent, ReportesInstitucionalesComponent],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
