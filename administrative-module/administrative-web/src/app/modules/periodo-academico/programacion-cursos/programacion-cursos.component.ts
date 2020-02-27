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
import { ProgCursoService } from 'src/app/services/periodo-academico/progCurso.service';
import { Aula } from 'src/app/domain/Aula';
import { AulaDTO } from 'src/app/domain/AulaDTO';
import { ProgCursoDTO } from 'src/app/domain/ProgCursoDTO';
import { ProgCurso } from 'src/app/domain/ProgCurso';
import { HorarioGrupoHorarioDTO } from 'src/app/domain/HorarioGrupoHorarioDTO';
import { EstadoProgCurso } from 'src/app/domain/EstadoProgCurso';
import { AulaService } from 'src/app/services/administracion/AdmInstitucional/aula.service';
import { GrupoHorarioService } from 'src/app/services/administracion/AdmInstitucional/grupoHorario.service';
import { GrupoHorarioDTO } from 'src/app/domain/GrupoHorarioDTO';
import { SedeService } from 'src/app/services/administracion/AdmInstitucional/sede.service';
import { Sede } from 'src/app/domain/Sede';
import { EstadoPCService } from 'src/app/services/periodo-academico/estadoProgCursos.service';

@Component({
  selector: 'app-programacion-cursos',
  templateUrl: './programacion-cursos.component.html',
  styleUrls: ['./programacion-cursos.component.css']
})
export class ProgramacionCursosComponent implements OnInit {
  busquedaTexto: any;
  public successText: string;
  estado: boolean;
  prueba : string;
  public id: number;
 
  horarios: GrupoHorarioDTO[];

  estadoProgCursos : EstadoProgCurso [];
  aulas: AulaDTO[];
  docentes: AulaDTO[];
  cursos: CursoDTO[];
  progDocCursos : ProgDocCursoDTO[];

  progCursosDTO : ProgCursoDTO[];
  progCursoDTO : ProgCursoDTO;
  progCurso : ProgCurso;
  periodos: PeriodoAcademico[];

  public empty: boolean;
  public  pageActual : number ;
  nuevoCurso : boolean;
  actualizar : boolean;
  load: boolean;
  loading: string;
  public sedes : Sede[];
  public selectedTypeIdProgDocCuso : number;
  public selectedTypeIdAula : number;  
  public selectedTypeIdHorarioGrupoHorario : number;
  public selectedTypeIdEstadoCurso : number;
  public selectedTypeIdPeriodo : number;  
  public selectedTypeIdSede : number;
  public selectedTypeIdCurso : number;

   constructor(
     private router: Router  ,
      // private docenteUPService: DocenteUPService ,     private cursoService: CursoService , 
    //  private periodoacademicoService: PeriodoAcademicoService ,
      private progdoccurService: ProgDocCursoService , private cursoService: CursoService ,
    private aulaService : AulaService ,  private progcurService : ProgCursoService , private grupoHorariosService : GrupoHorarioService,
    private periodoacademicoService: PeriodoAcademicoService , private serviceSede : SedeService, private serviceEstadoPC : EstadoPCService
    ) {
   
      this.selectedTypeIdSede = 0;
      this.selectedTypeIdProgDocCuso = 0;
      this.selectedTypeIdAula = 0;
      this.selectedTypeIdHorarioGrupoHorario = 0;
      this.selectedTypeIdEstadoCurso = 0;
      this.selectedTypeIdPeriodo = 0;
      this.selectedTypeIdCurso = 0;

      
     this.estado = false;    this.pageActual = 1;  this.nuevoCurso = false;    this.actualizar = false;
     this.empty = false;     this.load = true;     this.loading = Path.loading;

     this.progCurso = new ProgCurso();
     this.progCursoDTO = new ProgCursoDTO();
    }

    ngOnInit() {
      this.getSedes();
    this.getPeriodos();

    // this.getAulas();
    // this.getCursos();
    this.getDocentes();
    this.getProgDocCursos();
     this.getGrupoHorarios();
     this.obtenerProgCursos();
     this.estadoProgCursoss();
    
  }

  getSedes() {
    console.log("antes");
    this.serviceSede.getSedes().subscribe(data => {
      this.load = false;
      this.sedes = data;
    }
    )
  }
  getPeriodos() {
    this.periodoacademicoService.getPeriodosAcademicos().subscribe(data => {
      this.periodos = data;
      this.load = false;
    });
  }
 
 estadoProgCursoss() {
  console.log("antes");
  this.serviceEstadoPC.getEstadosPC().subscribe(data => {
    this.load = false;
    this.estadoProgCursos = data;
  }
  )
}
   private getGrupoHorarios() {
    this.grupoHorariosService.getGrupoHorarios().subscribe(data => {
      this.horarios = data;
      console.log("horarios",this.horarios);
       this.load = false;
     });
   }
  
  private getProgDocCursos() {
    this.progdoccurService.getProgDocCurso().subscribe(data => {
      this.progDocCursos = data;
      this.load = false;
    });
  }

