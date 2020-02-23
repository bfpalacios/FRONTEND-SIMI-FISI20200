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

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.css']
})
export class CreateCursoComponent implements OnInit {
  public curso: Curso;
  public load: boolean;
  public loading: string;
  public empty: boolean;
  public successText: string;
  public pmcompuesta : boolean;
  public selectedTypeIdNivel : number;
  public selectedTypeIdIdioma : number;
  public niveles : Nivel[];
  public idiomas : Idioma[];
  public title: string;

  
  constructor(private router: Router , private serviceCurso: CursoService,
    private serviceIdiomas: IdiomaService,  private serviceNivel: NivelService )   {
      this.curso = new Curso();
    this.selectedTypeIdNivel = 0;
    this.selectedTypeIdIdioma = 0;
    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
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
  private crear(){
    this.empty = this.isEmpty();
    // this.curso.cnivel = this.selectedTypeIdNivel;
    // this.c      console.log("entro no vacio");

console.log("emprty",this.empty);
console.log("selectedTypeIdNivel", this.selectedTypeIdNivel);
console.log("selectedTypeIdIdioma",this.selectedTypeIdIdioma);

    if (!this.empty) {
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
            this.empty = true;
            this.successText = 'El curso ya existe, ingrese otro.';
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

      if (this.isEmpytNum(this.curso.ciclo, Mensaje.emptyCiclo)) {
        return true;
      }
      if (this.isEmpytNum(this.selectedTypeIdNivel, Mensaje.emptySelectNivel)) {
        return true;
      }
  
      if (this.isEmpytNum(this.selectedTypeIdIdioma, Mensaje.emptySelectIdioma)) {
        
        return true;
      }
     
    
    }
  }


