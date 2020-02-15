import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportePagosService } from 'src/app/services/reportes/reporte-pagos.service';
import { Path } from 'src/app/infrastructure/constans/Path';

@Component({
  selector: 'app-reportes-pagos',
  templateUrl: './reportes-pagos.component.html',
  styleUrls: ['./reportes-pagos.component.css']
})
export class ReportesPagosComponent implements OnInit {

  public pagosEmty: boolean;
  public pagos: any[];

  load: boolean;
  loading: string;
  constructor(
    private router: Router,
    private servicePagos: ReportePagosService
  ) {
    this.load = true;
    this.loading = Path.loading;
   }

  ngOnInit() {
    this.loadPagos();
  }

  private loadPagos() {
    this.servicePagos.getVouchers().subscribe(data => {
      this.load = false;
      this.pagos = data;
    });
  }

  public importarPagos() {
    this.router.navigate(['reportes/pagos/importarPagos']);
  }

}
