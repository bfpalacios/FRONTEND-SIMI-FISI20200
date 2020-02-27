import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Aula } from 'src/app/domain/Aula';
import { SedeService } from 'src/app/services/administracion/AdmInstitucional/sede.service';
import { Sede } from 'src/app/domain/Sede';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import { AulaService } from 'src/app/services/administracion/AdmInstitucional/aula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-aula',
  templateUrl: './create-aula.component.html',
  styleUrls: ['./create-aula.component.css']
})
export class CreateAulaComponent implements OnInit {
  public aula: Aula;
  public load: boolean;
  public loading: string;
  public empty: boolean;
  public successText: string;
  public sedes : Sede[];
  // public pmcompuesta : boolean;
  public selectedTypeIdSede : number;
  public title: string;

  constructor(private router: Router , private serviceAula: AulaService,
    private serviceSede: SedeService) {
    this.aula = new Aula();
    this.selectedTypeIdSede = 0;
    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
  }

  setLocalStorageParamSede(title: string) {
    this.title = title;
    localStorage.setItem('parametroAula', this.title);
  }

  ngOnInit() {//lenar cmbs
    this.getSedes();
  }

  private getSedes() {
    this.serviceSede.getSedes().subscribe(data => {
      this.sedes = data;
      this.load = false;
    });
  }

   crear(){
    this.empty = this.isEmpty();
    this.aula.idSede = this.selectedTypeIdSede;
    console.log("this.selectedTypeIdSede",this.selectedTypeIdSede);
    console.log("(this.aula",this.aula);
    if (!this.empty) {
      console.log("entro no vacio");
      this.load = true;
      this.aula.idSede = this.selectedTypeIdSede;
      console.log(this.aula);
      this.crearAula();
    }
    }
    private crearAula() {
     
      this.serviceAula.crearAula(this.aula)
        .subscribe(data => {
          console.log("data",data);
          this.load = false;
          if (data) {
            Swal.fire(
              'Registro Exitoso!',
              'El aula '+this.aula.nomAula +' se registro correctamente.',
              'success'
            );
            this.navigateList();
           
          } else {
            this.empty = true;
            this.successText = 'El nombre del aula ya existe, ingrese otro.';
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
      if(this.aula.idSede){
        this.setLocalStorageParamSede((this.aula.idSede).toString());

      }
      this.router.navigate(['administracionInstitucional/aulas']).then();
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
    private isMayorTamNomAula(info: string, msg: string) {
      if(info != null){
        if (info.length >4) {
          this.successText = msg;
          return true;
        }
      }
    }
    private isMayorTamRefAula(info: string, msg: string) {
      if(info != null){
        if (info.length >=140) {
          this.successText = msg;
          return true;
        }
      }
    }
    private isEmpty() { // true : vacio 

      if (this.isEmpytNum( Number(this.aula.nomAula), Mensaje.emptyNomAula)) {
        return true;
      }
       
      if (this.isEmpytNum(this.selectedTypeIdSede, Mensaje.emptySede)) {
        
        return true;
      }
     
      if (this.isMayorTamNomAula(this.aula.nomAula, "Campo Aula, máximo 4 caracteres")) {
        return true;
      }
      if (this.isMayorTamRefAula(this.aula.refAula, "Campo Referencia, máximo 140 caracteres")) {
        return true;
      }

    }
  }
