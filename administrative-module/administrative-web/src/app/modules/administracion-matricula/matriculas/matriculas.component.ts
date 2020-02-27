import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {

  load: boolean;
  loading: string;
   constructor(private router: Router 
    ) {
    }


  // constructor() { }

  ngOnInit() {
    //obtener Listado de Alumnos
    // this.router.navigate(['home/feed']).then();

  }
  /*
  nuevaMatricula() {
    
    this.router.navigate(['administracionMatricula/matriculas/crear']).then();
  }
  // editarAlumno(id: number) 
  editarMatricula() { 
    // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
    this.router.navigate(['administracionMatricula/matriculas/editar']).then();
  }
*/

}