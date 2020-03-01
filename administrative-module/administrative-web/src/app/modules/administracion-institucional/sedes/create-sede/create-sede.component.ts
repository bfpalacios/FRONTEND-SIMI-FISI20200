import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Sede } from 'src/app/domain/Sede';
import { SedeService } from 'src/app/services/administracion/AdmInstitucional/sede.service';
import Swal from 'sweetalert2';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-sede',
  templateUrl: './create-sede.component.html',
  styleUrls: ['./create-sede.component.css']
})
export class CreateSedeComponent implements OnInit {
  public sede: Sede;
  public load: boolean;
  public loading: string;
  public empty: boolean;
  public successText: string;
  public pmcompuesta : boolean;
  public sedeForm: FormGroup;
  public enviado : boolean;
  public tamNomSede : 0;
  public tamDescSede : 0;
  public tamDirSede : 0;
  constructor(private router: Router , private sedeService : SedeService )  {
    this.sede = new Sede();
    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
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


  ngOnInit() {//lenar cmbs
    this.load = false;

  }


    crear() {
      this.enviado = true;
      
      if (this.sedeForm.valid) {
        this.load = true;
        this.crearSede();
      }
    }
    private crearSede() {
      this.sedeService.crearSede(this.sede)
        .subscribe(data => {
          this.load = false;
          if (data) {
            Swal.fire(
              'Registro Exitoso!',
              'La sede '+this.sede.nomSede +' se registro correctamente.',
              'success'
            );
            this.navigateList();
          } else {
            this.empty = true;
            this.successText = 'La sede ya existe, pruebe otro.';
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
      this.router.navigate(['administracionInstitucional/sedes']).then();
    }

    }
   
