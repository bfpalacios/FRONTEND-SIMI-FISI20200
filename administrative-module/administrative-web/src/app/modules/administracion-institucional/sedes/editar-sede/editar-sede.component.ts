import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Path } from 'src/app/infrastructure/constans/Path';
import Swal from 'sweetalert2';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import { Sede } from 'src/app/domain/Sede';
import { SedeService } from 'src/app/services/administracion/AdmInstitucional/sede.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  public sedeForm: FormGroup;
  public enviado : boolean;
  public tamNomSede : 0;
  public tamDescSede : 0;
  public tamDirSede : 0;
  
  constructor(private router: Router,  private activedRouter: ActivatedRoute,  private sedeService: SedeService)  {
    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
    this.sede = new Sede();
    this.sedeForm = this.createForm();
    this.enviado = false;
  }  

  get nomSede() { 
    if(this.sedeForm.get('nomSede').value)
    this.tamNomSede =this.sedeForm.get('nomSede').value.length;  
    console.log( this.tamNomSede);
    return this.sedeForm.get('nomSede');  }

  get descSede() { 
    if(this.sedeForm.get('descSede').value)
    this.tamDescSede =this.sedeForm.get('descSede').value.length; 
    return this.sedeForm.get('descSede'); }

    get dirSede() { 
      if(this.sedeForm.get('dirSede').value)
      this.tamDirSede =this.sedeForm.get('dirSede').value.length; 
      return this.sedeForm.get('dirSede'); }

  private OnlyTextPattern: any = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

  createForm() {
    return new FormGroup({
      nomSede: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30) , 
      Validators.pattern(this.OnlyTextPattern)]),
     
      descSede: new FormControl('', [Validators.maxLength(100)]),
      dirSede: new FormControl('', [Validators.maxLength(150)])
    });
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


  cancelar(){
    this.navigateList();
  }
 
  public guardar() {
    this.enviado = true;
    if (this.sedeForm.valid) {
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
