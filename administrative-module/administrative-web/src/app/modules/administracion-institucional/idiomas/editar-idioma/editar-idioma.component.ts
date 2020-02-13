import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Path } from 'src/app/infrastructure/constans/Path';
import { Idioma } from 'src/app/domain/Idioma';
import { IdiomaService } from 'src/app/services/administracion/AdmInstitucional/idioma.service';
import Swal from 'sweetalert2';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';


@Component({
  selector: 'app-editar-idioma',
  templateUrl: './editar-idioma.component.html',
  styleUrls: ['./editar-idioma.component.css']
})
export class EditarIdiomaComponent implements OnInit {
  public id: number;
  public load: boolean;
  public loading: string;
  public empty: boolean;
  public successText: string;
  public idioma: Idioma;

  // public pmcompuesta : boolean;
   public success: boolean;
  // public selectedTypePerfil: number;
  // public selectedTypeEstado: number;
  constructor(private router: Router,
    private activedRouter: ActivatedRoute,
     private idiomaService: IdiomaService)  {
    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
    this.success = false;
    this.idioma = new Idioma();

  }  
  ngOnInit() {
    // this.load = false;
   this.getIdioma();

  }

  private getIdioma() {
    this.activedRouter.params.subscribe(data => {
    console.log("data",data);
      if (data.id !== 0) {
        this.id = data.id;
        console.log("id ",this.id);
        console.log("data ",data);

        this.idiomaService.getIdiomaById(this.id).subscribe(data => {
          this.load = false;

          if (data !== null) {
            this.idioma = data;
            console.log(this.idioma);
           
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
 
  private isEmpty() {
    
    if (this.isEmpytText(this.idioma.nomIdioma, Mensaje.emptyNomIdioma)) {
      return true;
    }
    if (this.isEmpytText(this.idioma.descIdioma, Mensaje.emptyDescIdioma)) {
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
      console.log("this.idioma al guardar",this.idioma);
      this.idiomaService.editarIdiomaById(this.idioma, this.idioma.cidioma).subscribe(data => {
        if (data != null) {
          console.log("data",data);
          Swal.fire(
            'Edición Exitosa!',
            'El idioma '+this.idioma.nomIdioma +' se edito correctamente.',
            'success'
          );
           // this.guardarCliente();
           this.navigateList();
        } else {
          this.load = false;
          this.empty = true;
          this.successText = 'El idioma  ya existe';
        }
      });
    }
  }


  private navigateList() {
    this.router.navigate(['administracionInstitucional/idiomas']).then();
  }
  public eliminar() {
 console.log("this.idioma",this.idioma);
 
    Swal.fire({
      title: 'Estas seguro que deseas eliminar el idioma '+this.idioma.nomIdioma +' ?',
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
        this.idiomaService.deleteIdiomaById(this.idioma.cidioma).subscribe(data => {
          if (data) {
            Swal.fire(
              'Eliminación Exitosa!',
              'El idioma '+this.idioma.nomIdioma +' se eliminó correctamente.',
              'success'
            );
            this.navigateList();
          } else {
            this.load = false;
            this.success = true;
            this.successText = 'No se puede eliminar este idioma';
          }
        }, error => {
          if (error) {
            this.load = false;
            this.success = true;
            this.successText = 'Sucedió un error con el servidor';
          }
        });
      
       
      }})

  } 


  
}
