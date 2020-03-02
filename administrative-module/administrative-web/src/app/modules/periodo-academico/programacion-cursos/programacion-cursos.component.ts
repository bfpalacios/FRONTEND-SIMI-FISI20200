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
import { EstadoProgCurso } from 'src/app/domain/EstadoProgCurso';
import { AulaService } from 'src/app/services/administracion/AdmInstitucional/aula.service';
import { GrupoHorarioService } from 'src/app/services/administracion/AdmInstitucional/grupoHorario.service';
import { GrupoHorarioDTO } from 'src/app/domain/GrupoHorarioDTO';
import { SedeService } from 'src/app/services/administracion/AdmInstitucional/sede.service';
import { Sede } from 'src/app/domain/Sede';
import { EstadoPCService } from 'src/app/services/periodo-academico/estadoProgCursos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HorarioDTO } from 'src/app/domain/HorarioDTO';
import { HorarioService } from 'src/app/services/administracion/AdmInstitucional/horario.service';

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
  horarios: HorarioDTO[];  estadoProgCursos : EstadoProgCurso [];  aulas: AulaDTO[];  docentes: DocenteUP[];  cursos: CursoDTO[];

  progDocCursos : ProgDocCursoDTO[];  progCursosDTO : ProgCursoDTO[];  progCursoDTO : ProgCursoDTO;  progCurso : ProgCurso;
  periodos: PeriodoAcademico[];

  // public empty: boolean;
  public  pageActual : number ;
  nuevoCurso : boolean;
  actualizar : boolean;
  load: boolean;
  loading: string;
  public sedes : Sede[];
  public selectedTypeIdAula : number;    public selectedTypeIdHorarioGrupoHorario : number;  public selectedTypeIdEstadoCurso : number;
  public selectedTypeIdPeriodo : number;    public selectedTypeIdSede : number;  public selectedTypeIdSedeANTESACUTALIZAR : number;
  public selectedTypeIdCurso : number;  public selectedTypeIdDocente : string;

  public progCursoForm: FormGroup;
  public enviado : boolean;
   constructor( private router: Router  , private progdoccurService: ProgDocCursoService , private cursoService: CursoService ,
    private aulaService : AulaService ,  private progcurService : ProgCursoService , private horariosService : HorarioService,
    private periodoacademicoService: PeriodoAcademicoService , private serviceSede : SedeService, private serviceEstadoPC : EstadoPCService,
    private docenteUPService: DocenteUPService,  private progDocCurService : ProgDocCursoService
    ) {
      this.selectedTypeIdPeriodo = 5;      this.selectedTypeIdSede = -1;      this.selectedTypeIdAula = 0;
      this.selectedTypeIdHorarioGrupoHorario = 0;      this.selectedTypeIdEstadoCurso = 2;      this.selectedTypeIdCurso = 0;
      this.selectedTypeIdDocente = "0";
      
     this.estado = false;    this.pageActual = 1;  this.nuevoCurso = false;    this.actualizar = false;
     this.load = true;     this.loading = Path.loading;

    this.progCurso = new ProgCurso();
     this.progCursoDTO = new ProgCursoDTO();
     this.progCursoForm = this.createForm();
    this.enviado = false;
    }

    get formSede() {     return this.progCursoForm.get('formSede'); }
    get formPeriodo() {     return this.progCursoForm.get('formPeriodo'); }
    get formCurso() {     return this.progCursoForm.get('formCurso'); }
    get formDocente() {     return this.progCursoForm.get('formDocente'); }
    get formAula() {     return this.progCursoForm.get('formAula'); }
    get formHorario() {     return this.progCursoForm.get('formHorario'); }
    get formEstadoCurso() {     return this.progCursoForm.get('formEstadoCurso'); }
   
    createForm() {
      return new FormGroup({
        formSede: new FormControl('', [Validators.required,Validators.min(1)] ),
        formPeriodo: new FormControl('', [Validators.required,Validators.min(1)]),
        formCurso: new FormControl('', [Validators.required,Validators.min(1)]),
        formDocente: new FormControl('', [Validators.required, Validators.min(1) ]),
        formAula: new FormControl('',  ),
        formHorario: new FormControl('', [Validators.required,Validators.min(1)   ]),
        formEstadoCurso: new FormControl('', [Validators.min(1) ]),
      
      });
    }
    ngOnInit() {
      this.getSedes();
    this.getPeriodos();

    this.getProgDocCursos();
     this.getGrupoHorarios();
     this.obtenerProgCursos( this.selectedTypeIdSede, this.selectedTypeIdPeriodo );
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
      console.log("this.periodos",this.periodos);
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
    this.horariosService.getHorarios().subscribe(data => {
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
      console.log("this.cursos",this.cursos);
      this.load = false;
    });
  }

  habilitarDocente() {  //PERIODO
    this.selectedTypeIdDocente = "0";
    console.log("this.selectedTypeIdCurso",this.selectedTypeIdCurso);
    console.log("this.selectedTypeIdPeriodo",this.selectedTypeIdPeriodo);
     this.docenteUPService.getDocentesUPByCursoPeriodo(this.selectedTypeIdCurso ,this.selectedTypeIdPeriodo).subscribe(data => {
       this.docentes = data;
       console.log("this.docentes",this.docentes);
       this.load = false;
     });
  }
  

  
    nuevo(){
     this.selectedTypeIdSedeANTESACUTALIZAR = this.selectedTypeIdSede;

    this.nuevoCurso = !this.nuevoCurso ;
    console.log("nuevoCurso", this.nuevoCurso);
    //Limpiar Select
    this.selectedTypeIdAula = 0;
    this.selectedTypeIdHorarioGrupoHorario = 0;
    this.selectedTypeIdEstadoCurso = 2;  // al crar siempre sera HABILITADO
    this.selectedTypeIdPeriodo = 0;
    this.selectedTypeIdCurso = 0;
    this.selectedTypeIdSede = 0;
    this.selectedTypeIdDocente = "0";

     }
     guardar()
    {
      this.enviado=true;
console.log(" this.selectedTypeIdSedeANTESACUTALIZAR ", this.selectedTypeIdSedeANTESACUTALIZAR );
console.log("this.progCursoForm.valid)",this.progCursoForm.valid);
      if (this.progCursoForm.valid) {
        console.log("entro no vacio");
        this.load = true;
        if( this.selectedTypeIdAula ==0)  this.progCurso.idAula = null;
        else        this.progCurso.idAula = this.selectedTypeIdAula;
        this.progCurso.idEstadoProgCurso = 2 ; // cuadno se crea siempre debe ser habilitado
        // this.progCurso.idHorarioGrupoHorario = this.selectedTypeIdHorarioGrupoHorario;
        this.progCurso.idHorarioGrupoHorario = this.selectedTypeIdHorarioGrupoHorario;
        this.progDocCurService.getProgDocCursosByDocenteCursoPeriodo(this.selectedTypeIdDocente , this.selectedTypeIdCurso, this.selectedTypeIdPeriodo).subscribe(data => {
          this.load = false;
          if (data.length!=0) {
            console.log("data",data);

           this.progDocCursos = data;
           this.progCurso.idProgDocCur  = this.progDocCursos[0].idProgDocCur;
           console.log("progCurso",this.progCurso);

            this.crearProgCurso();
          } else {
       //      this.empty = true;
       console.log("data es 0",data);
          }
        });
      }
    }

    private crearProgCurso(){

      this.progcurService.crearProgCurso(this.progCurso).subscribe(data => {
        console.log("data",data);
        this.load = false;
        if (data) {
          Swal.fire(
            'Registro Exitoso!',
            'Programación Docente-Curso se registro correctamente.',
            'success'
          );
          console.log("this.selectedTypeIdSedeANTESACUTALIZAR",this.selectedTypeIdSedeANTESACUTALIZAR);
            if( this.selectedTypeIdSedeANTESACUTALIZAR == -1){
              this.obtenerProgCursos(  this.selectedTypeIdSedeANTESACUTALIZAR, this.selectedTypeIdPeriodo );
            }else {
              this.obtenerProgCursos(  this.selectedTypeIdSede, this.selectedTypeIdPeriodo );
            }

          
          this.nuevoCurso = !this.nuevoCurso ;
          console.log("nuevoCurso", this.nuevoCurso);
          // this.setLocalStorageParamIdioma(this.curso.idIdioma.toString());

        } else {
          // this.empty = true;
          this.successText = 'El curso ya existe, ingrese otro.';
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

      // this.nuevoCurso = !this.nuevoCurso ;

    }
 

     cancelarNuevo()
  { this.enviado = false;
    this.nuevoCurso = !this.nuevoCurso ;
    console.log("nuevoCurso", this.nuevoCurso);
    console.log("enviado", this.enviado);
    this.onResetForm();
  }
   cancelarActualizada()
  {this.enviado = false;
    // this.actualizar = !this.actualizar 
    
  if(this.actualizar) {
    this.actualizar = !this.actualizar ;
    this.formPeriodo.enable();
  }else{
    this.actualizar = !this.actualizar ;
     this.formPeriodo.disable();
  }
    this.onResetForm();
  }
  onResetForm(): void {
    // this.progCursoForm.reset();
  }


actualizarProg() { 
  
  if(this.actualizar) {
    this.actualizar = !this.actualizar ;
     this.formPeriodo.enable();
  }else{
   this.actualizar = !this.actualizar ;
    this.formPeriodo.disable();
  }

  this.enviado=true;
  if (this.progCursoForm.valid) {
    console.log("entroooo al editarrr");
    //entro
    this.load = true;
    // this.progCursoDTO.idAula = this.selectedTypeIdAula;
    this.progCursoDTO.idHorarioGrupoHorario = this.selectedTypeIdHorarioGrupoHorario;
    this.progCursoDTO.idEstadoProgCurso = this.selectedTypeIdEstadoCurso;
    if( this.selectedTypeIdAula ==0)  this.progCurso.idAula = null;
    else        this.progCurso.idAula = this.selectedTypeIdAula;

    this.progDocCurService.getProgDocCursosByDocenteCursoPeriodo(this.selectedTypeIdDocente , this.selectedTypeIdCurso, this.selectedTypeIdPeriodo).subscribe(data => {
      this.load = false;
      if (data.length!=0) {
       this.progDocCursos = data;
       this.progCursoDTO.idProgDocCur  = this.progDocCursos[0].idProgDocCur;
      
                    console.log("this.progCurso al guardar",this.progCursoDTO);

                    this.progcurService.editarProgCursoById(this.progCursoDTO, this.progCursoDTO.idProgCurso).subscribe(data => {
                      if (data != null) {
                        console.log("data",data);
                        Swal.fire(
                          'Edición Exitosa!',
                          'Programacion Docente Curso se edito correctamente.',
                          'success'
                        );
                        if( this.selectedTypeIdSedeANTESACUTALIZAR ==-1){
                          this.obtenerProgCursos(  this.selectedTypeIdSedeANTESACUTALIZAR, this.selectedTypeIdPeriodo );
                        }else {
                          this.obtenerProgCursos(  this.selectedTypeIdSede, this.selectedTypeIdPeriodo );
                        }

                      } else {
                        this.load = false;
                        // this.empty = true;
                        this.successText = 'El curso  ya existe';
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




        } else {
          // this.empty = true;
          console.log("entro sin data, leng 0 al actualziar");
        }
      });


    }
  this.actualizar = !this.actualizar ;

  }
editar(id: number) { 

  
  console.log("editarCurso",id);
  if(this.nuevoCurso ==true )this.nuevoCurso =false; 
  console.log("nuevoCurso", this.nuevoCurso);
 
  if(this.actualizar) {
    this.actualizar = !this.actualizar ;
    this.formPeriodo.enable();
  }else{
    this.actualizar = !this.actualizar ;
     this.formPeriodo.disable();
  }
  
  this.getProgCurso(id);
}

private getProgCurso(id: number) {
  this.selectedTypeIdSedeANTESACUTALIZAR =  this.selectedTypeIdSede;

      this.progcurService.getProgCursoById(id).subscribe(data => {
        this.load = false;

        if (data !== null) {
          this.progCursoDTO = data;
          
          this.selectedTypeIdSede = this.progCursoDTO.idSede;
          this.selectedTypeIdPeriodo = this.progCursoDTO.idPeriodo;
          this.habilitarCurso();
          this.selectedTypeIdCurso = this.progCursoDTO.idCurso;
          this.habilitarAulas() ;
          this.selectedTypeIdAula = this.progCursoDTO.idAula;
          this.habilitarDocente();
          this.selectedTypeIdDocente = this.progCursoDTO.codDocenteCI;

          this.selectedTypeIdHorarioGrupoHorario = this.progCursoDTO.idHorarioGrupoHorario;
          this.selectedTypeIdEstadoCurso = this.progCursoDTO.idEstadoProgCurso;

          console.log("progCursoDTO", this.progCursoDTO);
         
           } else {    }
     
    } ) ;  
  
}

  public eliminar(id: number) {
    console.log("id a elimianr" , id);
    this.selectedTypeIdSedeANTESACUTALIZAR =  this.selectedTypeIdSede;
    this.progcurService.getProgCursoById(id).subscribe(o => {
      if (o !== null) {
        this.progCursoDTO = o; console.log(this.progCursoDTO);
        Swal.fire({
          text: 'Estas seguro que desea eliminar la programacion del Curso '+ this.progCursoDTO.nomIdioma + ' '+  this.progCursoDTO.nomNivel 
          +  ' '+ this.progCursoDTO.ciclo  
          + ' , Aula:  '+ this.progCursoDTO.nomAula+  ' -- Horario : '+      this.progCursoDTO.nomGrupoHorario+ ' De '+ this.progCursoDTO.horaInicio+ ' a '+ this.progCursoDTO.horaSalida
          + ' , Docente:  '+ this.progCursoDTO.nombre+  ' '+      this.progCursoDTO.apellidoPat+ ' '+ this.progCursoDTO.apellidoMat +' ?',

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
                if( this.selectedTypeIdSedeANTESACUTALIZAR ==-1){
                  this.obtenerProgCursos(  this.selectedTypeIdSedeANTESACUTALIZAR, this.selectedTypeIdPeriodo );
                }else {
                  this.obtenerProgCursos(  this.selectedTypeIdSede, this.selectedTypeIdPeriodo );
                }

        
              } else {
                this.load = false;
                // this.obtenerIdiomas();
              }
            }, error => {
              console.log("erriessssr");

              if (error) {
                Swal.fire(
                  'Error!',
                  error.error.text,
                  'error'
                );
               if (error) {
                console.log("aaaaa");

                 this.load = false;
                 // this.obtenerIdiomas();
                
               }
              }
            });
           
          }
          })

         } else {  
           console.log("errir");
          //  this.navigateList();  
            }
   
  } ) ;

  }

  //  private navigateList() {
  //    this.router.navigate(['administracionInstitucional/aulas']);
  //  }

  public filtrarSedePeriodo(){
    console.log("SEDE",this.selectedTypeIdSede );
    console.log("PERIODO",this.selectedTypeIdPeriodo);
  
   
      this.obtenerProgCursos( this.selectedTypeIdSede  , this.selectedTypeIdPeriodo );
    
  }
  obtenerProgCursos(idSede:number, idPeriodo : number) {

    if(idSede == -1){ // filtrar todos las Sedes
    
      this.progcurService.getProgCursosPeriodo(idPeriodo).subscribe(data => {
        this.load = false;
         this.progCursosDTO = data;
   
         console.log("docentesdto TODO", this.progCursosDTO);
   
       }       )
    }else{
      this.progcurService.getProgCursosBySedePeriodo(idSede,idPeriodo).subscribe(data => {
        this.load = false;
         this.progCursosDTO = data;
   
         console.log("docentesdto BYSEDE", this.progCursosDTO);
   
       }   
       

    )
  }


}

}
