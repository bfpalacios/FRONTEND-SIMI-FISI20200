import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ProgramacionCursoService} from 'src/app/services/periodo-academico/programacion-curso.service'


@Component({
  selector: 'app-programacion-curso',
  templateUrl: './programacion-curso.component.html',
  styleUrls: ['./programacion-curso.component.css']
})
export class ProgramacionCursoComponent implements OnInit {

  public programacion : any[];

  constructor(private serviceProgramacion: ProgramacionCursoService, private router:Router, ) { }

  ngOnInit() {
    this.getProgramacion();
  }
  
  public getProgramacion() {
    this.serviceProgramacion.getProgramacion().subscribe(data => {
      this.programacion = data;
      console.log(this.programacion);
    }, error => {
      console.log(error);
    });
  }

  public solicitarApertura() {
    this.router.navigate(['periodo-academico/programacionCurso/solicitarAperturaCurso']).then();
  }


}
