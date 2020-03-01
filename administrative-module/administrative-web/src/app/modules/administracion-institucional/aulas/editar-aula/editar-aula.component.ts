import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import Swal from 'sweetalert2';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import { Aula } from 'src/app/domain/Aula';
import { AulaService } from 'src/app/services/administracion/AdmInstitucional/aula.service';
import { SedeService } from 'src/app/services/administracion/AdmInstitucional/sede.service';
import { Sede } from 'src/app/domain/Sede';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-aula',
  templateUrl: './editar-aula.component.html',
  styleUrls: ['./editar-aula.component.css']
})
export class EditarAulaComponent implements OnInit {
    public id: number;
  public load: boolean;
  public loading: string;
  public aula: Aula;
  public title: string;
  public selectedTypeIdSede: number;
  public sedes: Sede[];

  public tamNomAula : 0;
  public tamRefAula : 0;
  public aulaForm: FormGroup;
  public enviado : boolean
  constructor(private router: Router, private serviceAula: AulaService,
    private activedRouter: ActivatedRoute, private serviceSede: SedeService) {
    this.load = true;
    this.loading = Path.loading;
    this.aula = new Aula();
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
      idSede: new FormControl('', Validators.required)
    });
  }

  setLocalStorageParamSede(title: string) {
    this.title = title;
    localStorage.setItem('parametroAula', this.title);
  }

  ngOnInit() {
    // this.load = false;
    this.getAula();
    this.getSedes();

  }
  private getSedes() {
    this.serviceSede.getSedes().subscribe(data => {
      this.sedes = data;
      this.load = false;
    });
  }

  private getAula() {
    this.activedRouter.params.subscribe(data => {
      console.log("data", data);
      if (data.id !== 0) {
        this.id = data.id;
        console.log("id ", this.id);
        console.log("data ", data);

        this.serviceAula.getAulaById(this.id).subscribe(data => {
          this.load = false;

          if (data !== null) {
            this.aula = data;
            this.selectedTypeIdSede = this.aula.idSede;
            console.log(this.aula);

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
    if ( this.aulaForm.valid) {
      //entro
      this.load = true;
      this.aula.idSede = this.selectedTypeIdSede;
      console.log("this.aula al guardar", this.aula);

      this.serviceAula.editarAulaById(this.aula, this.aula.idAula).subscribe(data => {
        if (data != null) {
          console.log("data", data);
          Swal.fire(
            'Edición Exitosa!',
            'El aula ' + this.aula.nomAula + ' se edito correctamente.',
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


  private navigateList() {
    if(this.aula.idSede){
      this.setLocalStorageParamSede((this.aula.idSede).toString());
    }
    
    this.router.navigate(['administracionInstitucional/aulas']).then();
  }

  public eliminar() {
    console.log("this.aula", this.aula);

    Swal.fire({
      title: 'Estas seguro que deseas eliminar el aula ' + this.aula.nomAula + ' ?',
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
        this.serviceAula.deleteAulaById(this.aula.idAula).subscribe(data => {
          if (data) {
            Swal.fire(
              'Eliminación Exitosa!',
              'El aula ' + this.aula.nomAula + ' se eliminó correctamente.',
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



}
