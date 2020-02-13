import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramacionCursoService } from '../../../services/programacion-cursos.service'

@Component({
  selector: 'app-programacion-curso',
  templateUrl: './programacion-curso.component.html',
  styleUrls: ['./programacion-curso.component.css']
})
export class ProgramacionCursoComponent implements OnInit {

  constructor(private router: Router, private programacionCursoService: ProgramacionCursoService) { }

  public arregloProgramacion: [] = [];

  ngOnInit() {
    console.log("hola0");
    this.programacionCursoService.getProgramacionCursos()
      .subscribe(
         res => {
          console.log(res);
          this.arregloProgramacion = res;
        });
  }

  public solicitarApertura() {
    this.router.navigate(['periodo-academico/programacionCurso/solicitarAperturaCurso']).then();
  }

}
