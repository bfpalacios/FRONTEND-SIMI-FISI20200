import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes-pagos',
  templateUrl: './reportes-pagos.component.html',
  styleUrls: ['./reportes-pagos.component.css']
})
export class ReportesPagosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public importarPagos() {
    this.router.navigate(['reportes/pagos/importarPagos']);
  }

}
