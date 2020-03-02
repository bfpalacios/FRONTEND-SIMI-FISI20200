import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-reporte-pagos',
  templateUrl: './reporte-pagos.component.html'
})
export class ReportePagosComponent implements OnInit {

  public load: boolean;
  public vouchers: any[];
  public date: number;
  constructor(private serviceData: DataServiceService) {
    this.date = Date.now();
   }

  ngOnInit() {
    this.getVouchers();
  }

  public getVouchers() {
    this.load = true;
    console.log('Obteniendo vouchers');
    this.serviceData.getPagosRealizados().subscribe(data => {
      this.load = false;
      this.vouchers = data;
    });
  }

}
