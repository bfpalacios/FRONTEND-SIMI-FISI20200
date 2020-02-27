import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Sede } from 'src/app/domain/Sede';
import { SedeService } from 'src/app/services/administracion/AdmInstitucional/sede.service';
import Swal from 'sweetalert2';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';

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

  constructor(private router: Router , private sedeService : SedeService )  {
    this.sede = new Sede();
    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
  }

  

  ngOnInit() {//lenar cmbs
    this.load = false;

  }


    crear() {
      this.load = true;
      this.empty = this.isEmpty();
      if (!this.empty) {
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
    
  }
