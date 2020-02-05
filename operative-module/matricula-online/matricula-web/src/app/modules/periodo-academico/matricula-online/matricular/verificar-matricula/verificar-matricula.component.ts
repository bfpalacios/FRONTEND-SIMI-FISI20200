import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificar-matricula',
  templateUrl: './verificar-matricula.component.html',
  styleUrls: ['./verificar-matricula.component.css']
})
export class VerificarMatriculaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  atras() {
    this.router.navigate(['/periodo-academico/matriculaOnline/matricular']).then();
  }

  finalizar() {
    this.router.navigate(['reportes/reporteMatricula']).then();
  }
}
