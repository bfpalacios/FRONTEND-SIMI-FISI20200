import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

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
  nuevaSede() {
    
    this.router.navigate(['administracionInstitucional/sedes/crear']).then();
  }
  // editarAlumno(id: number) 
  editarSede() { 
    // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
    this.router.navigate(['administracionInstitucional/sedes/editar']).then();
  }

}
