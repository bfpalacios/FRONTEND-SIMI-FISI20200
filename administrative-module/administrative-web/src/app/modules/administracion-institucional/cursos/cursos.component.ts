import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/domain/Curso';
import { CursoService } from 'src/app/services/administracion/AdmInstitucional/curso.service';
import { CursoDTO } from 'src/app/domain/CursoDTO';
import Swal from 'sweetalert2';
import { IdiomaService } from 'src/app/services/administracion/AdmInstitucional/idioma.service';
import { Idioma } from 'src/app/domain/Idioma';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  busquedaTexto: any;
  estado: boolean;
  prueba : string;
  public id: number;
  cursoDTO : CursoDTO;
  cursosDTO: CursoDTO[];
  public  pageActual : number ;
  public selectedTypeIdIdioma : number;
  public idiomas : Idioma[];
  load: boolean;
  loading: string;
  parametro : number ;
   constructor(private router: Router, private serviceIdiomas: IdiomaService,
    private cursoService: CursoService    ) {
     this.estado = false;
     this.pageActual = 1;
     this.load = true;
     this.selectedTypeIdIdioma = 1;
     this.parametro = 1;
    }


  // constructor() { }

  ngOnInit() {
    this.parametro = parseInt( localStorage.getItem('parametro'));

    if(isNaN(this.parametro )){
      this.parametro = 1;
    }
    
    this.obtenerCursos(this.parametro);
    this.getIdiomas();


  }

  private getIdiomas() {
    this.serviceIdiomas.getIdiomas().subscribe(data => {
      this.idiomas = data;
      this.load = false;
    });
  }

  obtenerCursos(id:number) {
    console.log("antes");
    this.cursoService.getCursosByIdioma(id).subscribe(data => {
      this.load = false;
      this.cursosDTO = data;

      console.log("cursosDTO", this.cursosDTO);

    }
    )
  }
  cambiarTabla(){
    console.log("selectedTypeIdIdioma", this.selectedTypeIdIdioma);
    this.obtenerCursos(this.selectedTypeIdIdioma);
  }

  nuevoCurso() {
    
    this.router.navigate(['administracionInstitucional/cursos/crear']).then();
  }
  // editarAlumno(id: number) 
  editarCurso(id: number) { 
        console.log(id);

    // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
    this.router.navigate(['administracionInstitucional/cursos/editar/'+id]).then();
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
                this.obtenerCursos(this.selectedTypeIdIdioma);
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
    this.router.navigate(['administracionInstitucional/cursos']);
  }
}
