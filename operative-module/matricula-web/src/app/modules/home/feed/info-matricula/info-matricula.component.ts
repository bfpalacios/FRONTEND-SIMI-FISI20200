import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-matricula',
  templateUrl: './info-matricula.component.html',
  styleUrls: ['./info-matricula.component.css']
})
export class InfoMatriculaComponent implements OnInit {

  public buttonsInfo: any[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.init();
  }

  public init() {
    this.buttonsInfo = [
      {
        title: 'Matrícula Online',
        icon: 'mdi-book-variant-multiple',
        router: 'periodo-academico/matriculaOnline',
        color: 'simi-btn-primary'
      },
      {
        title: 'Ciclo Académico',
        icon: 'mdi-book-open-variant',
        router: 'periodo-academico/cicloAcademico',
        color: ' simi-btn-rose'
      },
      {
        title: 'Conceptos de Pago',
        icon: 'mdi-credit-card-outline',
        router: 'centro-idiomas/ConceptoPago',
        color: ' simi-btn-rose'
      },
      {
        title: 'Programación de Cursos',
        icon: 'mdi-progress-clock',
        router: 'periodo-academico/programacionCurso',
        color: ' simi-btn-primary'
      },
      {
        title: 'Plan de Estudios',
        icon: 'mdi-tablet-dashboard',
        router: 'centro-idiomas/planEstudio',
        color: 'simi-btn-dark'
      },
      {
        title: 'Reporte de Evaluaciones',
        icon: 'mdi-clipboard-file',
        router: 'reportes/reporteEvaluaciones',
        color: 'simi-btn-silver'
      },
      {
        title: 'Reporte de Pagos',
        icon: 'mdi-file-multiple',
        router: 'reportes/reportePagos',
        color: 'simi-btn-silver'
      },
    ];
  }

  public navigate(url: string) {
    this.router.navigate([url]).then();
  }
}
