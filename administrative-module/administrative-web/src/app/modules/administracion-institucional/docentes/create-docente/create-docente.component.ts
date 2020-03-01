import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Idioma } from 'src/app/domain/Idioma';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import { IdiomaService } from 'src/app/services/administracion/AdmInstitucional/idioma.service';
import Swal from 'sweetalert2';
import { DocenteUPService } from 'src/app/services/administracion/AdmInstitucional/docenteUP.service';
import { DocenteUP } from 'src/app/domain/DocenteUP';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-docente',
  templateUrl: './create-docente.component.html',
  styleUrls: ['./create-docente.component.css']
})
export class CreateDocenteComponent implements OnInit {
 
  public load: boolean;
  public loading: string;
  public selectedTypeIdGenero : number;
  public selectedTypeIRol : number;
  public selectedTypeIdDepartamento : string;
  docente: DocenteUP;

  public tamNom : 0; public tamApellidoPat : 0;  public tamApellidoMat : 0; public tamAdreess : 0;public tamNacionalidad : 0;
  public tamUniversity : 0;public tamContrasenia : 0;public tamEmail : 0;
  public docenteForm: FormGroup;
  public enviado : boolean;
  constructor(private router: Router   ,private docenteUPService: DocenteUPService )  {
    this.selectedTypeIdGenero = 0;
    this.selectedTypeIRol = 0;
    this.selectedTypeIdDepartamento = "0";
    this.load = true;
    this.loading = Path.loading;
    this.docente = new DocenteUP();

    this.docenteForm = this.createForm();
    this.enviado = false;
  }
  get formIdioma() {     return this.docenteForm.get('formIdioma'); }
  get formNivel() {     return this.docenteForm.get('formNivel'); }
  get nombre() { if(this.docenteForm.get('nombre').value)   this.tamNom =this.docenteForm.get('nombre').value.length;  return this.docenteForm.get('nombre');  }
  get apellidoPat() { if(this.docenteForm.get('apellidoPat').value)   this.tamApellidoPat =this.docenteForm.get('apellidoPat').value.length;  return this.docenteForm.get('apellidoPat');  }
  get apellidoMat() { if(this.docenteForm.get('apellidoMat').value)   this.tamApellidoMat =this.docenteForm.get('apellidoMat').value.length;  return this.docenteForm.get('apellidoMat');  }
  get dni() {     return this.docenteForm.get('dni'); }
  get formGenero() {     return this.docenteForm.get('formGenero'); }
  get edad() {     return this.docenteForm.get('edad'); }
  get address() { if(this.docenteForm.get('address').value)   this.tamAdreess =this.docenteForm.get('address').value.length;  return this.docenteForm.get('address');  }
  get phone() {     return this.docenteForm.get('phone'); }
  get nacionalidad() { if(this.docenteForm.get('nacionalidad').value)   this.tamNacionalidad =this.docenteForm.get('nacionalidad').value.length;  return this.docenteForm.get('nacionalidad');  }
  get university() { if(this.docenteForm.get('university').value)   this.tamUniversity =this.docenteForm.get('university').value.length;  return this.docenteForm.get('university');  }
  get formRol() {     return this.docenteForm.get('formRol'); }
  get formDepartamemto() {     return this.docenteForm.get('formDepartamemto'); }
  get email() { if(this.docenteForm.get('email').value)   this.tamEmail =this.docenteForm.get('email').value.length;  return this.docenteForm.get('email');  }
  get contrasenia() { if(this.docenteForm.get('contrasenia').value)   this.tamContrasenia =this.docenteForm.get('contrasenia').value.length;  return this.docenteForm.get('contrasenia');  }

  private FormatEmailPattern: any =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@unmsm.edu.pe*$/;
  private OnlyTextPattern: any = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
  createForm() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required,Validators.maxLength(50) ,   Validators.pattern(this.OnlyTextPattern)]),
      apellidoPat: new FormControl('', [Validators.required,Validators.maxLength(50) ,   Validators.pattern(this.OnlyTextPattern)]),
      apellidoMat: new FormControl('', [Validators.required,Validators.maxLength(50) ,   Validators.pattern(this.OnlyTextPattern)]),
      dni: new FormControl('', [Validators.required,Validators.min(10000000) ,Validators.max(99999999)    ]),
      formGenero: new FormControl('', [Validators.min(1)    ]  ),
      edad: new FormControl('', [Validators.min(8) ,Validators.max(100)    ]),
      address: new FormControl('', [Validators.maxLength(150) , Validators.minLength(5)]),
      phone:new FormControl('', [Validators.required,Validators.min(100000000) ,Validators.max(999999999)    ]),
      nacionalidad: new FormControl('', [Validators.maxLength(60), Validators.minLength(3)]),
      university: new FormControl('', [Validators.maxLength(128), Validators.minLength(3)]),
      formRol: new FormControl('', [Validators.required, Validators.min(1)] ),
      formDepartamemto: new FormControl('', [Validators.required, Validators.min(1)] ),
      email: new FormControl('', [Validators.required,Validators.maxLength(150) ,Validators.pattern(this.FormatEmailPattern) ]),
      contrasenia:  new FormControl('', [Validators.required,Validators.maxLength(20), Validators.minLength(6)]),
    });
  }
  

  ngOnInit() {//lenar cmbs
    this.load = false;
  }

  crear() {
    this.enviado=true;
       if (this.docenteForm.valid) {
      
      this.docente.departamento = this.selectedTypeIdDepartamento;
      console.log("dep",  this.docente.departamento );
      console.log("todo",  this.docente );
         
      this.crearDocente();
      // this.docente.genero = this.selectedTypeIRol;
      // this.docente.idRol = this.selectedTypeIdGenero;
    }
  }

  private crearDocente() {
    this.docenteUPService.crearDocente(this.docente)
      .subscribe(data => {
        // this.load = false;

      
        if (data) {
          Swal.fire(
            'Registro Exitoso!',
            'El docente ' +this.docente.apellidoPat + ' ' 
            +this.docente.apellidoMat + ' ' +this.docente.nombre +' se registro correctamente.',
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
      this.router.navigate(['administracionInstitucional/docentes']).then();
    }


  }

