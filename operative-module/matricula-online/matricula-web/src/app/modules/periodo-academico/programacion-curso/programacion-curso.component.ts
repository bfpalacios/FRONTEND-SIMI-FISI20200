import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programacion-curso',
  templateUrl: './programacion-curso.component.html',
  styleUrls: ['./programacion-curso.component.css']
})
export class ProgramacionCursoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public solicitarApertura() {
    this.router.navigate(['periodo-academico/programacionCurso/solicitarAperturaCurso']).then();
  }

}
