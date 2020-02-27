import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Idioma } from 'src/app/domain/Idioma';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import { IdiomaService } from 'src/app/services/administracion/AdmInstitucional/idioma.service';
import Swal from 'sweetalert2';

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
  constructor(private router: Router, private idiomaService: IdiomaService) {
    this.idioma = new Idioma();
    this.load = false;
    this.empty = false;
    this.loading = Path.loading;
  }

  ngOnInit() {
  }

  crear() {
    this.load = true;
    this.empty = this.isEmpty();
    if (!this.empty) {
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
    // if (this.isEmpytText(this.idioma.descIdioma, Mensaje.emptyDescIdioma)) {
    //   return true;
    // }
  }
}
