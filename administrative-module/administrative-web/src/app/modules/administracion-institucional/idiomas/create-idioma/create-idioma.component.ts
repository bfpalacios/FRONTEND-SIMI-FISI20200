import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Idioma } from 'src/app/domain/Idioma';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import { IdiomaService } from 'src/app/services/administracion/AdmInstitucional/idioma.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-idioma',
  templateUrl: './create-idioma.component.html',
  styleUrls: ['./create-idioma.component.css']
})
export class CreateIdiomaComponent implements OnInit {
  public idioma: Idioma;
  public load: boolean;
  public loading: string;
  public empty: boolean;
  public successText: string;
  public tamNomIdioma : 0;
  public tamDescIdioma : 0;
  public idiomaForm: FormGroup;
  public enviado : boolean;
  constructor(private router: Router, private idiomaService: IdiomaService ) {
    this.idioma = new Idioma();
    this.load = false;
    this.empty = false;
    this.loading = Path.loading;
    this.idiomaForm = this.createForm();
    this.enviado = false;
  }
  get nomIdioma() {     if(this.idiomaForm.get('nomIdioma').value)    this.tamNomIdioma =this.idiomaForm.get('nomIdioma').value.length;   return this.idiomaForm.get('nomIdioma');  }

  get descIdioma() {     if(this.idiomaForm.get('descIdioma').value)    this.tamDescIdioma =this.idiomaForm.get('descIdioma').value.length;     return this.idiomaForm.get('descIdioma'); }

  private OnlyTextPattern: any = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

  createForm() {
    return new FormGroup({
      nomIdioma: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40) ,   Validators.pattern(this.OnlyTextPattern)]),
   
      descIdioma: new FormControl('', [Validators.maxLength(150)])
    });
  }
  onResetForm(): void {
    this.idiomaForm.reset();
  }

  
  ngOnInit() {
  }

  crear() {
    this.enviado=true;
    // !this.empty 
   
    if (this.idiomaForm.valid) {
      this.load = true;
      this.crearIdioma();
    }

  }

  private crearIdioma() {
    this.idiomaService.crearIdioma(this.idioma)
      .subscribe(data => {
        this.load = false;
        if (data) {
          Swal.fire(
            'Registro Exitoso!',
            'El idioma '+this.idioma.nomIdioma +' se registro correctamente.',
            'success'
          );
          this.navigateList();
        } else {
          this.empty = true;
          this.successText = 'El idioma ya existe, pruebe otro.';
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

  cancelar() {
    this.navigateList();
    this.load = false;
  }

  private navigateList() {
    this.router.navigate(['administracionInstitucional/idiomas']).then();
  }


}


