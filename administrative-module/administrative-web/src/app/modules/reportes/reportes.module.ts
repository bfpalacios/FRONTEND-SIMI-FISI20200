import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesInstitucionalesComponent } from './reportes-institucionales/reportes-institucionales.component';
import { ReportesPagosComponent } from './reportes-pagos/reportes-pagos.component';
import { ReportesRoutingModule } from './reportes-routing.module';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { CheckBoxModule  } from '@syncfusion/ej2-angular-buttons';
import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';
import { ImportarReportesPagosComponent } from './reportes-pagos/importar-reportes-pagos/importar-reportes-pagos.component';
@NgModule({
  declarations: [ReportesPagosComponent, ReportesInstitucionalesComponent, ImportarReportesPagosComponent],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    GridAllModule,
    CheckBoxModule,
    UploaderModule
  ],
  exports: [UploaderModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ReportesModule { }
