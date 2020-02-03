import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

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
  nuevoIdioma() {
    
    this.router.navigate(['administracionInstitucional/idiomas/crear']).then();
  }
  // editarAlumno(id: number) 
  editarIdioma() { 
    // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
    this.router.navigate(['administracionInstitucional/idiomas/editar']).then();
  }

}

