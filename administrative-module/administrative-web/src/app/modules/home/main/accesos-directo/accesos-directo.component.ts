import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accesos-directo',
  templateUrl: './accesos-directo.component.html',
  styleUrls: ['./accesos-directo.component.css']
})
export class AccesosDirectoComponent implements OnInit {

  constructor( private router: Router  ) { }

  ngOnInit() {
  }

  matricula() {
  
    this.router.navigate(['administracionMatricula/matricula/crear']).then();
  }
  pc() {
  
    this.router.navigate(['periodoAcademico/programacionCursos']).then();
  }
  estudiantes() {
  
    this.router.navigate(['administracionInstitucional/estudiantes']).then();
  }
  docentes() {
  
    this.router.navigate(['administracionInstitucional/docentes']).then();
  }
  cicloAcademico() {
  
    this.router.navigate(['periodoAcademico/cicloAcademico']).then();
  }
  institucionales() {
  
    this.router.navigate(['reportes/institucionales']).then();
  }
  reportes() {
  
    this.router.navigate(['reportes/institucionales']).then();
  }

}
