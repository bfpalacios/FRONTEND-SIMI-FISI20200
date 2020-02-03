import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  estado: boolean;
  prueba : string;
  public id: number;
  // mesas: Mesa[];
  // mesasdto: MesaDTO[];
  // estadomesa : EstadoMesa;
  load: boolean;
  loading: string;
   constructor(private router: Router 
    // ,private serviceMesas: MesasService , 
    // private serviceestadomesa: EstadoMesasService 
    ) {
     this.estado = false;
    }


  // constructor() { }

  ngOnInit() {
    //obtener Listado de Alumnos
    // this.router.navigate(['home/feed']).then();

  }
  nuevoCurso() {
    
    this.router.navigate(['administracionInstitucional/cursos/crear']).then();
  }
  // editarAlumno(id: number) 
  editarCurso() { 
    // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
    this.router.navigate(['administracionInstitucional/cursos/editar']).then();
  }


}
