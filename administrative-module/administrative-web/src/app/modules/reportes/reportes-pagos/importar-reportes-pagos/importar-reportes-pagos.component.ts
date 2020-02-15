import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { ReportePagosService } from 'src/app/services/reportes/reporte-pagos.service';
@Component({
  selector: 'app-importar-reportes-pagos',
  templateUrl: './importar-reportes-pagos.component.html',
  styleUrls: ['./importar-reportes-pagos.component.css']
})
export class ImportarReportesPagosComponent implements OnInit {

  @ViewChild('defaultupload', {static: true}) uploadObj: UploaderComponent;

  public fileLoaded: boolean;
  public pagos: any[];
  public load: boolean;
  public loading: string;
  constructor(
    private router: Router,
    private servicePagos: ReportePagosService
  ) {
    this.load = false;
    this.loading = Path.loading;
    this.fileLoaded = false;
   }

  ngOnInit() {
  }

  public onFileRemove(args): void {
    args.cancel = true;
  }

  public parseExcel(file: any) {
    this.load = true;
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = (<any>e.target).result;
      const workbook = XLSX.read(data, {
        type: 'binary'
      });
      workbook.SheetNames.forEach(( (sheetName) => {
        const xlRowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        this.pagos = xlRowObject;
        this.fileLoaded = true;
        this.load = false;
      }).bind(this), this);
    };

    reader.onerror = (ex) => {
      console.log(ex);
    };
    reader.readAsBinaryString(file);
  }

  public onSuccess(args: any): void {
    const files = args.target.files;
    this.parseExcel(files[0]);
  }

  private savePagos() {
    this.servicePagos.savePagos(vouchers).subscribe(data => {
      if (data) {
        console.log('Guardado');
      } else {
        console.log('No guardado');
      }
    });
  }
  public reportPagos() {
    this.router.navigate(['reportes/pagos']).then();
  }

  public guardar() {
    this.router.navigate(['reportes/pagos']).then();
  }

}
