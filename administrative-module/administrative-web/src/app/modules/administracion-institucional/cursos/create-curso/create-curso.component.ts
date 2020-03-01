import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import Swal from 'sweetalert2';
import { Idioma } from 'src/app/domain/Idioma';
import { Sede } from 'src/app/domain/Sede';
import { CursoService } from 'src/app/services/administracion/AdmInstitucional/curso.service';
import { IdiomaService } from 'src/app/services/administracion/AdmInstitucional/idioma.service';
import { NivelService } from 'src/app/services/administracion/AdmInstitucional/nivel.service';
import { Nivel } from 'src/app/domain/Nivel';
import { Curso } from 'src/app/domain/Curso';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.css']
})
export class CreateCursoComponent implements OnInit {
  public curso: Curso;
  public load: boolean;
  public loading: string;

  public selectedTypeIdNivel : number;
  public selectedTypeIdIdioma : number;
  public niveles : Nivel[];
  public idiomas : Idioma[];
  public title: string;

  public cursoForm: FormGroup;
  public enviado : boolean;
  constructor(private router: Router , private serviceCurso: CursoService,
    private serviceIdiomas: IdiomaService,  private serviceNivel: NivelService )   {
      this.curso = new Curso();
    this.selectedTypeIdNivel = 0;
     this.selectedTypeIdIdioma = 0;
    this.load = true;
    this.loading = Path.loading;
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

  ngOnInit() {//lenar cmbs
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
 crear(){
  
    this.enviado=true;
console.log("selectedTypeIdNivel", this.selectedTypeIdNivel);
console.log("selectedTypeIdIdioma",this.selectedTypeIdIdioma);

    if (this.cursoForm.valid) {
      console.log("entro no vacio");
      this.load = true;
      this.curso.idNivel = this.selectedTypeIdNivel;
      this.curso.idIdioma = this.selectedTypeIdIdioma;
      
      console.log(this.curso);
      this.crearCurso();
    }
    }
    private crearCurso() {
     
      this.serviceCurso.crearCurso(this.curso)
        .subscribe(data => {
          console.log("data",data);
          this.load = false;
          if (data) {
            Swal.fire(
              'Registro Exitoso!',
              'El curso se registro correctamente.',
              'success'
            );
            this.navigateList();
            this.setLocalStorageParamIdioma(this.curso.idIdioma.toString());

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
    setLocalStorageParamIdioma(title: string) {
      this.title = title;
      localStorage.setItem('parametro', this.title);
    }

    cancelar(){
      this.navigateList();
      this.load = false;
    }
    
    private navigateList() {
      this.router.navigate(['administracionInstitucional/cursos']).then();
    }
  
  }


