import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes-pagos',
  templateUrl: './reportes-pagos.component.html',
  styleUrls: ['./reportes-pagos.component.css']
})
export class ReportesPagosComponent implements OnInit {

  public pagosEmty: boolean;
  public pagos: any[];

  constructor(
    private router: Router
  ) {
   }

  ngOnInit() {
    this.loadPagos();
  }

  private loadPagos() {
    this.pagos = [];
  }

  public importarPagos() {
    this.router.navigate(['reportes/pagos/importarPagos']);
  }

}
