import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public datos: any[];

  constructor(
    private router: Router
  ) {
    this.datos = [];
    this.setDatos();
  }

  ngOnInit() {
  }

  private setDatos() {
    this.setDatosJson(
      'Matriculados Febrero 2020',
      250,
      'Cantidad de matriculados en el presente Ciclo Académico.',
      'Matricula',
      'mdi-book-variant-multiple'
    );
    this.setDatosJson(
      'Pagos Febrero 2020',
      0,
      'Cantidad de pagos realizados en el Banco Pichincha en el presente Ciclo Académico.',
      'Reporte de Pagos',
      'mdi-file-chart'
      );
  }

  public setDatosJson(
    dtitle: string,
    dtotal: number,
    ddescription: string,
    dbtnName: string,
    dicon: string) {
    this.datos.push(
      {
        title: dtitle,
        total: dtotal,
        description: ddescription,
        btnName: dbtnName,
        icon: dicon
      });
  }
  public reportePagos() {
    this.router.navigate(['reportes/pagos']).then();
  }
}
