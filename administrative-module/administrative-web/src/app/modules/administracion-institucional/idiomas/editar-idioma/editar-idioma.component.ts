import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Path } from 'src/app/infrastructure/constans/Path';
import { Idioma } from 'src/app/domain/Idioma';
import { IdiomaService } from 'src/app/services/administracion/AdmInstitucional/idioma.service';
import Swal from 'sweetalert2';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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

  public tamNomIdioma : 0;
  public tamDescIdioma : 0;
  public idiomaForm: FormGroup;
  public enviado : boolean;

  constructor(private router: Router,
    private activedRouter: ActivatedRoute,
     private idiomaService: IdiomaService)  {
    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
    this.idioma = new Idioma();
    this.idiomaForm = this.createForm();
    this.enviado = false;
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



  get nomIdioma() { 
    if(this.idiomaForm.get('nomIdioma').value)
    this.tamNomIdioma =this.idiomaForm.get('nomIdioma').value.length;  
    console.log( this.tamNomIdioma);
    return this.idiomaForm.get('nomIdioma');  }

  get descIdioma() { 
    if(this.idiomaForm.get('descIdioma').value)
    this.tamDescIdioma =this.idiomaForm.get('descIdioma').value.length; 
    return this.idiomaForm.get('descIdioma'); }

  private OnlyTextPattern: any = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

  createForm() {
    return new FormGroup({
      nomIdioma: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40) , 
      Validators.pattern(this.OnlyTextPattern)]),
   
      descIdioma: new FormControl('', [Validators.maxLength(150)])
    });
  }


  cancelar(){
    this.navigateList();
  }
 
  public guardar() {
  this.enviado=true;
    if (this.idiomaForm.valid) {
      //entro
      this.load = true;
      console.log("this.idioma al guardar",this.idioma);
      this.idiomaService.editarIdiomaById(this.idioma, this.idioma.idIdioma).subscribe(data => {
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
    this.router.navigate(['administracionInstitucional/idiomas']).then();
  }
  public eliminar() {
 console.log("this.idioma",this.idioma);
 
    Swal.fire({
      title: 'Estas seguro que deseas eliminar el idioma '+this.idioma.nomIdioma,
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
        this.idiomaService.deleteIdiomaById(this.idioma.idIdioma).subscribe(data => {
        ;
          if (data) {
            this.load = false;
            Swal.fire(
              'Idioma Eliminado!',
              'El idioma '+ this.idioma.nomIdioma+' se elimino correctamente.',
              'success'
            );
            this.navigateList();
    
          } else {
            this.load = false;
            // this.obtenerIdiomas();
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
       
      }
      })



     

  } 


  
}
