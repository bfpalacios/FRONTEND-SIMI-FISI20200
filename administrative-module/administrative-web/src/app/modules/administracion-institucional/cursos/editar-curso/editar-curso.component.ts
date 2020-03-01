import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import Swal from 'sweetalert2';
import { Path } from 'src/app/infrastructure/constans/Path';
import { IdiomaService } from 'src/app/services/administracion/AdmInstitucional/idioma.service';
import { CursoService } from 'src/app/services/administracion/AdmInstitucional/curso.service';
import { NivelService } from 'src/app/services/administracion/AdmInstitucional/nivel.service';
import { Idioma } from 'src/app/domain/Idioma';
import { Nivel } from 'src/app/domain/Nivel';
import { Curso } from 'src/app/domain/Curso';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  public id: number;
  public load: boolean;
  public loading: string;

  public selectedTypeIdNivel : number;
  public selectedTypeIdIdioma : number;
  public curso: Curso;
  public niveles : Nivel[];
  public idiomas : Idioma[];
  public title: string;

  public cursoForm: FormGroup;
  public enviado : boolean;
  constructor(private router: Router , private serviceCurso: CursoService,
    private activedRouter: ActivatedRoute,
    private serviceIdiomas: IdiomaService,  private serviceNivel: NivelService )   {
     
    this.load = true;
    this.loading = Path.loading;
    this.curso = new Curso();
    this.cursoForm = this.createForm();
    this.enviado = false;

  }
  get formIdioma() {     return this.cursoForm.get('formIdioma'); }
  get formNivel() {     return this.cursoForm.get('formNivel'); }
  get ciclo() {        return this.cursoForm.get('ciclo'); }
  createForm() {
    return new FormGroup({
      formIdioma: new FormControl('', [Validators.required ,Validators.min(1)    ]  ),
      formNivel: new FormControl('',[ Validators.required ,Validators.min(1)  ] ),
      ciclo: new FormControl('', [Validators.required,Validators.min(1) ,Validators.max(20)    ]),
    });
  }

  ngOnInit() {
    this.getCurso();
    this.getIdiomas();
    this.getNiveles();
  }

  private getNiveles() {
    this.serviceNivel.getNiveles().subscribe(data => {
      this.niveles = data;
      this.load = false;
    });
  }

  private getIdiomas() {
    this.serviceIdiomas.getIdiomas().subscribe(data => {
      this.idiomas = data;
      this.load = false;
    });
  }
  private getCurso() {
    this.activedRouter.params.subscribe(data => {
    console.log("data",data);
      if (data.id !== 0) {
        this.id = data.id;
        console.log("id ",this.id);
        console.log("data ",data);

        this.serviceCurso.getCursoById(this.id).subscribe(data => {
          this.load = false;

          if (data !== null) {
            this.curso = data;
            this.selectedTypeIdNivel = this.curso.idNivel;
            this.selectedTypeIdIdioma = this.curso.idIdioma;
            console.log(this.curso);
           
             } else {  this.navigateList();    }
       
      } ) ;  }
      else {
         this.navigateList();
      }
    });
  }
   cancelar(){
    this.navigateList();
  }
 
  public guardar() {
    this.enviado=true;
    if (this.cursoForm.valid) {
      //entro
      this.load = true;
      this.curso.idIdioma = this.selectedTypeIdIdioma;
      this.curso.idNivel = this.selectedTypeIdNivel;

      console.log("this.curso al guardar",this.curso);

      this.serviceCurso.editarCursoById(this.curso, this.curso.idCurso).subscribe(data => {
        if (data != null) {
          console.log("data",data);
          Swal.fire(
            'Edición Exitosa!',
            'El curso se edito correctamente.',
            'success'
          );
           // this.guardarCliente();
           this.navigateList();
        } else {
          this.load = false;
          // this.empty = true;
          // this.successText = 'El curso  ya existe';
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
  }

  setLocalStorageParamIdioma(title: string) {
    this.title = title;
    localStorage.setItem('parametro', this.title);
  }

  private navigateList() {
    this.router.navigate(['administracionInstitucional/cursos']).then();
    this.setLocalStorageParamIdioma(this.curso.idIdioma.toString());
  }

  public eliminar() {
    console.log("this.curso",this.curso);
    
       Swal.fire({
         title: 'Estas seguro que deseas eliminar este curso ?',
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
           this.serviceCurso.deleteCursoById(this.curso.idCurso).subscribe(data => {
             if (data) {
               Swal.fire(
                 'Eliminación Exitosa!',
                 'El curso se eliminó correctamente.',
                 'success'
               );
               this.navigateList();
               
             } else {
               this.load = false;
              //  this.success = true;
              //  this.successText = 'No se puede eliminar este curso';
             }
           }, error => {
            Swal.fire(
              'Error!',
              error.error.text,
              'error'
            );
           if (error) {
             this.load = false;
             // this.obtenerIdiomas();
            
           }
           });
         
          
         }})
   
     } 
   
   
     
   }
   