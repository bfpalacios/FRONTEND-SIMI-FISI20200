import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Idioma } from 'src/app/domain/Idioma';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import { IdiomaService } from 'src/app/services/administracion/AdmInstitucional/idioma.service';
import Swal from 'sweetalert2';
import { DocenteUPService } from 'src/app/services/administracion/AdmInstitucional/docenteUP.service';
import { DocenteUP } from 'src/app/domain/DocenteUP';

@Component({
  selector: 'app-create-docente',
  templateUrl: './create-docente.component.html',
  styleUrls: ['./create-docente.component.css']
})
export class CreateDocenteComponent implements OnInit {
 
  public load: boolean;
  public loading: string;
  public empty: boolean;
  public successText: string;
  public pmcompuesta : boolean;
  public selectedTypeIdGenero : number;
  public selectedTypeIRol : number;
  public selectedTypeIdDepartamento : string;
  docente: DocenteUP;

  constructor(private router: Router   ,private docenteUPService: DocenteUPService )  {
    this.selectedTypeIdGenero = 0;
    this.selectedTypeIRol = 0;
    this.selectedTypeIdDepartamento = " ";

    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
    this.docente = new DocenteUP();
  }

  

  ngOnInit() {//lenar cmbs
    this.load = false;
  }

  crear() {
    this.load = true;
    this.empty = this.isEmpty();
    if (!this.empty) {
      this.crearDocente();
      this.docente.departamento = this.selectedTypeIdDepartamento;
      // this.docente.genero = this.selectedTypeIRol;
      // this.docente.idRol = this.selectedTypeIdGenero;
    }
  }

  private crearDocente() {
    this.docenteUPService.crearDocente(this.docente)
      .subscribe(data => {


        this.load = false;
        if (data) {
          Swal.fire(
            'Registro Exitoso!',
            'El docente '+this.docente.codDocente+ ' ' +this.docente.apellidoPat + ' ' 
            +this.docente.apellidoMat + ' ' +this.docente.nombre +' se registro correctamente.',
            'success'
          );
          this.navigateList();
        } else {
          this.empty = true;
          this.successText = 'El docente ya existe, pruebe otro.';
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

      if (this.isEmpytText(this.docente.nombre, Mensaje.emptyNomDoc)) {
        return true;
      }
      if (this.isEmpytText(this.docente.apellidoPat, Mensaje.emptyApPatomDoc)) {
        return true;
      }
      if (this.isEmpytText(this.docente.apellidoMat, Mensaje.emptyApMatDoc)) {
        return true;
      }
      if (this.isEmpytNum(this.docente.dni, Mensaje.emptyDNIDoc)) {
        return true;
      }
      if (this.isEmpytText(this.docente.departamento, Mensaje.emptyDepDoc)) {
        return true;
      }  
  
      if (this.isEmpytText(this.docente.email, Mensaje.emptyEmailDoc)) {
         return true;
      }
      if (this.isEmpytText(this.docente.contrasenia, Mensaje.emptyContraDoc)) {
        return true;
      }
    
    }
  }

