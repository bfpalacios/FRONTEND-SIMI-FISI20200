import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import Swal from 'sweetalert2';
import { Idioma } from 'src/app/domain/Idioma';
import { CursoService } from 'src/app/services/administracion/AdmInstitucional/curso.service';
import { IdiomaService } from 'src/app/services/administracion/AdmInstitucional/idioma.service';
import { MatriculaService } from 'src/app/services/periodo-academico/matricula.service';
import { NivelService } from 'src/app/services/administracion/AdmInstitucional/nivel.service';
import { Nivel } from 'src/app/domain/Nivel';
import { Curso } from 'src/app/domain/Curso';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Matricula } from 'src/app/domain/Matricula';
import { HorarioDTO } from 'src/app/domain/HorarioDTO';
import { EstudianteUP } from 'src/app/domain/EstudianteUP';
import { SedeService } from 'src/app/services/administracion/AdmInstitucional/sede.service';
import { Sede } from 'src/app/domain/Sede';
import { PeriodoAcademicoService } from 'src/app/services/periodo-academico/periodo.academico.service';
import { PeriodoAcademico } from 'src/app/domain/PeriodoAcademico';
@Component({
  selector: 'app-create-matricula',
  templateUrl: './create-matricula.component.html',
  styleUrls: ['./create-matricula.component.css']
})
export class CreateMatriculaComponent implements OnInit  {
  public matricula: Matricula;
  public load: boolean;
  public loading: string;
  public sedes : Sede[];
  periodos: PeriodoAcademico[];

  public selectedTypeIdCurso : number;
  public selectedTypeIdIdioma : number;
  public selectedTypeIdHorarioGrupoHorario : number;

  public idiomas : Idioma[];
  public cursos : Curso[];
  public horarios: HorarioDTO[];
  // public estudiante : EstudianteUP;
  public title: string;
  public tamformEstudiante : 0;    public tamVoucher : 0;
  public matriculaForm: FormGroup;
  public enviado : boolean;
  public selectedTypeIdPeriodo : number;    public selectedTypeIdSede : number;  
  constructor(private router: Router , private serviceCurso: CursoService, private  matriculaService : MatriculaService ,
    private serviceIdiomas: IdiomaService ,private serviceSede : SedeService,   private periodoacademicoService: PeriodoAcademicoService )   {
    this.matricula = new Matricula();
    this.selectedTypeIdPeriodo =0;      
    this.selectedTypeIdSede = 0;  

     this.selectedTypeIdCurso = 0;
     this.selectedTypeIdIdioma = 0;
     this.selectedTypeIdHorarioGrupoHorario = 0;

   
    this.loading = Path.loading;
    this.matriculaForm = this.createForm();
    this.enviado = false;
  }
  get formSede() {     return this.matriculaForm.get('formSede'); }
  get formPeriodo() {     return this.matriculaForm.get('formPeriodo'); }
  get formEstudiante() { if(this.matriculaForm.get('formEstudiante').value)   this.tamformEstudiante =this.matriculaForm.get('formEstudiante').value.length;  return this.matriculaForm.get('formEstudiante');  }
  get voucher() { if(this.matriculaForm.get('voucher').value)   this.tamVoucher =this.matriculaForm.get('voucher').value.length;  return this.matriculaForm.get('voucher');  }
  get formIdioma() {     return this.matriculaForm.get('formIdioma'); }
  get formCurso() {     return this.matriculaForm.get('formCurso'); }
  get formHorario() {        return this.matriculaForm.get('formHorario'); }

  createForm() {
    return new FormGroup({
      formSede: new FormControl('', [Validators.required,Validators.min(1)] ),
      formPeriodo: new FormControl('', [Validators.required,Validators.min(1)]),
      formEstudiante: new FormControl('', [Validators.required,Validators.maxLength(6) , Validators.minLength(5)]),
      voucher: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      formIdioma: new FormControl('', [Validators.required ,Validators.min(1)    ]  ),
      formCurso: new FormControl('',[ Validators.required ,Validators.min(1)  ] ),
      formHorario: new FormControl('', [Validators.required,Validators.min(1)  ]),
    });
  }

  habilitarCursos() {  //PERIODO
    console.log("jccc");
 /*  
    this.selectedTypeIdDocente = "0";
    console.log("this.selectedTypeIdCurso",this.selectedTypeIdCurso);
    console.log("this.selectedTypeIdPeriodo",this.selectedTypeIdPeriodo);
     this.docenteUPService.getDocentesUPByCursoPeriodo(this.selectedTypeIdCurso ,this.selectedTypeIdPeriodo).subscribe(data => {
       this.docentes = data;
       console.log("this.docentes",this.docentes);
       this.load = false;
     });*/
  }

  habilitarHorario() {  //PERIODO
   /* this.selectedTypeIdDocente = "0";
    console.log("this.selectedTypeIdCurso",this.selectedTypeIdCurso);
    console.log("this.selectedTypeIdPeriodo",this.selectedTypeIdPeriodo);
     this.docenteUPService.getDocentesUPByCursoPeriodo(this.selectedTypeIdCurso ,this.selectedTypeIdPeriodo).subscribe(data => {
       this.docentes = data;
       console.log("this.docentes",this.docentes);
       this.load = false;
     });*/
  }

  ngOnInit() {//lenar cmbs
    this.getSedes();
    this.getPeriodos();
  }
  
  getIdiomas() {
    console.log(this.selectedTypeIdSede);
    console.log(this.selectedTypeIdPeriodo);

    // if((this.selectedTypeIdSede !=0) && (this.selectedTypeIdPeriodo !=0) ){
    //   this.serviceIdiomas.deProgCursosBySedePeriodo(this.selectedTypeIdSede,this.selectedTypeIdPeriodo).subscribe(data => {
    //     this.idiomas = data;
    //     this.load = false;
    //   });
    // }
   
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
 
 crear(){
this.enviado=true;
console.log("selectedTypeIdIdioma",this.selectedTypeIdIdioma);
console.log("selectedTypeIdCurso", this.selectedTypeIdCurso);
console.log("selectedTypeIdHorarioGrupoHorario",this.selectedTypeIdHorarioGrupoHorario);
console.log("matriiii ",  this.matricula);

    if (this.matriculaForm.valid) {
      
      console.log("entro no vacio");/*
      this.load = true;
      // this.matricula.codEstudiante = this.selectedTypeIdNivel;
      this.matricula.fechaMatricula = new Date() ;
      this.matricula.idProgCurso = this.selectedTypeIdIdioma; // capturar metodo 

      // this.matricula.idEstadoMatricula = this.selectedTypeIdIdioma;  // controlar
      // this.matricula.numVoucher = this.selectedTypeIdIdioma;

      
      console.log(this.matricula);
      this.crearCurso();*/
    }
    }

    private crearCurso() {
     
      this.matriculaService.crearMatricula(this.matricula)
        .subscribe(data => {
          console.log("data",data);
          this.load = false;
          if (data) {
            Swal.fire(
              'Registro Exitoso!',
              'La matrícula se registro correctamente.',
              'success'
            );
            this.navigateList();

          } else {
            // this.empty = true;
            // this.successText = 'El curso ya existe, ingrese otro.';
          }
        }, error => {
            
          Swal.fire(
            'Advertencia!',
            error.error.text,
            'info'
          );
         if (error) {
           this.load = false;
           // this.obtenerIdiomas();
          
         }
       });
    }

    cancelar(){
      this.navigateList();
      this.load = false;
    }
    
    private navigateList() {
      this.router.navigate(['administracionMatricula/matricula']).then();

    }
  
  }


