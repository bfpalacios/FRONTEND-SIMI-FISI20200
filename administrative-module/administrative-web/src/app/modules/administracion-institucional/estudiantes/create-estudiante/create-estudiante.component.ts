import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoEstudiante } from 'src/app/domain/TipoEstudiante';
import { TipoEstudianteService } from 'src/app/services/administracion/AdmInstitucional/tipoEstudiante.service';
import { EstudianteUP } from 'src/app/domain/EstudianteUP';
import { EstudianteUPService } from 'src/app/services/administracion/AdmInstitucional/estudianteUP.service';

@Component({
  selector: 'app-create-estudiante',
  templateUrl: './create-estudiante.component.html',
  styleUrls: ['./create-estudiante.component.css']
})
export class CreateEstudianteComponent implements OnInit {
 
  public load: boolean;
  public loading: string;
  public selectedTypeIdGenero : number;
  public selectedTypeIRol : number;
  public estudiante: EstudianteUP;
  public tipos : TipoEstudiante[];
  public tamNom : 0; public tamApellidoPat : 0;  public tamApellidoMat : 0; public tamAdreess : 0;public tamNacionalidad : 0;
  public tamUniversity : 0;public tamContrasenia : 0;public tamEmail : 0;  public tamFechaNacimiento: 0; 
  public selectedTypeIdTipoEstudiante : number;

  public estudianteForm: FormGroup;
  public enviado : boolean;
  constructor(private router: Router   ,  private tipoService: TipoEstudianteService, 
    private estudianteUPService: EstudianteUPService )  {
    this.selectedTypeIdGenero = -1;
    this.selectedTypeIRol = 1;
    this.selectedTypeIdTipoEstudiante = 0;
    this.load = true;
    this.loading = Path.loading;
    this.estudiante = new EstudianteUP();

    this.estudianteForm = this.createForm();
    this.enviado = false;
  }
 get nombreEst() { if(this.estudianteForm.get('nombreEst').value)   this.tamNom =this.estudianteForm.get('nombreEst').value.length;  return this.estudianteForm.get('nombreEst');  }
  get apellidoPat() { if(this.estudianteForm.get('apellidoPat').value)   this.tamApellidoPat =this.estudianteForm.get('apellidoPat').value.length;  return this.estudianteForm.get('apellidoPat');  }
  get apellidoMat() { if(this.estudianteForm.get('apellidoMat').value)   this.tamApellidoMat =this.estudianteForm.get('apellidoMat').value.length;  return this.estudianteForm.get('apellidoMat');  }
  get formIdioma() {     return this.estudianteForm.get('formIdioma'); }
  get formNivel() {     return this.estudianteForm.get('formNivel'); }
  get dniEst() {     return this.estudianteForm.get('dniEst'); }
  get formGenero() { console.log("formGenero",this.estudianteForm.get('formGenero') ) ;    return this.estudianteForm.get('formGenero'); }
  get edad() {     return this.estudianteForm.get('edad'); }
  get address() { if(this.estudianteForm.get('address').value)   this.tamAdreess =this.estudianteForm.get('address').value.length;  return this.estudianteForm.get('address');  }
  get phone() {     return this.estudianteForm.get('phone'); }
  get nacionalidad() { if(this.estudianteForm.get('nacionalidad').value)   this.tamNacionalidad =this.estudianteForm.get('nacionalidad').value.length;  return this.estudianteForm.get('nacionalidad');  }
  get university() { if(this.estudianteForm.get('university').value)   this.tamUniversity =this.estudianteForm.get('university').value.length;  return this.estudianteForm.get('university');  }
  get formRoles() {     return this.estudianteForm.get('formRoles'); }
 get formTipoEstudiante() {     return this.estudianteForm.get('formTipoEstudiante'); }
  get email() { if(this.estudianteForm.get('email').value)   this.tamEmail =this.estudianteForm.get('email').value.length;  return this.estudianteForm.get('email');  }
  get contrasenia() { if(this.estudianteForm.get('contrasenia').value)   this.tamContrasenia =this.estudianteForm.get('contrasenia').value.length;  return this.estudianteForm.get('contrasenia');  }
  get fechaNacimiento() { if(this.estudianteForm.get('fechaNacimiento').value)   this.tamFechaNacimiento =this.estudianteForm.get('fechaNacimiento').value.length;  return this.estudianteForm.get('fechaNacimiento');  }

  private FormatEmailPattern: any =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@unmsm.edu.pe*$/;
  private OnlyTextPattern: any = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
  createForm() {
    return new FormGroup({
      nombreEst: new FormControl('', [Validators.required,Validators.maxLength(50) ,   Validators.pattern(this.OnlyTextPattern)]),
      apellidoPat: new FormControl('', [Validators.required,Validators.maxLength(50) ,   Validators.pattern(this.OnlyTextPattern)]),
      apellidoMat: new FormControl('', [Validators.required,Validators.maxLength(50) ,   Validators.pattern(this.OnlyTextPattern)]),
      dniEst: new FormControl('', [Validators.required,Validators.min(10000000) ,Validators.max(99999999)    ]),
      formGenero: new FormControl('', [Validators.required, Validators.min(0) ,Validators.max(1)   ]  ),
      edad: new FormControl('', [Validators.min(8) ,Validators.max(100)    ]),
      address: new FormControl('', [Validators.maxLength(150) , Validators.minLength(5)]),
      phone:new FormControl('', [Validators.required,Validators.min(100000000) ,Validators.max(999999999)    ]),
      nacionalidad: new FormControl('', [Validators.maxLength(60), Validators.minLength(3)]),
      university: new FormControl('', [Validators.maxLength(128), Validators.minLength(3)]),
      formRoles: new FormControl('', [Validators.required, Validators.min(1)] ),
      formTipoEstudiante: new FormControl('', [Validators.required, Validators.min(1)] ),
      email: new FormControl('', [Validators.required,Validators.maxLength(150) ,Validators.pattern(this.FormatEmailPattern) ]),
      contrasenia:  new FormControl('', [Validators.required,Validators.maxLength(20), Validators.minLength(6)]),
      fechaNacimiento: new FormControl('', )
    });
  }
  

  ngOnInit() {//lenar cmbs
    this.load = false;
    this.getTE();
  }
  getTE() {
    this.tipoService.getTipoEstudiantes().subscribe(data => {
      this.tipos = data;
      this.load = false;
    });
  }
  crear() {
       this.enviado=true;
       console.log("this.estudianteForm" ,this.estudianteForm);
       console.log("this.selectedTypeIdTipoEstudiante" ,this.selectedTypeIdTipoEstudiante);
       if (this.estudianteForm.valid) {
      
      this.estudiante.idTipoEstudiante = this.selectedTypeIdTipoEstudiante;
      console.log("todo",  this.estudiante );
      this.crearEstudiante();
      // this.docente.genero = this.selectedTypeIRol;
      // this.docente.idRol = this.selectedTypeIdGenero;
    }
  }

  private crearEstudiante() {
    this.estudianteUPService.crearEstudianteUP(this.estudiante)
      .subscribe(data => {
        // this.load = false;

      
        if (data) {
          Swal.fire(
            'Registro Exitoso!',
            'El estudiante ' +this.estudiante.apellidoPat + ' ' 
            +this.estudiante.apellidoMat + ' ' +this.estudiante.nombre +' se registro correctamente.',
            'success'
          );
          this.navigateList();
        } else {
          // this.empty = true;
          // this.successText = 'El docente ya existe, pruebe otro.';
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
      this.router.navigate(['administracionInstitucional/estudiantes']).then();
    }


  }

