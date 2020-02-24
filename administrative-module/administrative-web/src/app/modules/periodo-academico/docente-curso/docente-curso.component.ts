import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';

import Swal from 'sweetalert2';
import { DocenteUP } from 'src/app/domain/DocenteUP';
import { Router } from '@angular/router';
import { DocenteUPService } from 'src/app/services/administracion/AdmInstitucional/docenteUP.service';
import { CursoService } from 'src/app/services/administracion/AdmInstitucional/curso.service';
import { PeriodoAcademicoService } from 'src/app/services/periodo-academico/periodo.academico.service';
import { PeriodoAcademico } from 'src/app/domain/PeriodoAcademico';
import { CursoDTO } from 'src/app/domain/CursoDTO';
import { ProgDocCursoService } from 'src/app/services/periodo-academico/progDocCurso.service';
import { ProgDocCursoDTO } from 'src/app/domain/ProgDocCursoDTO';
import { ProgDocCurso } from 'src/app/domain/ProgDocCurso';

import { Idioma } from 'src/app/domain/Idioma';
import { IdiomaService } from 'src/app/services/administracion/AdmInstitucional/idioma.service';
import { Path } from 'src/app/infrastructure/constans/Path';


@Component({
  selector: 'app-docente-curso',
  templateUrl: './docente-curso.component.html',
  styleUrls: ['./docente-curso.component.css']
})
export class DocenteCursoComponent implements OnInit {
  public successText: string;
  estado: boolean;
  prueba : string;
  public id: number;
  docenteUP: DocenteUP;
  docentes: DocenteUP[];
  cursos: CursoDTO[];
  periodos: PeriodoAcademico[];
  progDocCursos : ProgDocCursoDTO[];
  progDocCursoDTO : ProgDocCursoDTO;
  progDocCurso : ProgDocCurso;

  public empty: boolean;
  idiomas: Idioma[]
  public  pageActual : number ;
  nuevoCurso : boolean;
  actualizar : boolean;

  load: boolean;
  loading: string;
  public selectedTypeIdDocente : string;
  public selectedTypeIdPeriodo : number;  
  public selectedTypeIdCurso : number;

   constructor(
     private router: Router  , private docenteUPService: DocenteUPService ,     private cursoService: CursoService , 
     private periodoacademicoService: PeriodoAcademicoService , private progdoccurService: ProgDocCursoService ,
    private idiomaService : IdiomaService
    ) {
      this.selectedTypeIdDocente = "";
      this.selectedTypeIdPeriodo = 0;
      this.selectedTypeIdCurso = 0;
     this.estado = false;
     this.docenteUP = new DocenteUP();
     this.pageActual = 1;
     this.nuevoCurso = false;
     this.actualizar = false;

     this.progDocCursoDTO = new ProgDocCursoDTO();
     this.progDocCurso = new ProgDocCurso();

     this.empty = false;
     this.load = true;
     this.loading = Path.loading;
    }

    ngOnInit() {
    this.getCursos();
    this.getDocentes();
     this.getPeriodo();
     this.getIdiomas();
     this.obtenerProgDocCurso();
    
  }

  private getCursos() {
    this.cursoService.getCursos().subscribe(data => {
      this.cursos = data;
      this.load = false;
    });
  }

  private getDocentes() {
    this.docenteUPService.getDocentesUP().subscribe(data => {
      this.docentes = data;
      this.load = false;
    });
  }
  
  private getPeriodo() {
    this.periodoacademicoService.getPeriodosAcademicos().subscribe(data => {
      this.periodos = data;
      this.load = false;
    });
  }
  private getIdiomas() {
    this.idiomaService.getIdiomas().subscribe(data => {
      this.idiomas = data;
      this.load = false;
    });
  }
   obtenerProgDocCurso() {
     console.log("antes");
     this.progdoccurService.getProgDocCurso().subscribe(data => {
      this.load = false;
       this.progDocCursos = data;

       console.log("docentesdto", this.progDocCursos);

     }
     )
   }
   private nuevo(){

    this.nuevoCurso = !this.nuevoCurso ;
    this.selectedTypeIdDocente = " " ;
    this.selectedTypeIdPeriodo = 0;
    this.selectedTypeIdCurso = 0;

     }
    private guardar()
    {
      this.empty = this.isEmpty();
      // this.aula.idSede = this.selectedTypeIdSede;
      console.log("this.selectedTypeIdDocente",this.selectedTypeIdDocente);
     console.log("(this.selectedTypeIdCurso",this.selectedTypeIdCurso);
     console.log("this.selectedTypeIdPeriodo",this.selectedTypeIdPeriodo);
      if (!this.empty) {
        console.log("entro no vacio");
        this.load = true;
        this.progDocCurso.idDocente = this.selectedTypeIdDocente;
        this.progDocCurso.idCurso = this.selectedTypeIdCurso;
        this.progDocCurso.idPeriodo = this.selectedTypeIdPeriodo;

       this.crearProgDocCurso();
      }

    }