  habilitarAulas() {
    this.aulaService.getAulasbySede(this.selectedTypeIdSede).subscribe(data => {
      this.aulas = data;
      this.load = false;
    });
  }
  habilitarCurso() {  //PERIODO
    this.cursoService.getCursosByPeriodo(this.selectedTypeIdPeriodo).subscribe(data => {
      this.cursos = data;
      this.load = false;
    });
  }
  private getDocentes() {  //PERIODO
    // this.cursoService.getCursosByPeriodo(1).subscribe(data => {
    //   this.cursos = data;
    //   this.load = false;
    // });
  }

  obtenerProgCursos() {
     console.log("antes");
     this.progcurService.getProgCurso().subscribe(data => {
      this.load = false;
       this.progCursosDTO = data;

       console.log("docentesdto", this.progCursosDTO);

     }
     )
   }
    nuevo(){

    this.nuevoCurso = !this.nuevoCurso ;
    //Limpiar Select
    this.selectedTypeIdProgDocCuso = 0;
    this.selectedTypeIdAula = 0;
    this.selectedTypeIdHorarioGrupoHorario = 0;
    this.selectedTypeIdEstadoCurso = 0;
    this.selectedTypeIdPeriodo = 0;
    this.selectedTypeIdSede = 0;

     }
     guardar()
    {
      this.empty = this.isEmpty();
     
      if (!this.empty) {
        console.log("entro no vacio");
        this.load = true;
        this.progCurso.idAula = this.selectedTypeIdAula;
        this.progCurso.idEstadoProgCurso = this.selectedTypeIdEstadoCurso; // cuadno se crea siempre debe ser 
        this.progCurso.idHorarioGrupoHorario = this.selectedTypeIdHorarioGrupoHorario;
        this.progCurso.idProgDocCur = this.selectedTypeIdProgDocCuso;

       this.crearProgDocCurso();
      }

    }

    private crearProgDocCurso(){

      this.progcurService.crearProgCurso(this.progCurso)
      .subscribe(data => {
        console.log("data",data);
        this.load = false;
        if (data) {
          Swal.fire(
            'Registro Exitoso!',
            'Programación Docente-Curso se registro correctamente.',
            'success'
          );
          this.obtenerProgCursos();
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

      if (this.isEmpytNum(this.selectedTypeIdProgDocCuso, Mensaje.emptyProgDocenteCurso)) {
        return true;
      }
       
      if (this.isEmpytNum(this.selectedTypeIdAula, Mensaje.emptyAulaSelect)) {
        
        return true;
      }
      if (this.isEmpytNum(this.selectedTypeIdHorarioGrupoHorario, Mensaje.emptyHorario)) {
        
        return true;
      }
      if (this.isEmpytNum(this.selectedTypeIdEstadoCurso, Mensaje.emptyEstadoProgCurso)) {
        
        return true;
      }
    
    }

     cancelarNuevo()
  {
    this.nuevoCurso = !this.nuevoCurso ;
  }
   cancelarActualizada()
  {
    this.actualizar = !this.actualizar ;
  }
/*

actualizarProg() { 
  // this.success = this.isEmpty();
  this.empty = this.isEmpty();
  if (!this.empty) {
    //entro
    this.load = true;
 
    this.progCurso.idAula = this.selectedTypeIdAula;
    this.progCurso.idEstadoProgCurso = this.selectedTypeIdEstadoCurso;
    this.progCurso.idHorarioGrupoHorario = this.selectedTypeIdHorarioGrupoHorario;
    this.progCurso.idProgDocCur = this.selectedTypeIdProgDocCuso;


    console.log("this.progDocCurso al guardar",this.progCurso);

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

}*/
editar(id: number) { 
  // console.log("editarCurso",id);
  // if(this.nuevoCurso ==true )this.nuevoCurso =false;
  // this.actualizar = !this.actualizar ;
  // this.getProgDocente(id);
}
/*
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
*/
  public eliminar(id: number) {
    console.log(id);
    
    this.progcurService.getProgCursoById(id).subscribe(o => {
      if (o !== null) {
        this.progCursoDTO = o; console.log(this.progCursoDTO);
        Swal.fire({
          text: 'Estas seguro que desea eliminar la programacion del Curso '+ this.progCursoDTO.nomIdioma + ' '+  this.progCursoDTO.nomNivel 
          +  ' '+ this.progCursoDTO.ciclo  
          + ' , Aula:  '+ this.progCursoDTO.nomAula+  ' -- Horario : '+      this.progCursoDTO.nomGrupoHorario+ ' De '+ this.progCursoDTO.horaInicio+ ' a '+ this.progCursoDTO.horaSalida
          + ' , Docente:  '+ this.progCursoDTO.nombre+  ''+      this.progCursoDTO.apellidoPat+ ' '+ this.progCursoDTO.apellidoMat +' ?',

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
            this.progcurService.deleteProgCursoById(id).subscribe(data => {
              console.log("data", data);
              if (data) {
                this.load = false;
                Swal.fire(
                  'Programación Curso Eliminado!',
                  'La programacion curso se elimino correctamente.',
                  'success'
                );
                this.obtenerProgCursos();
        
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

  //  private navigateList() {
  //    this.router.navigate(['administracionInstitucional/aulas']);
  //  }


}
