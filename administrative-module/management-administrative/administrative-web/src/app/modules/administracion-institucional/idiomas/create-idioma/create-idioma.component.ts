import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Idioma } from 'src/app/domain/Idioma';
import { IdiomaService } from 'src/app/services/administracion/idioma/idioma.service';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';

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
  // public pmcompuesta : boolean;
  // public selectedTypeIdPerfil : number;
  // public selectedTypeIdEstado : number;

  constructor(private router: Router , private idiomaService: IdiomaService)  {
    // this.idioma = new Idioma();

    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
  }

  ngOnInit() {//lenar cmbs
    this.load=false;
  }

  crearIdioma(){
      // this.navigateList();
      // this.load = false;

      this.empty = this.isEmpty();
    if (!this.empty) {
      this.load = true;
      console.log(this.idioma);
      this.crearIdioma2();
    } }

    private crearIdioma2() {
      this.idiomaService.crearIdioma(this.idioma)
        .subscribe(o => {
          console.log("o",o);
          this.load = false;
          if (o) {
            this.navigateList();
          } else {
            this.empty = true;
            this.successText = 'El idioma ya existe, pruebe otro.';
          }
        });
    }

    cancelar(){
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
  private isEmpytNum(info: number, msg: string) {
    if (info === undefined || info == 0) {
      this.successText = msg;
      return true;
    }
  }
   

  private isEmpty() { // true : vacio 

    if (this.isEmpytText(this.idioma.nomIdioma, Mensaje.emptyNomIdioma)) {
      return true;
    }
    if (this.isEmpytText(this.idioma.descIdioma, Mensaje.emptyDescIdioma)) {
            return true;
    }} }
