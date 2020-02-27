import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Path } from 'src/app/infrastructure/constans/Path';
import Swal from 'sweetalert2';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import { Sede } from 'src/app/domain/Sede';
import { SedeService } from 'src/app/services/administracion/AdmInstitucional/sede.service';

@Component({
  selector: 'app-editar-sede',
  templateUrl: './editar-sede.component.html',
  styleUrls: ['./editar-sede.component.css']
})
export class EditarSedeComponent implements OnInit {
  public id: number;
  public load: boolean;
  public loading: string;
  public empty: boolean;
  public successText: string;
  public sede: Sede;

   public success: boolean;
  constructor(private router: Router,  private activedRouter: ActivatedRoute,  private sedeService: SedeService)  {
    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
    this.success = false;
    this.sede = new Sede();

  }  
  ngOnInit() {
    // this.load = false;
   this.getSede();

  }

  private getSede() {
    this.activedRouter.params.subscribe(data => {
    console.log("data",data);
      if (data.id !== 0) {
        this.id = data.id;
        console.log("id ",this.id);
        console.log("data ",data);

        this.sedeService.getSedeById(this.id).subscribe(data => {
          this.load = false;

          if (data !== null) {
            this.sede = data;
            console.log(this.sede);
           
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
    if (this.isEmpytText(this.sede.nomSede, Mensaje.emptySedeInput)) {
      return true;
    }
    
    // if (this.isEmpytText(this.idioma.descIdioma, Mensaje.emptyDescIdioma)) {
    //   return true;
    // }
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
      console.log("this.idioma al guardar",this.sede);
      this.sedeService.editarSedeById(this.sede, this.sede.idSede).subscribe(data => {
        if (data != null) {
          console.log("data",data);
          Swal.fire(
            'Edición Exitosa!',
            'La Sede '+this.sede.nomSede +' se edito correctamente.',
            'success'
          );
           // this.guardarCliente();
           this.navigateList();
        } else {
          this.load = false;
          this.empty = true;
          this.successText = 'La sede  ya existe';
        }
      });
    }
  }


  private navigateList() {
    this.router.navigate(['administracionInstitucional/sedes']).then();
  }
  public eliminar() {
 console.log("this.sede",this.sede);
 
    Swal.fire({
      title: 'Estas seguro que deseas eliminar la Sede '+this.sede.nomSede +' ?',
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
        this.sedeService.deleteSedeById(this.sede.idSede).subscribe(data => {
          if (data) {
            Swal.fire(
              'Eliminación Exitosa!',
              'La sede '+this.sede.nomSede +' se eliminó correctamente.',
              'success'
            );
            this.navigateList();
          } else {
            this.load = false;
            this.success = true;
            this.successText = 'No se puede eliminar esta sede';
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