    private crearProgDocCurso(){

      this.progdoccurService.crearProgDocCurso(this.progDocCurso)
      .subscribe(data => {
        console.log("data",data);
        this.load = false;
        if (data) {
          Swal.fire(
            'Registro Exitoso!',
            'Programación Docente-Curso se registro correctamente.',
            'success'
          );
          this.obtenerProgDocCurso();
          this.nuevoCurso = !this.nuevoCurso ;
          // this.setLocalStorageParamIdioma(this.curso.idIdioma.toString());

        } else {
          this.empty = true;
          this.successText = 'El curso ya existe, ingrese otro.';
        }
      });

      // this.nuevoCurso = !this.nuevoCurso ;

    }
 

    private isEmpytText(info: string, msg: string) {
      if (info === undefined || info.trim().length === 0) {
        this.successText = msg;
        return true;
      }
    }
    private isEmpytNum(info: number, msg: string) {
      if (info === undefined || info == 0) {
        this.successText = msg;
        return true;
      }
    }

    private isEmpty() { // true : vacio 

      if (this.isEmpytText(this.selectedTypeIdDocente, Mensaje.emptyDocente)) {
        return true;
      }
       
      if (this.isEmpytNum(this.selectedTypeIdPeriodo, Mensaje.emptyPeriodo)) {
        
        return true;
      }
      if (this.isEmpytNum(this.selectedTypeIdCurso, Mensaje.emptySelectCurso)) {
        
        return true;
      }
    
    }

    private cancelarNuevo()
  {
    this.nuevoCurso = !this.nuevoCurso ;
  }
  private cancelarActualizada()
  {
    this.actualizar = !this.actualizar ;
  }


actualizarProg() { 
  // this.success = this.isEmpty();
  this.empty = this.isEmpty();
  if (!this.empty) {
    //entro
    this.load = true;
    this.progDocCurso.idDocente = this.selectedTypeIdDocente;
    this.progDocCurso.idCurso = this.selectedTypeIdCurso;
    this.progDocCurso.idPeriodo = this.selectedTypeIdPeriodo;

    console.log("this.progDocCurso al guardar",this.progDocCurso);

    this.progdoccurService.editarProgDocCursoById(this.progDocCurso, this.progDocCursoDTO.idProgDocCur).subscribe(data => {
      if (data != null) {
        console.log("data",data);
        Swal.fire(
          'Edición Exitosa!',
          'Programacion Docente Curso se edito correctamente.',
          'success'
        );
         // this.guardarCliente();
         this.obtenerProgDocCurso();
      } else {
        this.load = false;
        this.empty = true;
        this.successText = 'El curso  ya existe';
      }
    });
  }


  this.actualizar = !this.actualizar ;

}
editar(id: number) { 
  console.log("editarCurso",id);
  if(this.nuevoCurso ==true )this.nuevoCurso =false;
  this.actualizar = !this.actualizar ;
  this.getProgDocente(id);
}

private getProgDocente(id: number) {

      this.progdoccurService.getProgDocCursoById(id).subscribe(data => {
        this.load = false;

        if (data !== null) {
          this.progDocCursoDTO = data;
          
          this.selectedTypeIdDocente = this.progDocCursoDTO.idDocente;
          this.selectedTypeIdPeriodo = this.progDocCursoDTO.idPeriodo;
          this.selectedTypeIdCurso = this.progDocCursoDTO.idCurso;
          console.log(this.progDocCursoDTO);
         
           } else {    }
     
    } ) ;  
  
}

  public eliminar(id: number) {
    console.log(id);
    
    this.progdoccurService.getProgDocCursoById(id).subscribe(o => {
      if (o !== null) {
        this.progDocCursoDTO = o; console.log(this.progDocCursoDTO);
        Swal.fire({
          text: 'Estas seguro que desea eliminar la programacion del docente '+ this.progDocCursoDTO.idDocente + ' '+  this.progDocCursoDTO.nombre +  ' '+ this.progDocCursoDTO.apellidoPat  +  ' '+ this.progDocCursoDTO.apellidoMat
          + ' -- '+ this.progDocCursoDTO.nomIdioma+  ' '+      this.progDocCursoDTO.nomNivel+ ' '+ this.progDocCursoDTO.ciclo+ ' ?',
          // title: "S",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.value) {
            console.log("entro a true ");
            this.load = true;
            this.progdoccurService.deleteProgDocCursoById(id).subscribe(data => {
              console.log("data", data);
              if (data) {
                this.load = false;
                Swal.fire(
                  'Programacion Docente Curso Eliminado!',
                  'La programacion docente - curso se elimino correctamente.',
                  'success'
                );
                this.obtenerProgDocCurso();
        
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

         } else {  
          //  this.navigateList();  
            }
   
  } ) ;

  }

  // private navigateList() {
  //   this.router.navigate(['administracionInstitucional/aulas']);
  // }

}
