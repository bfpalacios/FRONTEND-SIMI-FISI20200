import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EstudianteUP } from 'src/app/domain/EstudianteUP';
import { EstudianteUPService } from 'src/app/services/administracion/AdmInstitucional/estudianteUP.service';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
public  pageActual : number ;
estado: boolean;
prueba : string;
public id: number;
busquedaTexto: any;

 estudiantesUP: EstudianteUP[];
 estudianteUP: EstudianteUP;
// estadomesa : EstadoMesa;
load: boolean;
loading: string;
 constructor(private router: Router  ,private estudianteUPService: EstudianteUPService , 
  // private serviceestadomesa: EstadoMesasService 
  ) {
   this.estado = false;
    this.estudianteUP = new EstudianteUP();
    this.pageActual = 1;
    this.load = true;
  }


// constructor() { }

ngOnInit() {
  this.obtenerEstudiantes();


}
obtenerEstudiantes() {
  this.estudianteUPService.getEstudianteUP().subscribe(data => {
    this.load = false;
    this.estudiantesUP = data;

  }
  )
}

nuevoEstudiante() {
  
  this.router.navigate(['administracionInstitucional/estudiantes/crear']).then();
}
// editarAlumno(id: number) 
editar(id: number) { 
  // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
  this.router.navigate(['administracionInstitucional/estudiantes/editar/' + id]).then();
}

public eliminarDocente(id: number) {
  console.log(id);
  
  this.estudianteUPService.getEstudianteUPById(id).subscribe(o => {
    if (o !== null) {
      this.estudianteUP  = o; 
      console.log(this.estudianteUP);
      Swal.fire({
        title: 'Estas seguro que desea eliminar al docente '+ this.estudianteUP.nombre + ' ' + this.estudianteUP.apellidoPat + ' '+this.estudianteUP.apellidoMat +' ?',
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
          this.estudianteUPService.deleteEstudianteUPById(id).subscribe(data => {
            
            if (data) {
              this.load = false;
              Swal.fire(
                'Estudiante Eliminado!',
                'El Estudiante se elimino correctamente.',
                'success'
              );
              this.nuevoEstudiante();
              Swal.fire(
                'Estudiante Eliminado!',
                  'El Estudiante se elimino correctamente.',
                  'success'
                );
      
      
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

       } else {  this.navigateList();    }
 
} ) ;

}
private navigateList() {
  this.router.navigate(['administracionInstitucional/estudiantes']);
}

editarCurso(id: number) { 
  console.log(id);

// this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
this.router.navigate(['administracionInstitucional/estudiantes/editar/'+id]).then();
}

}
