import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ProgramacionCursoService} from 'src/app/services/periodo-academico/programacion-curso.service'


@Component({
  selector: 'app-programacion-curso',
  templateUrl: './programacion-curso.component.html'
})
export class ProgramacionCursoComponent implements OnInit {

  public load: boolean;
  public programacion : any[];

  constructor(
    private serviceProgramacion: ProgramacionCursoService,
    private router:Router
    ) {
      this.load = true;
    }

  ngOnInit() {
    this.getProgramacion();
  }

  public getProgramacion() {
    this.serviceProgramacion.getProgramacion().subscribe(data => {
      this.programacion = data;
      this.load = false;
    }, error => {
      console.log(error);
    });
  }

  public solicitarApertura() {
    this.router.navigate(['periodo-academico/programacionCurso/solicitarAperturaCurso']).then();
  }


}
