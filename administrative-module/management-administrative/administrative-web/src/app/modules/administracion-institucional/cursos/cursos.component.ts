import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/domain/Curso';
import { CursoService } from 'src/app/services/administracion/AdmInstitucional/curso.service';
import { CursoDTO } from 'src/app/domain/CursoDTO';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  estado: boolean;
  prueba : string;
  public id: number;
  cursoDTO : CursoDTO;
  cursosDTO: CursoDTO[];

  load: boolean;
  loading: string;
   constructor(private router: Router 
    ,private cursoService: CursoService , 
    // private serviceestadomesa: EstadoMesasService 
    ) {
     this.estado = false;
    }


  // constructor() { }

  ngOnInit() {
    this.obtenerCursos();


  }
  obtenerCursos() {
    console.log("antes");
    this.cursoService.getCursos().subscribe(data => {
      this.load = false;
      this.cursosDTO = data;

      console.log("cursosDTO", this.cursosDTO);

    }
    )
  }

  nuevoCurso() {
    
    this.router.navigate(['administracionInstitucional/cursos/crear']).then();
  }
  // editarAlumno(id: number) 
  editarCurso() { 
    // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
    this.router.navigate(['administracionInstitucional/cursos/editar']).then();
  }

  public eliminarCurso(id: number) {
    console.log(id);
    
    this.cursoService.getCursoById(id).subscribe(o => {
      if (o !== null) {
        this.cursoDTO = o;console.log(this.cursoDTO);
        Swal.fire({
          title: 'Estas seguro que desea eliminar el curso '+ this.cursoDTO.nomIdioma + '-' + this.cursoDTO.nomNivel + '-Ciclo : '+this.cursoDTO.ciclo +' ?',
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
            this.cursoService.deleteCursoById(id).subscribe(data => {
              
              if (data) {
                this.load = false;
                Swal.fire(
                  'Curso Eliminado!',
                  'El Registro se elimino correctamente.',
                  'success'
                );
                this.obtenerCursos();
                Swal.fire(
                  'Curso Eliminado!',
                    'El Registro se elimino correctamente.',
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
   
  } ) ;

  }
  private navigateList() {
    this.router.navigate(['administracionInstitucional/cursos']);
  }
}
