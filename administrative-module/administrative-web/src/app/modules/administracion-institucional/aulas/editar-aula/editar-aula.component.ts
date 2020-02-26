import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import Swal from 'sweetalert2';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import { Aula } from 'src/app/domain/Aula';
import { AulaService } from 'src/app/services/administracion/AdmInstitucional/aula.service';
import { SedeService } from 'src/app/services/administracion/AdmInstitucional/sede.service';
import { Sede } from 'src/app/domain/Sede';

@Component({
  selector: 'app-editar-aula',
  templateUrl: './editar-aula.component.html',
  styleUrls: ['./editar-aula.component.css']
})
export class EditarAulaComponent implements OnInit {
    public id: number;
  public load: boolean;
  public loading: string;
  public empty: boolean;
  public successText: string;
  public aula: Aula;
  public title: string;

  // public pmcompuesta : boolean;
  public success: boolean;
  public selectedTypeIdSede: number;
  public sedes: Sede[];

  constructor(private router: Router, private serviceAula: AulaService,
    private activedRouter: ActivatedRoute, private serviceSede: SedeService) {
    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
    this.success = false;
    this.aula = new Aula();

  }

  setLocalStorageParamSede(title: string) {
    this.title = title;
    localStorage.setItem('parametro', this.title);
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

  private isEmpty() {

    if (this.isEmpytText(this.aula.nomAula, Mensaje.emptyNomAula)) {
      return true;
    }
    // if (this.isEmpytText(this.aula.refAula, Mensaje.emptyRefAula)) {
    //   return true;
    // }

    if (this.isEmpytNum(this.selectedTypeIdSede, Mensaje.emptySede)) {

      return true;
    }

  }



  cancelar() {
    this.navigateList();
  }

  public guardar() {
    this.success = this.isEmpty();
    this.empty = this.isEmpty();
    if (!this.empty) {
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
          this.empty = true;
          this.successText = 'El aula  ya existe';
        }
      });
    }
  }


  private navigateList() {
    
    this.setLocalStorageParamSede(this.aula.idSede.toString());
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
            this.success = true;
            this.successText = 'No se puede eliminar este aula';
          }
        }, error => {
          if (error) {
            this.load = false;
            this.success = true;
            this.successText = 'Sucedió un error con el servidor';
          }
        });


      }
    })

  }



}
