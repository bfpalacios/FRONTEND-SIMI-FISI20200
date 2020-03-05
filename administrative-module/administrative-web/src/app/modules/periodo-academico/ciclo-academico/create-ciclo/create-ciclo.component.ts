import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import Swal from 'sweetalert2';
import { PeriodoAcademico } from 'src/app/domain/PeriodoAcademico';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeriodoAcademicoService } from 'src/app/services/administracion/AdmInstitucional/periodo.academico';

@Component({
  selector: 'app-create-ciclo',
  templateUrl: './create-ciclo.component.html',
  styleUrls: ['./create-ciclo.component.css']
})
export class CreateCicloComponent implements OnInit {

  public ciclo: PeriodoAcademico;
  public load: boolean;
  public loading: string;

  public tamNom : 0;
  public enviado : boolean;
  public cicloForm: FormGroup;
  constructor(private router: Router , private serviceAula: PeriodoAcademicoService) {
    this.ciclo = new PeriodoAcademico();
    this.loading = Path.loading;
    this.cicloForm = this.createForm();
    this.enviado = false;
  }

  get nomCiclo() { if(this.cicloForm.get('nomCiclo').value)   this.tamNom =this.cicloForm.get('nomCiclo').value.length;  return this.cicloForm.get('nomCiclo');  }
   get fecInicio() { if(this.cicloForm.get('fecInicio').value) console.log("this.cicloForm.get('fecInicio').value",this.cicloForm.get('fecInicio').value);   return this.cicloForm.get('fecInicio');  }
   get fFin() { if(this.cicloForm.get('fFin').value)  console.log("this.cicloForm.get('fFin').value",this.cicloForm.get('fFin').value); return this.cicloForm.get('fFin');  }

  
  // private OnlyTextPattern: any = /^(\d{3,4}-{1}){1}\d{3,4}$/;
 
  createForm() {
    return new FormGroup({
      nomCiclo: new FormControl('', [Validators.required,Validators.maxLength(50) ]),
      fecInicio: new FormControl('',Validators.required ),
     fFin: new FormControl('',Validators.required )

      // fFin: new FormControl('', ),  // Validators.required 
      // fInicio: new FormControl('', )  // Validators.required 
    });
  }
  ngOnInit() {

  }

  crear(){
    this.enviado=true;
    console.log("this.cicloForm",this.cicloForm);
    console.log("this.ciclo",this.ciclo);

    if (this.cicloForm.valid) {
      console.log("entro no vacio");
      this.load = true;
      console.log(this.ciclo);
      this.crearCiclo();
    }
    }
    private crearCiclo() {
     
      this.serviceAula.crearPeriodoAcademico(this.ciclo)
        .subscribe(data => {
          console.log("data",data);
          this.load = false;
          if (data) {
            Swal.fire(
              'Registro Exitoso!',
              'El ciclo '+this.ciclo.nomPeriodo +' se registro correctamente.',
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
     
      this.router.navigate(['periodoAcademico/cicloAcademico']).then();
    }

  

  }
