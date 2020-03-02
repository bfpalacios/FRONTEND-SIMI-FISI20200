import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PeriodoAcademicoService } from 'src/app/services/administracion/AdmInstitucional/periodo.academico';
import { PeriodoAcademico } from 'src/app/domain/PeriodoAcademico';
@Component({
  selector: 'app-ciclo-academico',
  templateUrl: './ciclo-academico.component.html',
  styleUrls: ['./ciclo-academico.component.css']
})
export class CicloAcademicoComponent implements OnInit {
  estado: boolean;
  prueba : string;
  public id: number;
  periodoac : PeriodoAcademico;
  periodosacs: PeriodoAcademico[];
  public  pageActual : number ;

  load: boolean;
  loading: string;


  constructor(private router: Router     ,private periodoacService: PeriodoAcademicoService ) { }

  ngOnInit() {
    this.obtenPeriodos();

  }
  obtenPeriodos() {
    console.log("antes");
    this.periodoacService.getPeriodosAcademicos().subscribe(data => {
      this.load = false;
      this.periodosacs = data;

      console.log("cursosDTO", this.periodosacs);
    } )
  }

  nuevo() {
    
    this.router.navigate(['periodoAcademico/cicloAcademico/crear']).then();
  }
  // editarAlumno(id: number) 
  editar(id: number) { 
    // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
    this.router.navigate(['periodoAcademico/cicloAcademico/editar/'+id]).then();
  }


  public eliminar(id: number) {

  }

}
