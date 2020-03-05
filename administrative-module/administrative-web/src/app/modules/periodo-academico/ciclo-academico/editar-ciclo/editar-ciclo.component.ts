import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import Swal from 'sweetalert2';
import { PeriodoAcademico } from 'src/app/domain/PeriodoAcademico';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeriodoAcademicoService } from 'src/app/services/administracion/AdmInstitucional/periodo.academico';

@Component({
  selector: 'app-editar-ciclo',
  templateUrl: './editar-ciclo.component.html',
  styleUrls: ['./editar-ciclo.component.css']
})
export class EditarCicloComponent implements OnInit {
  public id: number;

  public ciclo: PeriodoAcademico;
  public load: boolean;
  public loading: string;

  public tamNom : 0;
  public enviado : boolean;
  public cicloForm: FormGroup;
  constructor(private router: Router , private servicepa: PeriodoAcademicoService , private activedRouter: ActivatedRoute) {
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
      });
    }

    ngOnInit() {
      // this.load = false;
      this.getCiclo();
  
    }

  private getCiclo() {
    this.activedRouter.params.subscribe(data => {
      console.log("data", data);
      if (data.id !== 0) {
        this.id = data.id;
        console.log("id ", this.id);
        console.log("data ", data);

        this.servicepa.getPeriodoAcademicoById(this.id).subscribe(data => {
          this.load = false;

          if (data !== null) {
            this.ciclo = data;
            console.log(this.ciclo);

          } else { this.navigateList(); }

        });
      }
      else {
        this.navigateList();
      }
    });
  }

  cancelar() {
    this.navigateList();
  }

  public guardar() {
    this.enviado=true;
    if ( this.cicloForm.valid) {
      //entro
      this.load = true;
      console.log("this.aula al guardar", this.ciclo);

      this.servicepa.editarPeriodoAcademicoById(this.ciclo, this.ciclo.idPeriodo).subscribe(data => {
        if (data != null) {
          console.log("data", data);
          Swal.fire(
            'Edición Exitosa!',
            'El ciclo ' + this.ciclo.nomPeriodo + ' se edito correctamente.',
            'success'
          );
          // this.guardarCliente();
          this.navigateList();
        } else {
          this.load = false;
          // this.empty = true;
          // this.successText = 'El aula  ya existe';
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


  public eliminar() {
    console.log("this.aula", this.ciclo);

    Swal.fire({
      title: 'Estas seguro que deseas eliminar el ciclo ' + this.ciclo.nomPeriodo + ' ?',
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
        this.servicepa.deletePeriodoAcademicoById(this.ciclo.idPeriodo).subscribe(data => {
          if (data) {
            Swal.fire(
              'Eliminación Exitosa!',
              'El ciclo ' + this.ciclo.nomPeriodo + ' se eliminó correctamente.',
              'success'
            );
            this.navigateList();
          } else {
            this.load = false;
            // this.successText = 'No se puede eliminar este aula';
          }
        }, error => {
          if (error) {
            Swal.fire(
              'Error!',
              error.error.text,
              'error'
            );
           if (error) {
             this.load = false;
             // this.obtenerIdiomas();
            
           }
          }
        });


      }
    })

  }


  private navigateList() {
   
    this.router.navigate(['periodoAcademico/cicloAcademico']).then();
  }

}
