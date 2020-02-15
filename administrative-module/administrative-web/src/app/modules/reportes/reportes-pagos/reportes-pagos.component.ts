import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportePagosService } from 'src/app/services/reportes/reporte-pagos.service';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Voucher } from 'src/app/domain/Voucher';

@Component({
  selector: 'app-reportes-pagos',
  templateUrl: './reportes-pagos.component.html',
  styleUrls: ['./reportes-pagos.component.css']
})
export class ReportesPagosComponent implements OnInit {

  public pagosEmty: boolean;
  public vouchers: Voucher[];

  public info: string;
  error: boolean;
  load: boolean;
  loading: string;
  constructor(
    private router: Router,
    private servicePagos: ReportePagosService
  ) {
    this.load = true;
    this.loading = Path.loading;
    this.info = 'Cargando...';
   }

  ngOnInit() {
    this.loadPagos();
  }

  private loadPagos() {
    this.load = true;
    this.servicePagos.getVouchers().subscribe(data => {
      this.load = false;
      this.vouchers = data;
      if (this.vouchers.length === 0) {
        this.info = 'No hay registro de pagos';
      }
    }, () => {
      this.info = 'Fallo en la conexión con el servidor.';
      this.error = true;
      this.load = false;
    });
  }

  public importarPagos() {
    this.router.navigate(['reportes/pagos/importarPagos']);
  }

}
