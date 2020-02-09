import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-matricula',
  templateUrl: './info-matricula.component.html',
  styleUrls: ['./info-matricula.component.css']
})
export class InfoMatriculaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goMatriculaOnline() {
    this.router.navigate(['periodo-academico/matriculaOnline']).then();
  }

  public goCicloAcademico() {
    this.router.navigate(['periodo-academico/cicloAcademico']).then();
  }

  public goConceptoPago() {
    this.router.navigate(['centro-idiomas/ConceptoPago']).then();
  }
}
