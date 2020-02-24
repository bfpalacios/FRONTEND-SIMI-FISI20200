import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoHorarioService } from 'src/app/services/administracion/AdmInstitucional/grupoHorario.service';
import { GrupoHorarioDTO } from 'src/app/domain/GrupoHorarioDTO';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  estado: boolean;
  prueba : string;
  public id: number;
  grupoHorarios: GrupoHorarioDTO[];
  grupoHorario: GrupoHorarioDTO;
  public  pageActual : number ;

  load: boolean;
  loading: string;
   constructor(private router: Router , private serviceHorarios: GrupoHorarioService , 
    // private serviceestadomesa: EstadoMesasService 
    ) {
     this.pageActual = 1;

    }

  // constructor() { }

  ngOnInit() {
    //obtener L istado de Alumnos
    this.obtenerHorarios();


  }


  obtenerHorarios() {
    console.log("antes");
    this.serviceHorarios.getGrupoHorarios().subscribe(data => {
      this.load = false;
      this.grupoHorarios = data;
       console.log("grupoHorarios", this.grupoHorarios);
    }
    )
  }


  nuevoHorario() {
    
    this.router.navigate(['administracionInstitucional/horarios/crear']).then();
  }
  // editarAlumno(id: number) 
  editar(id: number) { 
    // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
    this.router.navigate(['administracionInstitucional/horarios/editar/'+id]).then();
  }


  public eliminar(id: number) {
    console.log(id);
  }


}
