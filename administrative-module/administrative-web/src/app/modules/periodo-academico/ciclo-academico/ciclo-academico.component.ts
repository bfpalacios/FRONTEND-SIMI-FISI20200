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
  busquedaTexto: any;
  estado: boolean;
  prueba : string;
  public id: number;
  periodoac : PeriodoAcademico;
  periodosacs: PeriodoAcademico[];
  public  pageActual : number ;

  load: boolean;
  loading: string;


  constructor(private router: Router ,private periodoacService: PeriodoAcademicoService ) { }

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
    console.log(id);
    
    this.periodoacService.getPeriodoAcademicoById(id).subscribe(o => {
      if (o !== null) {
        this.periodoac = o;console.log(this.periodoac);
        Swal.fire({
          title: 'Estas seguro que desea eliminar el Ciclo '+ this.periodoac.nomPeriodo+' ?',
          // text: "S",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.value) {
            this.load = true;
            this.periodoacService.deletePeriodoAcademicoById(id).subscribe(data => {
              
              if (data) {
                this.load = false;
                Swal.fire(
                  'Ciclo Eliminado!',
                  'El ciclo '+ this.periodoac.nomPeriodo+' se elimino correctamente.',
                  'success'
                );
                this.obtenPeriodos();
        
              } else {
                this.load = false;
                // this.obtenerIdiomas();
              }
            }, error => {
              if (error) {
                Swal.fire(
                  'Error!',
                  error.error.text,
                  'error'
                );
               if (error) {
                 this.load = false;
                 // this.obtenerIdiomas();
                
               }
              }
            });
           
          }
          })

         } else {     }
   
  } ) ;

  }

}
