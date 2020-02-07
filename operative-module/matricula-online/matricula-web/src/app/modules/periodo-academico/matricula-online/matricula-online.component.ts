import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matricula-online',
  templateUrl: './matricula-online.component.html',
  styleUrls: ['./matricula-online.component.css']
})
export class MatriculaOnlineComponent implements OnInit {

  public pagosRealizados: any[];
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.pagosRealizados = [];
    this.pagosRealizados = ["1", "2", "3", "4", "5"];
  }

  public goMatricular() {
    this.router.navigate(['/periodo-academico/matriculaOnline/matricular']).then();
  }
}
