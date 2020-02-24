import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocenteUPService } from 'src/app/services/administracion/AdmInstitucional/docenteUP.service';
import { DocenteUP } from 'src/app/domain/DocenteUP';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {
  estado: boolean;
  prueba : string;
  public id: number;
  docenteUP: DocenteUP;
   docentesUP: DocenteUP[];
  // estadomesa : EstadoMesa;
  load: boolean;
  loading: string;
   constructor(private router: Router  ,private docenteUPService: DocenteUPService , 
    // private serviceestadomesa: EstadoMesasService 
    ) {
     this.estado = false;
     this.docenteUP = new DocenteUP();
    }


  // constructor() { }

  ngOnInit() {
    this.obtenerDocentes();


  }
  obtenerDocentes() {
    console.log("antes");
    this.docenteUPService.getDocentesUP().subscribe(data => {
      this.load = false;
      this.docentesUP = data;

      console.log("docentesUP", this.docentesUP);

    }
    )
  }

  nuevoDocente() {
    
    this.router.navigate(['administracionInstitucional/docentes/crear']).then();
  }
  // editarAlumno(id: number) 
  editar(id: number) { 
    // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
    this.router.navigate(['administracionInstitucional/docentes/editar/' + id]).then();
  }

  public eliminarDocente(id: number) {
    console.log(id);
    /*
    this.docenteService.getDocenteById(id).subscribe(o => {
      if (o !== null) {
        this.docente  = o; 
        console.log(this.docente);
        Swal.fire({
          title: 'Estas seguro que desea eliminar al docente '+ this.docente.nombre + ' ' + this.docente.apellidoPat + ' '+this.docente.apellidoMat +' ?',
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
            this.docenteService.deleteDocenteById(id).subscribe(data => {
              
              if (data) {
                this.load = false;
                Swal.fire(
                  'Docente Eliminado!',
                  'El Docente se elimino correctamente.',
                  'success'
                );
                this.obtenerDocentes();
                Swal.fire(
                  'Docente Eliminado!',
                    'El Docente se elimino correctamente.',
                    'success'
                  );
        
        
              } else {
                this.load = false;
                // this.obtenerIdiomas();
              }
            }, error => {
              if (error) {
                this.load = false;
                // this.obtenerIdiomas();
               
              }
            });
           
          }
          })

         } else {  this.navigateList();    }
   
  } ) ;*/

  }
  private navigateList() {
    this.router.navigate(['administracionInstitucional/docentes']);
  }
}
