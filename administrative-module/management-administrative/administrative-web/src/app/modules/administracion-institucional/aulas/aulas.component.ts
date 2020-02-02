import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {

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
  nuevaAula() {
    
    this.router.navigate(['administracionInstitucional/aulas/crear']).then();
  }
  // editarAlumno(id: number) 
  editarAula() { 
    // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
    this.router.navigate(['administracionInstitucional/aulas/editar']).then();
  }

}
