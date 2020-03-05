import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Aula } from 'src/app/domain/Aula';
import { SedeService } from 'src/app/services/administracion/AdmInstitucional/sede.service';
import { Sede } from 'src/app/domain/Sede';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import { AulaService } from 'src/app/services/administracion/AdmInstitucional/aula.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-aula',
  templateUrl: './create-aula.component.html',
  styleUrls: ['./create-aula.component.css']
})
export class CreateAulaComponent implements OnInit {
  public aula: Aula;
  public load: boolean;
  public loading: string;
  public sedes : Sede[];
  public selectedTypeIdSede : number;
  public title: string;

  public tamNomAula : 0;
  public tamRefAula : 0;
  public aulaForm: FormGroup;
  public enviado : boolean;
    constructor(private router: Router , private serviceAula: AulaService,    private serviceSede: SedeService) {
    this.aula = new Aula();
    this.selectedTypeIdSede = 0;
    this.load = true;
    this.loading = Path.loading;
    this.aulaForm = this.createForm();
    this.enviado = false;
  }

  get nomAula() { 
    if(this.aulaForm.get('nomAula').value)
    this.tamNomAula =this.aulaForm.get('nomAula').value.length;  
    console.log( this.tamNomAula);
    return this.aulaForm.get('nomAula');  }

  get refAula() { 
    if(this.aulaForm.get('refAula').value)
    this.tamRefAula =this.aulaForm.get('refAula').value.length; 
    return this.aulaForm.get('refAula'); }

    get idSede() { 
      return this.aulaForm.get('idSede'); }
  // private OnlyTextPattern: any = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

  createForm() {
    return new FormGroup({
      nomAula: new FormControl('', [Validators.required,Validators.maxLength(8)     ]),
      refAula: new FormControl('', [Validators.maxLength(150)]),
      idSede: new FormControl('', [Validators.required ,Validators.min(1)  ])
    });
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
    this.enviado=true;

    this.aula.idSede = this.selectedTypeIdSede;
    console.log("this.selectedTypeIdSede",this.selectedTypeIdSede);
    console.log("(this.aula",this.aula);
    if (this.aulaForm.valid) {
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
            // this.successText = 'El nombre del aula ya existe, ingrese otro.';
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

  

  }
