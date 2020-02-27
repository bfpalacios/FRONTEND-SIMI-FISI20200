import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Idioma } from 'src/app/domain/Idioma';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import { IdiomaService } from 'src/app/services/administracion/AdmInstitucional/idioma.service';
import Swal from 'sweetalert2';
import { DocenteUPService } from 'src/app/services/administracion/AdmInstitucional/docenteUP.service';
import { DocenteUP } from 'src/app/domain/DocenteUP';


@Component({
  selector: 'app-editar-docente',
  templateUrl: './editar-docente.component.html',
  styleUrls: ['./editar-docente.component.css']
})
export class EditarDocenteComponent implements OnInit {
  public id: number;
  public load: boolean;
  public loading: string;
  public empty: boolean;
  public successText: string;
  // public pmcompuesta : boolean;
  public success: boolean;
  public  docente: DocenteUP;
  public idioma : Idioma[];

  public selectedTypeIdGenero : number;
  public selectedTypeIRol : number;
  public selectedTypeIdDepartamento : string;
  
  constructor(private router: Router ,  private activedRouter: ActivatedRoute,
    private docenteUPService: DocenteUPService, private serviceIdioma : IdiomaService
    )  {
    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
    this.success = false;
    this.docente = new DocenteUP();
  }

  ngOnInit() {
    this.load = false;
    this.getDocente();
    this.getIdioma();
  }
  private getDocente() {
    this.activedRouter.params.subscribe(data => {
    console.log("data",data);
      if (data.id !== 0) {
        this.id = data.id;
        console.log("id ",this.id);
        console.log("data ",data);

        this.docenteUPService.getDocenteUPById(this.id).subscribe(data => {
          this.load = false;

          if (data !== null) {
            this.docente = data;
            this.selectedTypeIdGenero = this.docente.genero;
            this.selectedTypeIRol = this.docente.idRol;
            this.selectedTypeIdDepartamento = this.docente.departamento;

            console.log("this.docente", this.docente);
           
             } else {  this.navigateList();    }
       
      } ) ;  }
      else {
         this.navigateList();
      }
    });
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
    if (this.isEmpytText(this.selectedTypeIdDepartamento, Mensaje.emptyDepDoc)) {
      return true;
    }  

    if (this.isEmpytText(this.docente.email, Mensaje.emptyEmailDoc)) {
       return true;
    }
    if (this.isEmpytText(this.docente.contrasenia, Mensaje.emptyContraDoc)) {
      return true;
    }
  
  }

  cancelar(){
    this.navigateList();
  }

  public guardar() {
    this.success = this.isEmpty();
    this.empty = this.isEmpty();
    if (!this.empty) {
      //entro
      this.load = true;
      this.docente.departamento = this.selectedTypeIdDepartamento;


      console.log("this.curso al guardar",this.docente);

      this.docenteUPService.editarDocenteById(this.docente, this.docente.codDocente).subscribe(data => {
        if (data != null) {
          console.log("data",data);
          Swal.fire(
            'Edición Exitosa!',
            'El docente se edito correctamente.',
            'success'
          );
           // this.guardarCliente();
           this.navigateList();
        } else {
          this.load = false;
          this.empty = true;
          this.successText = 'El curso  ya existe';
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


  private navigateList() {
    this.router.navigate(['administracionInstitucional/docentes']).then();
  }

  public getIdioma() {
    this.serviceIdioma.getIdiomas().subscribe(data => {
      this.idioma = data;
      console.log(this.idioma);

    }, error => {
      console.log(error);
    });
  }

}
