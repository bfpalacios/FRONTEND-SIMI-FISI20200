import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { ReportePagosService } from 'src/app/services/reportes/reporte-pagos.service';
import { Voucher } from 'src/app/domain/Voucher';
@Component({
  selector: 'app-importar-reportes-pagos',
  templateUrl: './importar-reportes-pagos.component.html',
  styleUrls: ['./importar-reportes-pagos.component.css']
})
export class ImportarReportesPagosComponent implements OnInit {

  @ViewChild('defaultupload', { static: true }) uploadObj: UploaderComponent;

  public fileLoaded: boolean;
  public vouchers: any[];
  public vouchersR: Voucher[];
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
      const data = (e.target as any).result;
      const workbook = XLSX.read(data, {
        type: 'binary'
      });
      workbook.SheetNames.forEach(((sheetName) => {
        const xlRowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        this.vouchers = xlRowObject;
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
    this.vouchersR = [];
    console.log(this.vouchers);
    let vouchercito: Voucher;
    this.vouchers.forEach(v => {
      vouchercito = new Voucher();
      vouchercito.transformatVoucher(v);
      this.vouchersR.push(vouchercito);
    });
    console.log(this.vouchersR);
    this.servicePagos.saveVouchers(this.vouchersR).subscribe(data => {
      if (data) {
        this.load = false;
        this.router.navigate(['reportes/pagos']).then();
      } else {
        console.log('No guardado');
      }
    }, () => {
      console.log('ERROR');
    });
  }
  public reportPagos() {
    this.router.navigate(['reportes/pagos']).then();
  }

  public guardar() {
    this.load = true;
    if (this.vouchers === undefined || this.vouchers.length === 0) {
      this.load = false;
    } else {
      this.load = true;
      this.savePagos();
    }
  }

}
